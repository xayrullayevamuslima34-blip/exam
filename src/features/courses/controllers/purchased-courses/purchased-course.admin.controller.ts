import {Controller, Delete, Get, Param, Query, UseGuards} from "@nestjs/common";
import {PurchasedCoursesAdminService} from "../../services/purchased-courses/purchased-courses.admin.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import { PurchasedCoursesFilter } from '../../filters/purchased-courses.filter';

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/purchased-courses")
export class PurchasedCourseAdminController{

    constructor(private readonly purchasedCourseService: PurchasedCoursesAdminService) {}

    @Get("list")
    async getAll(@Query() filter: PurchasedCoursesFilter){
        return this.purchasedCourseService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param(":id") id: number){
        return this.purchasedCourseService.getOne(id)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number){
        return this.purchasedCourseService.delete(id)
    }


}