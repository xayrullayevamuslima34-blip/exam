import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {UsersPublicService} from "../services/user.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/users")
export class UsersPublicController{

    constructor(private readonly userService: UsersPublicService) {}

    @Get("list")
    async getAll(){
        return this.userService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.userService.getOne(id)
    }

}