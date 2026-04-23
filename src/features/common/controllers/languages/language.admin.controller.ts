import {Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards} from "@nestjs/common";
import {LanguageCreateAdminDto} from "../../dtos/languages/admin/language.create.admin.dto";
import {LanguageUpdateAdminDto} from "../../dtos/languages/admin/language.update.admin.dto";
import {LanguageAdminService} from "../../services/languages/language.admin.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import { LanguageFilter } from '../../filters/language.filter';

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/languages")
export class LanguageAdminController{

    constructor(private readonly languageService: LanguageAdminService) {}

    @Get("list")
    async getAll(@Query() filter: LanguageFilter){
        return this.languageService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.languageService.getOne(id)
    }

    @Post("create")
    async create(@Body() payload: LanguageCreateAdminDto){
        return this.languageService.create(payload)
    }

    @Patch("update/:id")
    async update(@Param("id") id: number, @Body() payload: LanguageUpdateAdminDto){
        return this.languageService.update(id, payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number){
       return this.languageService.delete(id)
    }

}