import {Body, Controller, Delete, Get, Param, Patch, Post, ParseIntPipe, Query} from "@nestjs/common";
import {AuthorsAdminService} from "../../services/author/author.admin.service";
import {AuthorsCreateAdminDto} from "../../dtos/author/admin/author.create.admin.dto";
import {AuthorsUpdateAdminDto} from "../../dtos/author/admin/author.update.admin.dto";
import {ApiBearerAuth} from "@nestjs/swagger";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import { AuthorFilter } from '../../filters/author.filter';

@ApiBearerAuth()
@Roles(Role.Admin)
@Controller('admin/authors')
export class AuthorsAdminController {

    constructor(private service: AuthorsAdminService) {}

    @Get()
    async getAll(@Query() filter: AuthorFilter) {
        return await this.service.getAll(filter);
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.service.getOne(id);
    }

    @Post()
    async create(@Body() payload: AuthorsCreateAdminDto) {
        return await this.service.create(payload);
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() payload: AuthorsUpdateAdminDto) {
        return await this.service.update(id, payload);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.service.delete(id);
    }
}