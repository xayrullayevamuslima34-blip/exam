import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from "@nestjs/common";
import {CourseSectionCreateAdminDto} from "../../dtos/course-sections/admin/course-section.create.admin.dto";
import {CourseSectionUpdateAdminDto} from "../../dtos/course-sections/admin/course-section.update.admin.dto";
import {CourseSectionsAdminService} from "../../services/course-sections/course-sections.admin.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/course-sections")
export class CourseSectionsAdminController{

    constructor(private readonly courseSectionService: CourseSectionsAdminService) {}

    @Get("list")
    async getAll(){
        return this.courseSectionService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.courseSectionService.getOne(id)
    }

    @Post("create")
    async create(@Body() payload: CourseSectionCreateAdminDto){
        return this.courseSectionService.create(payload)
    }

    @Patch("update/:id")
    async update(@Param("id") id: string, @Body() payload: CourseSectionUpdateAdminDto){
        return this.courseSectionService.update(id, payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: string){
        return this.courseSectionService.delete(id)
    }


}