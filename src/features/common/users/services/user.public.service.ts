import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {Users} from "../entities/user.entity";

@Injectable()
export class UsersPublicService{
    async getAll(){
        return await Users.find()
    }

    async getOne(@Param("id") id: string){
        const users = await Users.findOneBy({id: +id})
        if(!users){
            throw new NotFoundException("User not found")
        }
        return users
    }

}