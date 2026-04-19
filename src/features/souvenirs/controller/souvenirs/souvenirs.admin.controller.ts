import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { SouvenirAdminService } from '../../services/souvenirs/souvenir.admin.service';
import { SouvenirsCreateAdminDto } from '../../dtos/souvenirs/admin/souvenirs.create.admin.dto';
import { SouvenirsUpdateAdminDto } from '../../dtos/souvenirs/admin/souvenirs.update.public.dto';

@Controller("admin/souvenirs")
export class SouvenirsAdminController {

  constructor(private readonly souvenirService: SouvenirAdminService) {}

  @Get("list")
  async getAll(){
    return await this.souvenirService.getAll();
  }

  @Get(":id")
  async getOne(@Param("id", ParseIntPipe) id: number){
    return await this.souvenirService.getOne(id);
  }

  @Post("create")
  async create(@Body() payload: SouvenirsCreateAdminDto){
    return await this.souvenirService.create(payload);
  }

  @Patch("update/:id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() payload: SouvenirsUpdateAdminDto){
    return await this.souvenirService.update(id, payload);
  }

  @Delete("delete/:id")
  async delete(@Param("id", ParseIntPipe) id: number){
    return await this.souvenirService.delete(id);
  }

}