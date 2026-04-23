import {Controller, Get, Param, Query, UseGuards} from "@nestjs/common";
import {UsersPublicService} from "../../services/users/user.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import { UserFilter } from '../../filters/user.filter';

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/users")
export class UsersPublicController{

    constructor(private readonly userService: UsersPublicService) {}

    @Get("list")
    async getAll(@Query() filter: UserFilter){
        return this.userService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.userService.getOne(id)
    }

}