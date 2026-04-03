import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {CourseSectionsPublicService} from "../../services/course-sections/course-sections.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/course-sections")
export class CourseSectionsPublicController{

    constructor(private readonly courseSectionService: CourseSectionsPublicService) {}

    @Get("list")
    async getAll(){
        return this.courseSectionService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.courseSectionService.getOne(id)
    }

}