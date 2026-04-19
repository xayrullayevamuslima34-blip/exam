import type {Request} from "express";
import { Controller, Get, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import {CourseLikesPublicService} from "../../services/course-likes/course-likes.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {ApiBearerAuth} from "@nestjs/swagger";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.User)
@Controller("public/course-likes")
export class CourseLikesPublicController{

    constructor(private readonly courseLikeService: CourseLikesPublicService) {}

    @Get("list")
    async getAll(){
        return this.courseLikeService.getAll();
    }

    @Get(":id")
    async getOne(@Param("id", ParseIntPipe) id: number){
        return this.courseLikeService.getOne(id)
    }

    @Post(":courseId")
    async toggleLike(@Req() request: Request ,@Param("courseId", ParseIntPipe) id: number){
        //@ts-ignore
        return this.courseLikeService.toggleLike(id, request.user.id)
    }


}








