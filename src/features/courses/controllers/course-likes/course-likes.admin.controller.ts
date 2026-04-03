import {Controller, Delete, Get, Param, UseGuards} from "@nestjs/common";
import {CourseLikesAdminService} from "../../services/course-likes/course-likes.admin.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {ApiBearerAuth} from "@nestjs/swagger";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("admin/course-likes")
export class CourseLikesAdminController{

    constructor(private readonly courseLikesService: CourseLikesAdminService) {}

    @Get("list")
    async getAll(){
        return this.courseLikesService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.courseLikesService.getOne(id)
    }

    @Delete(":id")
    async delete(@Param("id") id: string){
        return this.courseLikesService.delete(id)
    }

}