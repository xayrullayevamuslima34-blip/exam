import {Controller, Get, Param, ParseIntPipe, Query, Req, UseGuards} from "@nestjs/common";
import {CoursePublicService} from "../../services/course/course.public.service";
import type {Request} from "express";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import { CourseFilter } from '../../filters/course.filter';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationResultCourseDto } from '../../filters/pagination-result.course.dto';

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/courses")
export class CoursePublicController{

    constructor(private readonly courseService: CoursePublicService) {}

    @Get("list")
    @ApiOkResponse({type: () => PaginationResultCourseDto, isArray: true})
    async getAll(@Req() request: Request, @Query() filter: CourseFilter){
        let userId = undefined
        //@ts-ignore
        if (request.user){
            //@ts-ignore
            userId = request.user.id
        }

    const course = await this.courseService.getAll(filter, userId)

        return course
    }

    @Get(":id")
    async getOne(@Param("id", ParseIntPipe) id: number){
        return this.courseService.getOne(id)
    }
}