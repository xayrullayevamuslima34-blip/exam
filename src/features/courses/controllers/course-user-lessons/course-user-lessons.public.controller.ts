import {Controller, Get, Param, Query, UseGuards} from "@nestjs/common";
import {CourseUserLessonsPublicService} from "../../services/course-user-lessons/course-user-lessons.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import { CourseUserLessonsFilter } from '../../filters/course-user-lessons.filter';

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("course-user-lessons")
export class CourseUserLessonsPublicController{

    constructor(private readonly courseUserLessonsService: CourseUserLessonsPublicService) {}

    @Get("list")
    async getAll(@Query() filter: CourseUserLessonsFilter){
        return this.courseUserLessonsService.getAll(filter)
    }

    @Get("id")
    async getOne(@Param("id") id: number){
        return this.courseUserLessonsService.getOne(id)
    }
}