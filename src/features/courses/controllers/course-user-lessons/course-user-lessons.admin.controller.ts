import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from "@nestjs/common";
import {CourseUserLessonCreateAdminDto} from "../../dtos/course-user-lessons/admin/course-user-lesson.create.admin.dto";
import {CourseUserLessonUpdateAdminDto} from "../../dtos/course-user-lessons/admin/course-user-lesson.update.admin.dto";
import {CourseUserLessonsAdminService} from "../../services/course-user-lessons/course-user-lessons.admin.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/course-user-lessons")
export class CourseUserLessonsAdminController{

    constructor(private readonly courseUserLessonService: CourseUserLessonsAdminService) {}

    @Get("list")
    async getAll(){
        return this.courseUserLessonService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
       return this.courseUserLessonService.getOne(id)
    }

    @Post("create")
    async create(@Body() payload: CourseUserLessonCreateAdminDto){
        return this.courseUserLessonService.create(payload)
    }

    @Patch("update/id")
    async update(@Param("id") id: string, @Body() payload: CourseUserLessonUpdateAdminDto){
        return this.courseUserLessonService.update(id, payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: string){
        return this.courseUserLessonService.delete(id)
    }


}