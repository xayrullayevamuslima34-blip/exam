import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { SouvenirPublicService } from '../../services/souvenirs/souvenir.public.service';
import { PaginatedResult } from '../../../../core/paginatedResult.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { SouvenirsFilter } from '../../filters/souvenirs.filter';

@Controller("public/souvenirs")
export class SouvenirsPublicController {

  constructor(private readonly souvenirService: SouvenirPublicService) {}

  @Get("list")
  @ApiOkResponse({type: PaginatedResult, isArray: true})
  async getAll(@Query()filter: SouvenirsFilter){
    return await this.souvenirService.getAll(filter);
  }

  @Get(":id")
  async getOne(@Param("id", ParseIntPipe) id: number){
    return await this.souvenirService.getOne(id);
  }

}