import {Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseGuards} from "@nestjs/common";
import {PurchasedCourses} from "../../entities/purchased-courses.entity";
import {PurchasedCourseCreatePublicDto} from "../../dtos/purchased-courses/public/purchased-course.create.public.dto";
import {PurchasedCourseUpdatePublicDto} from "../../dtos/purchased-courses/public/purchased-course.update.public.dto";
import {PurchasedCoursesAdminService} from "../../services/purchased-courses/purchased-courses.admin.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/purchased-courses")
export class PurchasedCourseAdminController{

    constructor(private readonly purchasedCourseService: PurchasedCoursesAdminService) {}

    @Get("list")
    async getAll(){
        return this.purchasedCourseService.getAll()
    }

    @Get(":id")
    async getOne(@Param(":id") id: string){
        return this.purchasedCourseService.getOne(id)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: string){
        return this.purchasedCourseService.delete(id)
    }


}