import {Controller, Param, ParseIntPipe, Post, Req, UseGuards} from "@nestjs/common";
import {BookLikePublicService} from "../../services/book-like/book-like.public.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import type {Request} from "express";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/book-like")
export class BookLikePublicController{

    constructor(private readonly bookLikeService: BookLikePublicService) {}

    @Post(":bookId")
    async toggleLike(@Req() request: Request, @Param("bookId", ParseIntPipe) id: number){
        //@ts-ignore
        return this.bookLikeService.toggleLike(id, request.user.id)
    }

}