import {Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards} from "@nestjs/common";
import {CourseUserLessonCreateAdminDto} from "../../dtos/course-user-lessons/admin/course-user-lesson.create.admin.dto";
import {CourseUserLessonUpdateAdminDto} from "../../dtos/course-user-lessons/admin/course-user-lesson.update.admin.dto";
import {CourseUserLessonsAdminService} from "../../services/course-user-lessons/course-user-lessons.admin.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import { CourseUserLessonsFilter } from '../../filters/course-user-lessons.filter';

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/course-user-lessons")
export class CourseUserLessonsAdminController{

    constructor(private readonly courseUserLessonService: CourseUserLessonsAdminService) {}

    @Get("list")
    async getAll(@Query() filter: CourseUserLessonsFilter){
        return this.courseUserLessonService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
       return this.courseUserLessonService.getOne(id)
    }

    @Post("create")
    async create(@Body() payload: CourseUserLessonCreateAdminDto){
        return this.courseUserLessonService.create(payload)
    }

    @Patch("update/id")
    async update(@Param("id") id: number, @Body() payload: CourseUserLessonUpdateAdminDto){
        return this.courseUserLessonService.update(id, payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number){
        return this.courseUserLessonService.delete(id)
    }


}