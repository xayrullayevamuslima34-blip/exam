import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ColorPublicService } from '../../services/colors/color.public.servic';
import { ColorFilter } from '../../filters/color.filter';

@Controller()
export class ColorPublicController {

  constructor(private readonly colorService: ColorPublicService) {
  }

  @Get('list')
  async getAll(@Query() filter: ColorFilter) {
    return this.colorService.getAll(filter);
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return this.colorService.getOne(id);
  }

}