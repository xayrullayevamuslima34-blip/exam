import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from "@nestjs/common";
import {TermsAdminService} from "../../services/terms/terms.admin.service";;
import {TermsCreateAdminDto} from "../../dtos/terms/admin/terms.create.admin.dto";
import {TermsUpdateAdminDto} from "../../dtos/terms/admin/terms.update.admin.dto";
import {ApiBearerAuth} from "@nestjs/swagger";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import { TermsFilter } from '../../filters/terms.filter';

@ApiBearerAuth()
@Roles(Role.Admin)
@Controller("admin/terms")
export class TermsAdminController{

    constructor(private readonly termsService: TermsAdminService) {}

    @Get("list")
    async getAll(@Query() filter: TermsFilter){
        return this.termsService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.termsService.getOne(id)
    }

    @Post("create")
    async create(@Body() payload: TermsCreateAdminDto){
        return this.termsService.create(payload)
    }

    @Patch("update/:id")
    async update(@Param("id") id: number, @Body() payload: TermsUpdateAdminDto){
        return this.termsService.update(id, payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number){
        return this.termsService.delete(id)
    }

}