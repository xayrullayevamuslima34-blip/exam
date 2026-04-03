import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {BookCreateAdminDto} from "../../dtos/book/admin/book.create.admin.dto";
import {BookUpdateAdminDto} from "../../dtos/book/admin/book.update.admin.dto";
import {BookAdminService} from "../../services/book/book.admin.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "../../../../config/multer.config";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/book")
export class BookAdminController{

    constructor(private readonly bookService: BookAdminService) {}

    @Get('list')
    async getAll(){
        return this.bookService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.bookService.getOne(id)
    }

    @UseInterceptors(FileInterceptor('image', {storage: storageOptions}))
    @Post("create")
    async create(@Body() payload: BookCreateAdminDto, @UploadedFile() image: Express.Multer.File){
        return this.bookService.create(payload, image)
    }

    @UseInterceptors(FileInterceptor('image', {storage: storageOptions}))
    @Patch("update/:id")
    async update(@Param("id") id: string, @Body() payload: BookUpdateAdminDto, @UploadedFile() image: Express.Multer.File){
        return this.bookService.update(id, payload, image)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: string){
        return this.bookService.delete(id)
    }


}