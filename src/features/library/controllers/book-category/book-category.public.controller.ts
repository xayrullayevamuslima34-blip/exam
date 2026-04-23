import {Controller, Get, Param, Query, UseGuards} from "@nestjs/common";
import {BookCategoryPublicService} from "../../services/book-category/book-category.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import { BookCategoryFilter } from '../../filters/book-category.filter';

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/book-category")
export class BookCategoryPublicController{

    constructor(private readonly bookCategoryService: BookCategoryPublicService) {}

    @Get("list")
    async getAll(@Query() filter: BookCategoryFilter){
        return this.bookCategoryService.getAll(filter)
    }

    @Get("id")
    async getOne(@Param("id") id: number){
        return this.bookCategoryService.getOne(id)
    }

}