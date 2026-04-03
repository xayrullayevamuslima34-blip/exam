import {Controller, Delete, Get, Param, UseGuards} from "@nestjs/common";
import {BookLikeAdminService} from "../../services/book-like/book-like.admin.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("admin/book-like")
export class BookLikeAdminController{

    constructor(private readonly bookLikeService: BookLikeAdminService) {}

    @Get("list")
    async getAll(){
        return this.bookLikeService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.bookLikeService.getOne(id)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: string){
        return this.bookLikeService.delete(id)
    }



}