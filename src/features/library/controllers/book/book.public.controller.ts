import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import {BookPublicService} from "../../services/book/book.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import { BookFilter } from '../../filters/book.filter';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginatedResult } from '../../../../core/paginatedResult.dto';

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/book")
export class BookPublicController{

    constructor(private readonly bookService: BookPublicService) {}

    @Get("list")
    @ApiOkResponse({type: [PaginatedResult], isArray: true})
    async getAll(@Query() filter: BookFilter){
        return await this.bookService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id")id: number){
        return this.bookService.getOne(id)
    }

}
