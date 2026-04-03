import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from "@nestjs/common";
import {NewsViewsCreateAdminDto} from "../../dtos/news-views/admin/news-views.create.admin.dto";
import {NewsViewsUpdateAdminDto} from "../../dtos/news-views/admin/news-views.update.admin.dto";
import {NewsViewsAdminService} from "../../services/news-views/news-views.admin.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/news-views")
export class NewsViewsAdminController{

    constructor(private readonly newsViewsService: NewsViewsAdminService) {}

    @Get("list")
    async getAll(){
        return this.newsViewsService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.newsViewsService.getOne(id)
    }

    @Post("create")
    async create(@Body() payload: NewsViewsCreateAdminDto){
        return this.newsViewsService.create(payload)
    }

    @Patch("update/:id")
    async update(@Param("id") id: string, @Body() payload: NewsViewsUpdateAdminDto){
        return this.newsViewsService.update(id, payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: string){
        return this.newsViewsService.delete(id)
    }

}