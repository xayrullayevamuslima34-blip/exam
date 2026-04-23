import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post, Query, UploadedFile,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {CourseLessonCreateAdminDto} from "../../dtos/course-lessons/admin/course-lesson.create.admin.dto";
import {CourseLessonUpdateAdminDto} from "../../dtos/course-lessons/admin/course-lesson.update.admin.dto";
import {CourseLessonsAdminService} from "../../services/course-lessons/course-lessons.admin.service";
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "../../../../config/multer.config";
import { CourseLessonListAdminDto } from '../../dtos/course-lessons/admin/course-lesson.list.admin.dto';
import { CourseLessonsFilter } from '../../filters/course-lessons.filter';

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/course-lessons")
export class CourseLessonsAdminController{

    constructor(private readonly courseLessonsService: CourseLessonsAdminService) {}

    @ApiOkResponse({type: [CourseLessonListAdminDto], isArray: true})
    @Get("list")
    async getAll(@Query() filter: CourseLessonsFilter){
        return this.courseLessonsService.getAll(filter)
    }

    @ApiOkResponse({type: [CourseLessonListAdminDto]})
    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.courseLessonsService.getOne(id)
    }

    @UseInterceptors(FileInterceptor('video', {storage: storageOptions}))
    @Post("create")
    async create(@Body() payload: CourseLessonCreateAdminDto, @UploadedFile() video: Express.Multer.File){
        return this.courseLessonsService.create(payload, video)
    }

    @UseInterceptors(FileInterceptor('icon', {storage: storageOptions}))
    @Patch("update/:id")
    async update(@Param("id") id: number, @Body() payload: CourseLessonUpdateAdminDto, @UploadedFile() video: Express.Multer.File){
        return this.courseLessonsService.update(id, payload, video)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number){
        return this.courseLessonsService.delete(id)
    }

}