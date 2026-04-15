import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { ColorAdminService } from '../services/color.admin.servic';
import { ColorCreateAdminDto } from '../dtos/admin/color.create.admin.dto';
import { ColorUpdateAdminDto } from '../dtos/admin/color.update.admin.dto';

@Controller('admin/colors')
class ColorAdminController {

  constructor(private readonly colorService: ColorAdminService) {
  }

  @Get('list')
  async getAll() {
    return this.colorService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return this.colorService.getOne(id);
  }

  @Post()
  async create(@Body() payload: ColorCreateAdminDto) {
    return this.colorService.create(payload);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: ColorUpdateAdminDto) {
    return this.colorService.update(id, payload);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.colorService.delete(id);
  }


}
