import {Controller, Delete, Get, Param, Query, UseGuards} from "@nestjs/common";
import {CourseReviewsAdminService} from "../../services/course-reviews/course-reviews.admin.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import { CourseReviewsFilter } from '../../filters/course-reviews.filter';

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/course-reviews")
export class CourseReviewsAdminController{

    constructor(private readonly courseReviewsService: CourseReviewsAdminService) {}

    @Get("list")
    async getAll(@Query() filter: CourseReviewsFilter){
        return this.courseReviewsService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.courseReviewsService.getOne(id)
    }

    @Delete("delete")
    async delete(@Param("id") id: number){
        return this.courseReviewsService.delete(id)
    }

}