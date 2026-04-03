import {Controller, Delete, Get, NotFoundException, Param, UseGuards} from "@nestjs/common";
import {ReportsAdminService} from "../service/reports.admin.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import {ApiBearerAuth} from "@nestjs/swagger";
import {Reports} from "../entities/reports.entity";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/reports")
export class ReportsAdminController{

    constructor(private readonly reportsService: ReportsAdminService) {}

    @Get("list")
    async getAll(){
        return this.reportsService.getAll()
    }

    @Get(":id")
    async getOne(@Param(":id") id: string){
        return this.reportsService.getOne(id)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: string){
        return this.reportsService.delete(id)
    }

}