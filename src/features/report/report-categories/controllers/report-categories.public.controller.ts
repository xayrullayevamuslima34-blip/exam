import {Controller, Get, NotFoundException, Param, UseGuards} from "@nestjs/common";
import {ReportCategories} from "../entities/report-categories.entity";
import {ReportCategoriesPublicService} from "../services/report-categories.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/report-categories")
export class ReportCategoriesPublicController{

    constructor(private readonly reportCategoriesService: ReportCategoriesPublicService) {}

    @Get("list")
    async getAll(){
        return this.reportCategoriesService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.reportCategoriesService.getOne(id
        )
    }

}