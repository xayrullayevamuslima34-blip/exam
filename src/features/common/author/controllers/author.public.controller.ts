import {Controller, Get, UseGuards} from "@nestjs/common";
import {AuthorsPublicService} from "../services/author.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller('public/authors')
export class AuthorsPublicController{

    constructor(private service:AuthorsPublicService){}

    @Get()
    async getAll(){
        return await this.service.getAll()
    }
}