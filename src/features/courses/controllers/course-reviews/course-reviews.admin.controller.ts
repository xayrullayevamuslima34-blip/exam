import {Controller, Delete, Get, Param, UseGuards} from "@nestjs/common";
import {CourseReviewsAdminService} from "../../services/course-reviews/course-reviews.admin.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/course-reviews")
export class CourseReviewsAdminController{

    constructor(private readonly courseReviewsService: CourseReviewsAdminService) {}

    @Get("list")
    async getAll(){
        return this.courseReviewsService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.courseReviewsService.getOne(id)
    }

    @Delete("delete")
    async delete(@Param("id") id: string){
        return this.courseReviewsService.delete(id)
    }

}