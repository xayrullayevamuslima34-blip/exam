import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {BookReviewAdminService} from "../../services/book-review/book-review.admin.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/book-review")
export class BookReviewPublicController{

    constructor(private readonly bookReviewService: BookReviewAdminService) {}

    @Get("list")
    async getAll(@Param("id") id: string){
        return this.bookReviewService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.bookReviewService.getOne(id)
    }


}