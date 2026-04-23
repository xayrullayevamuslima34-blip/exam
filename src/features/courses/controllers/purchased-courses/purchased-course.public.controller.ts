import {Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards} from "@nestjs/common";
import {PurchasedCoursesPublicService} from "../../services/purchased-courses/purchased-courses.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {PurchasedCourseCreatePublicDto} from "../../dtos/purchased-courses/public/purchased-course.create.public.dto";
import {PurchasedCourseUpdatePublicDto} from "../../dtos/purchased-courses/public/purchased-course.update.public.dto";
import {ApiBearerAuth} from "@nestjs/swagger";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import { PurchasedCoursesFilter } from '../../filters/purchased-courses.filter';

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.User)
@Controller("public/purchased-courses")
export class PurchasedCoursePublicController{

    constructor(private readonly purchasedCourseService: PurchasedCoursesPublicService) {}

    @Get("list")
    async getAll(@Query() filter: PurchasedCoursesFilter){
        return this.purchasedCourseService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.purchasedCourseService.getOne(id)
    }

    @Post("create")
    async create(@Body() payload: PurchasedCourseCreatePublicDto){
        return this.purchasedCourseService.create(payload)
    }

    @Patch("update/:id")
    async update(@Param("id") id:  number, @Body() payload: PurchasedCourseUpdatePublicDto){
        return this.purchasedCourseService.update(id, payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number){
        return this.purchasedCourseService.delete(id)
    }

}