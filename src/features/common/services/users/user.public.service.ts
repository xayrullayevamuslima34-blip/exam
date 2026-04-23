import {Injectable, NotFoundException} from "@nestjs/common";
import { UserFilter } from '../../filters/user.filter';
import { UserRepository } from '../../repositories/user.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersPublicService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: UserRepository) {
    }

    async getAll(filter: UserFilter){
        return await this.repo.getAll(filter)
    }

    async getOne(id: number){
        const users = await this.repo.getOneById(id)
        if(!users){
            throw new NotFoundException("User not found")
        }
        return users
    }

}