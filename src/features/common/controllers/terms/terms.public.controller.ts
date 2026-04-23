import {Controller, Get, Param, Query, UseGuards} from "@nestjs/common";
import {TermsPublicService} from "../../services/terms/terms.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import { TermsFilter } from '../../filters/terms.filter';

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/terms")
export class TermsPublicController{

    constructor(private readonly termsService: TermsPublicService) {}

    @Get("list")
    async getAll(@Query() filter: TermsFilter){
        return this.termsService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.termsService.getOne(id)
    }

}