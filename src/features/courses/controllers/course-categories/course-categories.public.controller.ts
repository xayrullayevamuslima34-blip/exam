import {Controller, Get, Param, Query, UseGuards} from "@nestjs/common";
import {CourseCategoriesPublicService} from "../../services/course-categories/course-categories.public.service"
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import { CourseCategoriesFilter } from '../../filters/course-categories.filter';

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/course-categories")
export class CourseCategoriesPublicController{

    constructor(private readonly courseCategoriesService: CourseCategoriesPublicService) {}

    @Get("list")
    async getAll(@Query() filter: CourseCategoriesFilter){
        return this.courseCategoriesService.getAll(filter)
    }

    @Get("id")
    async getOne(@Param("id") id: number){
        return this.courseCategoriesService.getOne(id)
    }


}