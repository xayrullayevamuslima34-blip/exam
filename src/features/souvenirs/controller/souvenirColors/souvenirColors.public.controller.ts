import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { SouvenirColorsPublicService } from '../../services/souvenirColors/souvenirColors.public.service';
import { SouvenirColorsFilter } from '../../filters/souvenirColors.filter';

@Controller("public/souvenirColors")
export class SouvenirColorsPublicController {

  constructor(private readonly souvenirColorService: SouvenirColorsPublicService) {
  }

  @Get("list")
  async getAll(@Query() filter: SouvenirColorsFilter){
    return await this.souvenirColorService.getAll(filter);
  }

  @Get(":id")
  async getOne(@Param("id", ParseIntPipe) id:number){
    return await this.souvenirColorService.getOne(id);
  }

}