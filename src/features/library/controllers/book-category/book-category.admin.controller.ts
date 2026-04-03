import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from "@nestjs/common";
import {BookCategoryCreateAdminDto} from "../../dtos/book-category/admin/book-category.create.admin.dto";
import {BookCategoryUpdateAdminDto} from "../../dtos/book-category/admin/book-category.update.admin.dto";
import {BookCategoryAdminService} from "../../services/book-category/book-category.admin.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/book-category")
export class BookCategoryAdminController{

    constructor(private readonly bookCategoryService: BookCategoryAdminService) {}

    @Get("list")
    async getAll(){
        return this.bookCategoryService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.bookCategoryService.getOne(id)
    }

    @Post("create")
    async create(@Body() payload: BookCategoryCreateAdminDto){
        return this.bookCategoryService.create(payload)
    }

    @Patch("update/:id")
    async update(@Param("id") id: string, @Body() payload: BookCategoryUpdateAdminDto){
        return this.bookCategoryService.update(id, payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: string){
        return this.bookCategoryService.delete(id)
    }



}