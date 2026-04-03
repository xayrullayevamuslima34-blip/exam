import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {BookPublicService} from "../../services/book/book.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/book")
export class BookPublicController{

    constructor(private readonly bookService: BookPublicService) {}

    @Get("list")
    async getAll(){
        return this.bookService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id")id: string){
        return this.bookService.getOne(id)
    }

}