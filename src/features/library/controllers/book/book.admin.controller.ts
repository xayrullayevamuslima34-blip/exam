import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { BookCreateAdminDto } from '../../dtos/book/admin/book.create.admin.dto';
import { BookUpdateAdminDto } from '../../dtos/book/admin/book.update.admin.dto';
import { BookAdminService } from '../../services/book/book.admin.service';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { FileInterceptor } from '@nestjs/platform-express';
import { storageOptions } from '../../../../config/multer.config';
import { BookListAdminDto } from '../../dtos/book/admin/book.list.admin.dto';
import { PaginatedResult } from '../../../../core/paginatedResult.dto';
import { BookFilter } from '../../filters/book.filter';

@ApiBearerAuth()
@Roles(Role.Admin)
@Controller('admin/book')
export class BookAdminController {

  constructor(private readonly bookService: BookAdminService) {
  }

  @ApiOkResponse({type: [PaginatedResult]})
  @Get('list')
  async getAll(@Query() filters: BookFilter) {
    return this.bookService.getAll(filters);
  }

  @ApiOkResponse({type: [BookListAdminDto]})
  @Get(':id')
  async getOne(@Param('id') id: number) {
    return this.bookService.getOne(id);
  }

  @UseInterceptors(FileInterceptor('image', { storage: storageOptions }))
  @Post('create')
  async create(@Body() payload: BookCreateAdminDto, @UploadedFile() image: Express.Multer.File) {
    return this.bookService.create(payload, image);
  }

  @UseInterceptors(FileInterceptor('image', { storage: storageOptions }))
  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() payload: BookUpdateAdminDto, @UploadedFile() image: Express.Multer.File) {
    return this.bookService.update(id, payload, image);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    return this.bookService.delete(id);
  }


}