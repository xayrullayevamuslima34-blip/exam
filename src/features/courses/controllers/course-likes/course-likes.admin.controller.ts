import {Controller, Delete, Get, Param, Query, UseGuards} from "@nestjs/common";
import {CourseLikesAdminService} from "../../services/course-likes/course-likes.admin.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {ApiBearerAuth} from "@nestjs/swagger";
import { CourseLikesFilter } from '../../filters/course-likes.filter';

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("admin/course-likes")
export class CourseLikesAdminController{

    constructor(private readonly courseLikesService: CourseLikesAdminService) {}

    @Get("list")
    async getAll(@Query() filter: CourseLikesFilter){
        return this.courseLikesService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.courseLikesService.getOne(id)
    }

    @Delete(":id")
    async delete(@Param("id") id: number){
        return this.courseLikesService.delete(id)
    }

}