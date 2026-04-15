import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Req,
    UploadedFile,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {CourseCreateAdminDto} from "../../dtos/courses/admin/course.create.admin.dto";
import {CourseUpdateAdminDto} from "../../dtos/courses/admin/course.update.admin.dto";
import {CourseAdminService} from "../../services/course/course.admin.service";
import type {Request} from "express";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "../../../../config/multer.config";
import { CourseListAdminDto } from '../../dtos/courses/admin/course.list.admin.dto';

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/courses")
export class CourseAdminController{

    constructor(private readonly courseService: CourseAdminService) {}

    @ApiOkResponse({type: [CourseListAdminDto], isArray: true})
    @Get("list")
    async getAll(@Req() request: Request){
        let userId = undefined
        //@ts-ignore
        if (request.user){
            //@ts-ignore
            userId = request.user.id
        }
        return this.courseService.getAll(userId)
    }

    @ApiOkResponse({type: [CourseListAdminDto]})
    @Get(":id")
    async getOne(@Param(":id") id: string){
        return this.courseService.getOne(id)
    }

    @UseInterceptors(FileInterceptor('image', {storage: storageOptions}))
    @Post("create")
    async create(@Body() payload: CourseCreateAdminDto, @UploadedFile() image: Express.Multer.File){
        return this.courseService.create(payload, image)
    }

    @UseInterceptors(FileInterceptor('image', {storage: storageOptions}))
    @Patch("update/:id")
    async update(@Param("id") id: string, @Body() payload: CourseUpdateAdminDto, @UploadedFile() image: Express.Multer.File){
        return this.courseService.update(id, payload, image)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: string){
       return this.courseService.delete(id)
    }


}