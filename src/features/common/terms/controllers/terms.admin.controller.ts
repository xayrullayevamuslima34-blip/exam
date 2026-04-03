import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from "@nestjs/common";
import {TermsAdminService} from "../services/terms.admin.service";;
import {TermsCreateAdminDto} from "../dtos/admin/terms.create.admin.dto";
import {TermsUpdateAdminDto} from "../dtos/admin/terms.update.admin.dto";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/terms")
export class TermsAdminController{

    constructor(private readonly termsService: TermsAdminService) {}

    @Get("list")
    async getAll(){
        return this.termsService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.termsService.getOne(id)
    }

    @Post("create")
    async create(@Body() payload: TermsCreateAdminDto){
        return this.termsService.create(payload)
    }

    @Patch("update/:id")
    async update(@Param("id") id: string, @Body() payload: TermsUpdateAdminDto){
        return this.termsService.update(id, payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: string){
        return this.termsService.delete(id)
    }

}