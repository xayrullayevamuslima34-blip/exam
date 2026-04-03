import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {CourseUserLessonsPublicService} from "../../services/course-user-lessons/course-user-lessons.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("course-user-lessons")
export class CourseUserLessonsPublicController{

    constructor(private readonly courseUserLessonsService: CourseUserLessonsPublicService) {}

    @Get("list")
    async getAll(){
        return this.courseUserLessonsService.getAll()
    }

    @Get("id")
    async getOne(@Param("id") id: string){
        return this.courseUserLessonsService.getOne(id)
    }
}