import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {BookCategoryPublicService} from "../../services/book-category/book-category.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/book-category")
export class BookCategoryPublicController{

    constructor(private readonly bookCategoryService: BookCategoryPublicService) {}

    @Get("list")
    async getAll(){
        return this.bookCategoryService.getAll()
    }

    @Get("id")
    async getOne(@Param("id") id: string){
        return this.bookCategoryService.getOne(id)
    }

}