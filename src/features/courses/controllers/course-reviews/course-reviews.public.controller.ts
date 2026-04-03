import {Body, Controller, Get, Param, Post, UseGuards} from "@nestjs/common";
import {CourseReviewsPublicService} from "../../services/course-reviews/course-reviews.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Role} from "../../../../core/enums/role.enum";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {ApiBearerAuth} from "@nestjs/swagger";
import {CourseReviewCreateAdminDto} from "../../dtos/course-reviews/admin/course-review.create.admin.dto";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.User)
@Controller("public/course-reviews")
export class CourseReviewsPublicController{

    constructor(private readonly courseReviewService: CourseReviewsPublicService) {}

    @Post("create")
    async create(@Body() payload: CourseReviewCreateAdminDto){
        return this.courseReviewService.create(payload)
    }

}