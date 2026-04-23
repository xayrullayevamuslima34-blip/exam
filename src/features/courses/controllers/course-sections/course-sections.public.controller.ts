import {Controller, Get, Param, Query, UseGuards} from "@nestjs/common";
import {CourseSectionsPublicService} from "../../services/course-sections/course-sections.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import { CourseSectionsFilter } from '../../filters/course-sections.filter';

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/course-sections")
export class CourseSectionsPublicController{

    constructor(private readonly courseSectionService: CourseSectionsPublicService) {}

    @Get("list")
    async getAll(@Query() filter: CourseSectionsFilter){
        return this.courseSectionService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.courseSectionService.getOne(id)
    }

}