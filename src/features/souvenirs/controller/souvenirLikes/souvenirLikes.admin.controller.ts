import { Controller, Delete, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { SouvenirLikesAdminService } from '../../services/souvenirLikes/souvenirLikes.admin.service';
import { SouvenirLikesFilter } from '../../filters/souvenirLikes.filter';

@Controller("admin/souvenirLikes")
export class SouvenirLikesAdminController {

  constructor(private readonly souvenirLikeService: SouvenirLikesAdminService) {}

  @Get("list")
  async getAll(@Query() filter: SouvenirLikesFilter){
    return this.souvenirLikeService.getAll(filter)
  }

  @Get(":id")
  async getOne(@Param("id", ParseIntPipe) id: number) {
    return this.souvenirLikeService.getOne(id)
  }

  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.souvenirLikeService.delete(id)
  }

}