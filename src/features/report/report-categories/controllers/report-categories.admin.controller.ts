import {Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseGuards} from "@nestjs/common";
import {ReportCategories} from "../entities/report-categories.entity";
import {ReportCategoriesAdminService} from "../services/report-categories.admin.service";
import {ReportCategoriesCreateAdminDto} from "../dtos/admin/report-categories.create.admin.dto";
import {ReportCategoriesUpdateAdminDto} from "../dtos/admin/report-categories.update.admin.dto";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/report-categories")
export class ReportCategoriesAdminController{

    constructor(private readonly reportCategoriesService: ReportCategoriesAdminService) {}

    @Get("list")
    async getAll(){
        return this.reportCategoriesService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.reportCategoriesService.getOne(id)
    }

    @Post("create")
    async create(@Body() payload: ReportCategoriesCreateAdminDto){
        return this.reportCategoriesService.create(payload)
    }

    @Patch("update/:id")
    async update(@Param("id") id: string, @Body() payload: ReportCategoriesUpdateAdminDto){
        return this.reportCategoriesService.update(id, payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: string){
        return this.reportCategoriesService.delete(id)
    }


}