import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {CourseLessonsPublicService} from "../../services/course-lessons/course-lessons.public.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/course-lessons")
export class CourseLessonsPublicController{

    constructor(private readonly courseLessonsService: CourseLessonsPublicService) {}

    @Get("list")
    async getAll(){
        return this.courseLessonsService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.courseLessonsService.getOne(id)
    }


}