import { Controller, Get, Param, Query, Req, UseGuards } from '@nestjs/common';
import {BookPublicService} from "../../services/book/book.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import { BookFilter } from '../../filters/book.filter';

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/book")
export class BookPublicController{

    constructor(private readonly bookService: BookPublicService) {}

    @Get("list")
    async getAll(@Req() req: Request, @Query() filter: BookFilter){
        const book = await this.bookService.getAll(filter)
        return book
    }

    @Get(":id")
    async getOne(@Param("id")id: string){
        return this.bookService.getOne(id)
    }

}
