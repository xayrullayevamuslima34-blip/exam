import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from "@nestjs/common";
import {NewsViewsCreateAdminDto} from "../../dtos/news-views/admin/news-views.create.admin.dto";
import {NewsViewsUpdateAdminDto} from "../../dtos/news-views/admin/news-views.update.admin.dto";
import {NewsViewsAdminService} from "../../services/news-views/news-views.admin.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import { NewsViewsFilter } from '../../filters/newsViews.filter';

@ApiBearerAuth()
@Roles(Role.Admin)
@Controller("admin/news-views")
export class NewsViewsAdminController{

    constructor(private readonly newsViewsService: NewsViewsAdminService) {}

    @Get("list")
    async getAll(@Query() filter: NewsViewsFilter){
        return this.newsViewsService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.newsViewsService.getOne(id)
    }

    @Post("create")
    async create(@Body() payload: NewsViewsCreateAdminDto){
        return this.newsViewsService.create(payload)
    }

    @Patch("update/:id")
    async update(@Param("id") id: number, @Body() payload: NewsViewsUpdateAdminDto){
        return this.newsViewsService.update(id, payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number){
        return this.newsViewsService.delete(id)
    }

}