import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SouvenirLikesAdminService } from '../../services/souvenirLikes/souvenirLikes.admin.service';

@Controller("admin/souvenirLikes")
export class SouvenirLikesAdminController {

  constructor(private readonly souvenirLikeService: SouvenirLikesAdminService) {}

  @Get("list")
  async getAll(){
    return this.souvenirLikeService.getAll()
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