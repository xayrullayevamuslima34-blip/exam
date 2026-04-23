import {Controller, Get, Param, Query, UseGuards} from "@nestjs/common";
import {NewsViewsPublicService} from "../../services/news-views/news-views.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import { NewsViewsFilter } from '../../filters/newsViews.filter';

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/news-views")
export class NewsViewsPublicController{

    constructor(private readonly newsViewsService: NewsViewsPublicService) {
    }

    @Get("list")
    async getAll(@Query() filter: NewsViewsFilter){
        return this.newsViewsService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.newsViewsService.getOne(id)
    }
}