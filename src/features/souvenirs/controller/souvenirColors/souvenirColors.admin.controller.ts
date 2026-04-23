import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import {
  SouvenirColorsAdminService,
} from '../../services/souvenirColors/souvenirColors.admin.service';
import { SouvenirColorsCreateAdminDto } from '../../dtos/souvenirColors/admin/souvenirColors.create.admin.dto';
import {
  SouvenirColorsUpdateAdminDto,
} from '../../dtos/souvenirColors/admin/souvenirColors.update.public.dto';
import { SouvenirColorsFilter } from '../../filters/souvenirColors.filter';

@Controller('admin/souvenirColors')
export class SouvenirColorsAdminController {

  constructor(private readonly souvenirColorService: SouvenirColorsAdminService) {
  }

  @Get('list')
  async getAll(@Query() filter: SouvenirColorsFilter) {
    return await this.souvenirColorService.getAll(filter);
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.souvenirColorService.getOne(id);
  }

  @Post('create')
  async create(@Body() payload: SouvenirColorsCreateAdminDto) {
    return await this.souvenirColorService.create(payload);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() payload: SouvenirColorsUpdateAdminDto) {
    return this.souvenirColorService.update(id, payload);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.souvenirColorService.delete(id);
  }

}