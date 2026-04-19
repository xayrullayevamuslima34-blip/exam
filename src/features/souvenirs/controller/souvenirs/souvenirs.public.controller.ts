import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SouvenirPublicService } from '../../services/souvenirs/souvenir.public.service';

@Controller("public/souvenirs")
export class SouvenirsPublicController {

  constructor(private readonly souvenirService: SouvenirPublicService) {}

  @Get("list")
  async getAll(){
    return await this.souvenirService.getAll();
  }

  @Get(":id")
  async getOne(@Param("id", ParseIntPipe) id: number){
    return await this.souvenirService.getOne(id);
  }

}