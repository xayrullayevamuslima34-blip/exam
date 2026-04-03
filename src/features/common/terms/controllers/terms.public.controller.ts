import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {TermsPublicService} from "../services/terms.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/terms")
export class TermsPublicController{

    constructor(private readonly termsService: TermsPublicService) {}

    @Get("list")
    async getAll(){
        return this.termsService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.termsService.getOne(id)
    }

}