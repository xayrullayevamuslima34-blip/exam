import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SouvenirColorsPublicService } from '../../services/souvenirColors/souvenirColors.public.service';

@Controller("public/souvenirColors")
export class SouvenirColorsPublicController {

  constructor(private readonly souvenirColorService: SouvenirColorsPublicService) {
  }

  @Get("list")
  async getAll(){
    return await this.souvenirColorService.getAll();
  }

  @Get(":id")
  async getOne(@Param("id", ParseIntPipe) id:number){
    return await this.souvenirColorService.getOne(id);
  }

}