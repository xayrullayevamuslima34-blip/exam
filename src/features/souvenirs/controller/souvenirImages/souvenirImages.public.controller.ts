import { Controller, Get, Param } from '@nestjs/common';
import { SouvenirImagesPublicService } from '../../services/souvenirImages/souvenirImages.public.service';

@Controller("public/souvenirImages")
export class SouvenirImagesPublicController {

  constructor(private readonly souvenirImageService: SouvenirImagesPublicService) {}

  @Get("list")
  async getAll(){
    return this.souvenirImageService.getAll();
  }

  @Get(":id")
  async getOne(@Param("id") id:number){
    return this.souvenirImageService.getOne(id);
  }

}