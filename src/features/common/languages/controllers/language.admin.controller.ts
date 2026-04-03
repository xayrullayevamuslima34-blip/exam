import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from "@nestjs/common";
import {LanguageCreateAdminDto} from "../dtos/admin/language.create.admin.dto";
import {LanguageUpdateAdminDto} from "../dtos/admin/language.update.admin.dto";
import {LanguageAdminService} from "../services/language.admin.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/languages")
export class LanguageAdminController{

    constructor(private readonly languageService: LanguageAdminService) {}

    @Get("list")
    async getAll(){
        return this.languageService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.languageService.getOne(id)
    }

    @Post("create")
    async create(@Body() payload: LanguageCreateAdminDto){
        return this.languageService.create(payload)
    }

    @Patch("update/:id")
    async update(@Param("id") id: string, @Body() payload: LanguageUpdateAdminDto){
        return this.languageService.update(id, payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: string){
       return this.languageService.delete(id)
    }

}