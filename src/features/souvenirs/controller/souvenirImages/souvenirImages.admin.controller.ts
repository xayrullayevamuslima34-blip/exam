import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { SouvenirImagesAdminService } from '../../services/souvenirImages/souvenirImages.admin.service';
import { SouvenirImagesCreateAdminDto } from '../../dtos/souvenirImages/admin/souvenirImages.create.admin.dto';
import { SouvenirImagesUpdateAdminDto } from '../../dtos/souvenirImages/admin/souvenirImages.update.public.dto';
import { SouvenirImagesFilter } from '../../filters/souvenirImages.filter';

@Controller("admin/souvenirImages")
export class SouvenirImagesAdminController{

  constructor(private readonly souvenirImageService: SouvenirImagesAdminService) {}

  @Get("list")
  async getAll(@Query() filter: SouvenirImagesFilter){
    return this.souvenirImageService.getAll(filter);
  }

  @Get(":id")
  async getOne(@Param("id", ParseIntPipe) id: number){
    return this.souvenirImageService.getOne(id)
  }
  @Post("create")
  async create(@Body() payload: SouvenirImagesCreateAdminDto){
    return this.souvenirImageService.create(payload);
  }

  @Patch("update/:id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() payload: SouvenirImagesUpdateAdminDto){
    return this.souvenirImageService.update(id, payload);
  }

  @Delete("delete/:id")
  async delete(@Param("id", ParseIntPipe) id: number){
    return this.souvenirImageService.delete(id);
  }

}