import {Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards} from "@nestjs/common";
import {CourseCategoriesCreateAdminDto} from "../../dtos/course-categories/admin/course-categories.create.admin.dto";
import {CourseCategoriesUpdateAdminDto} from "../../dtos/course-categories/admin/course-categories.update.admin.dto";
import {CourseCategoriesAdminService} from "../../services/course-categories/course-categories.admin.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import { CourseCategoriesFilter } from '../../filters/course-categories.filter';

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/course-categories")
export class CourseCategoriesAdminController{

    constructor(private readonly courseCategoriesService: CourseCategoriesAdminService) {}

    @Get("list")
    async getAll(@Query() filter: CourseCategoriesFilter){
        return await this.courseCategoriesService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.courseCategoriesService.getOne(id)
    }

    @Post("create")
    async create(@Body() payload: CourseCategoriesCreateAdminDto){
        return this.courseCategoriesService.create(payload)
    }

    @Patch("update/:id")
    async update(@Param("id") id: number, @Body() payload: CourseCategoriesUpdateAdminDto){
        return this.courseCategoriesService.update(id, payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number){
        return this.courseCategoriesService.delete(id)
    }

}