import {Body, Injectable, NotFoundException, Param} from "@nestjs/common";
import {Users} from "../entities/user.entity";
import {UsersCreateAdminDto} from "../dtos/admin/user.create.admin.dto";
import {UsersUpdateAdminDto} from "../dtos/admin/user.update.admin.dto";
import { ConfigService } from '@nestjs/config';
import { plainToInstance } from 'class-transformer';
import { UsersListAdminDto } from '../dtos/admin/user.list.admin.dto';

@Injectable()
export class UsersAdminService{

    constructor(private readonly config: ConfigService) {}

    async getAll(){
        const rawUsers = await Users.find()
        for (let user of rawUsers){
            user.profileImage = this.config.getOrThrow<string>('BASE_URL')
        }
        return plainToInstance(UsersListAdminDto, rawUsers)
    }

    async getOne(@Param("id") id: string){
        const user = await Users.findOneBy({id: +id})
        if(!user){
            throw new NotFoundException("User not found")
        }
        return user
    }

    async create(payload: UsersCreateAdminDto, profileImage: Express.Multer.File){
        const users = Users.create({...payload, profileImage: profileImage.path})
        await Users.save(users)
        return users
    }

    async update(id: string, payload: UsersUpdateAdminDto, profileImage: Express.Multer.File){
        const users = await Users.findOneBy({id: +id})
        if(!users){
            throw new NotFoundException("User not found")
        }
        Object.assign(users,
            Object.fromEntries(
                Object.entries(payload).filter(([key, value]) => value)
            ))
        await Users.save(users)
        return users
    }

    async delete(@Param("id") id: string){
        const users = await Users.findOneBy({id: +id})
        if(!users){
            throw new NotFoundException("User not found")
        }
        await Users.remove(users)
        return users
    }

}