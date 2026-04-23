import {Controller, Delete, Get, Param, Query, UseGuards} from "@nestjs/common";
import {BookLikeAdminService} from "../../services/book-like/book-like.admin.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import { BookLikeFilter } from '../../filters/book-like.filter';

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("admin/book-like")
export class BookLikeAdminController{

    constructor(private readonly bookLikeService: BookLikeAdminService) {}

    @Get("list")
    async getAll(@Query() filter: BookLikeFilter){
        return this.bookLikeService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.bookLikeService.getOne(id)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number){
        return this.bookLikeService.delete(id)
    }



}