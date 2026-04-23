import {Controller, Get, Param, Query, UseGuards} from "@nestjs/common";
import {CourseLessonsPublicService} from "../../services/course-lessons/course-lessons.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import { CourseLessonsFilter } from '../../filters/course-lessons.filter';

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/course-lessons")
export class CourseLessonsPublicController{

    constructor(private readonly courseLessonsService: CourseLessonsPublicService) {}

    @Get("list")
    async getAll(@Query() filter: CourseLessonsFilter){
        return this.courseLessonsService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.courseLessonsService.getOne(id)
    }


}