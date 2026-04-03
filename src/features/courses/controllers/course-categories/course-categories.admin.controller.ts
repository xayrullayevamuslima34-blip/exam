import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from "@nestjs/common";
import {CourseCategoriesCreateAdminDto} from "../../dtos/course-categories/admin/course-categories.create.admin.dto";
import {CourseCategoriesUpdateAdminDto} from "../../dtos/course-categories/admin/course-categories.update.admin.dto";
import {CourseCategoriesAdminService} from "../../services/course-categories/course-categories.admin.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/course-categories")
export class CourseCategoriesAdminController{

    constructor(private readonly courseCategoriesService: CourseCategoriesAdminService) {}

    @Get("list")
    async getAll(){
        return this.courseCategoriesService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.courseCategoriesService.getOne(id)
    }

    @Post("create")
    async create(@Body() payload: CourseCategoriesCreateAdminDto){
        return this.courseCategoriesService.create(payload)
    }

    @Patch("update/:id")
    async update(@Param("id") id: string, @Body() payload: CourseCategoriesUpdateAdminDto){
        return this.courseCategoriesService.update(id, payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: string){
        return this.courseCategoriesService.delete(id)
    }

}