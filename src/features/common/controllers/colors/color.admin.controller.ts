import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { ColorAdminService } from '../../services/colors/color.admin.servic';
import { ColorCreateAdminDto } from '../../dtos/colors/admin/color.create.admin.dto';
import { ColorUpdateAdminDto } from '../../dtos/colors/admin/color.update.admin.dto';
import { ColorFilter } from '../../filters/color.filter';

@Controller('admin/colors')
export class ColorAdminController {

  constructor(private readonly colorService: ColorAdminService) {
  }

  @Get('list')
  async getAll(@Query() filter:ColorFilter) {
    return this.colorService.getAll(filter);
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
