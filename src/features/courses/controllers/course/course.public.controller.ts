import {Controller, Get, Param, ParseIntPipe, Req, UseGuards} from "@nestjs/common";
import {CoursePublicService} from "../../services/course/course.public.service";
import type {Request} from "express";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/courses")
export class CoursePublicController{

    constructor(private readonly courseService: CoursePublicService) {}

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

    @Get(":id")
    async getOne(@Param("id", ParseIntPipe) id: number){
        return this.courseService.getOne(id)
    }
}