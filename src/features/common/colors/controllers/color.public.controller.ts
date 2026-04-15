import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ColorPublicService } from '../services/color.public.servic';

@Controller()
export class ColorPublicController {

  constructor(private readonly colorService: ColorPublicService) {
  }

  @Get('list')
  async getAll() {
    return this.colorService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return this.colorService.getOne(id);
  }

}