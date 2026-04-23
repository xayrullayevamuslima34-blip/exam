import {Controller, Get, Param, Query, UseGuards} from "@nestjs/common";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import { BookReviewFilter } from '../../filters/book-review.filter';
import { BookReviewPublicService } from '../../services/book-review/book-review.public.service';

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/book-review")
export class BookReviewPublicController{

    constructor(private readonly bookReviewService: BookReviewPublicService) {}

    @Get("list")
    async getAll(@Query() filter: BookReviewFilter){
        return this.bookReviewService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.bookReviewService.getOne(id)
    }


}