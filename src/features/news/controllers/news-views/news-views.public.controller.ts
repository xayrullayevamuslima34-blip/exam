import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {NewsViewsPublicService} from "../../services/news-views/news-views.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/news-views")
export class NewsViewsPublicController{

    constructor(private readonly newsViewsService: NewsViewsPublicService) {
    }

    @Get("list")
    async getAll(){
        return this.newsViewsService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.newsViewsService.getOne(id)
    }
}