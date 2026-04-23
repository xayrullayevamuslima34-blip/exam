import { Injectable, NotFoundException,} from "@nestjs/common";
import {Users} from "../../entities/user.entity";
import {UsersCreateAdminDto} from "../../dtos/users/admin/user.create.admin.dto";
import {UsersUpdateAdminDto} from "../../dtos/users/admin/user.update.admin.dto";
import { ConfigService } from '@nestjs/config';
import { plainToInstance } from 'class-transformer';
import { UsersListAdminDto } from '../../dtos/users/admin/user.list.admin.dto';
import { UserFilter } from '../../filters/user.filter';
import { UserRepository } from '../../repositories/user.repository';

@Injectable()
export class UsersAdminService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: UserRepository) {
    }

    async getAll(filter: UserFilter){
        const rawUsers = await this.repo.getAll(filter)
        for (let user of rawUsers.data){
            user.profileImage = this.config.getOrThrow<string>('BASE_URL')
        }
        return plainToInstance(UsersListAdminDto, rawUsers)
    }

    async getOne(id: number){
        const user = await this.repo.getOneById(id)
        if(!user){
            throw new NotFoundException("User not found")
        }
        return user
    }

    async create(payload: UsersCreateAdminDto, profileImage: Express.Multer.File){
        const users = Users.create({...payload, profileImage: profileImage.path})
        return await this.repo.save(users)
    }

    async update(id: number, payload: UsersUpdateAdminDto, profileImage: Express.Multer.File){
        const users = await this.repo.getOneById(id)
        if(!users){
            throw new NotFoundException("User not found")
        }
        Object.assign(users,
            Object.fromEntries(
                Object.entries(payload).filter(([key, value]) => value)
            ))
        return await this.repo.save(users)
    }

    async delete(id: number){
        const users = await this.repo.getOneById(id)
        if(!users){
            throw new NotFoundException("User not found")
        }
        return await this.repo.delete(users)
    }

}