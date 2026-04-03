import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {CourseCategoriesPublicService} from "../../services/course-categories/course-categories.public.service"
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/course-categories")
export class CourseCategoriesPublicController{

    constructor(private readonly courseCategoriesService: CourseCategoriesPublicService) {}

    @Get("list")
    async getAll(){
        return this.courseCategoriesService.getAll()
    }

    @Get("id")
    async getOne(@Param("id") id: string){
        return this.courseCategoriesService.getOne(id)
    }


}