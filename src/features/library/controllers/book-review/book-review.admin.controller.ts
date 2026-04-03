import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from "@nestjs/common";
import {BookReviewCreateAdminDto} from "../../dtos/book-review/admin /book-review.create.admin.dto";
import {BookReviewUpdateAdminDto} from "../../dtos/book-review/admin /book-review.update.admin.dto";
import {BookReviewAdminService} from "../../services/book-review/book-review.admin.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/book-review")
export class BookReviewAdminController{

    constructor(private readonly bookReviewService: BookReviewAdminService) {}

    @Get("list")
    async getAll(){
        return this.bookReviewService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.bookReviewService.getOne(id)
    }

    @Post("crete")
    async create(@Body() payload: BookReviewCreateAdminDto){
        return this.bookReviewService.create(payload)
    }

    @Patch("update/:id")
    async update(@Param("id") id: string, @Body() payload: BookReviewUpdateAdminDto){
        return this.bookReviewService.update(id, payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: string){
       return this.bookReviewService.delete(id)
    }



}