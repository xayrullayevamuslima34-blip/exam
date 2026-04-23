import { Controller, Get, Param, Query } from '@nestjs/common';
import { SouvenirImagesPublicService } from '../../services/souvenirImages/souvenirImages.public.service';
import { SouvenirImagesFilter } from '../../filters/souvenirImages.filter';

@Controller("public/souvenirImages")
export class SouvenirImagesPublicController {

  constructor(private readonly souvenirImageService: SouvenirImagesPublicService) {}

  @Get("list")
  async getAll(@Query() filter: SouvenirImagesFilter){
    return this.souvenirImageService.getAll(filter);
  }

  @Get(":id")
  async getOne(@Param("id") id:number){
    return this.souvenirImageService.getOne(id);
  }

}