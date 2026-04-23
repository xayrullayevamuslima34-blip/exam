import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ILike } from 'typeorm';
import {UserCreateAdminDto} from "../../dtos/auth/admin/user.create.admin.dto";
import {User} from "../../entities/authentication.entity";
import {UserLoginAdminDto} from "../../dtos/auth/admin/user.login.admin.dto";
import argon2 from "argon2";

@Injectable()
export class AuthenticationAdminService {
    constructor(private readonly jwtService: JwtService) {}

    async create(payload: UserCreateAdminDto) {
        let exists = await User.countBy({ login: ILike(payload.login) });
        if (exists) throw new BadRequestException('Login already exists');

        let user = User.create({ ...payload });
        user.password = await argon2.hash(payload.password);
        user.isVerified = true;
        user.isActive = true;
        await User.save(user);

        let { password, ...safe } = user;
        return safe;
    }

    async login({ login, password }: UserLoginAdminDto) {
        let user = await User.findOneBy({ login: ILike(login) });
        if (!user || !user.password) throw new UnauthorizedException('Invalid credentials');

        let valid = await argon2.verify(user.password, password);
        if (!valid) throw new UnauthorizedException('Invalid credentials');

        let accessToken = this.jwtService.sign({
            id: user.id,
            login: user.login,
            role: user.role,
        });

        return { accessToken };
    }
}