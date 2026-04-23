import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from "@nestjs/common";
import {ReportCategoriesAdminService} from "../../services/report-categories/report-categories.admin.service";
import {ReportCategoriesCreateAdminDto} from "../../dtos/report-categories/admin/report-categories.create.admin.dto";
import {ReportCategoriesUpdateAdminDto} from "../../dtos/report-categories/admin/report-categories.update.admin.dto";
import {ApiBearerAuth, ApiOkResponse} from "@nestjs/swagger";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import { PaginationFilters } from '../../../../core/filters/pagination.filter';
import { ReportCategoriesFilter } from '../../filters/report-categories.filter';

@ApiBearerAuth()
@Roles(Role.Admin)
@Controller("admin/report-categories")
export class ReportCategoriesAdminController{

    constructor(private readonly reportCategoriesService: ReportCategoriesAdminService) {}

    @Get("list")
    @ApiOkResponse({type: PaginationFilters})
    async getAll(@Query() filter: ReportCategoriesFilter){
        return this.reportCategoriesService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.reportCategoriesService.getOne(id)
    }

    @Post("create")
    async create(@Body() payload: ReportCategoriesCreateAdminDto){
        return this.reportCategoriesService.create(payload)
    }

    @Patch("update/:id")
    async update(@Param("id") id: number, @Body() payload: ReportCategoriesUpdateAdminDto){
        return this.reportCategoriesService.update(id, payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number){
        return this.reportCategoriesService.delete(id)
    }


}