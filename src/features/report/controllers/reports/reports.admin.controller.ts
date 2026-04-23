import {Controller, Delete, Get, Param, Query} from "@nestjs/common";
import {ReportsAdminService} from "../../services/reports/reports.admin.service";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import {ApiBearerAuth, ApiOkResponse} from "@nestjs/swagger";
import { PaginationFilters } from '../../../../core/filters/pagination.filter';
import { ReportFilter } from '../../filters/report.filter';

@ApiBearerAuth()
@Roles(Role.Admin)
@Controller("admin/reports")
export class ReportsAdminController{

    constructor(private readonly reportsService: ReportsAdminService) {}

    @Get("list")
    @ApiOkResponse({type: PaginationFilters})
    async getAll(@Query() filter: ReportFilter){
        return this.reportsService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param(":id") id: number){
        return this.reportsService.getOne(id)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number){
        return this.reportsService.delete(id)
    }

}