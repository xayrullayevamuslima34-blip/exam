import { Controller, Get, Param, ParseIntPipe, Post, Query, Req } from '@nestjs/common';
import { SouvenirLikesPublicService } from '../../services/souvenirLikes/souvenirLikes.public.service';
import { SouvenirLikesFilter } from '../../filters/souvenirLikes.filter';

@Controller("public/souvenirLikes")
export class SouvenirLikesPublicController{

  constructor(private readonly souvenirLikeService: SouvenirLikesPublicService) {}

  @Get("list")
  async getAll(@Query() filter: SouvenirLikesFilter){
    return await this.souvenirLikeService.getAll(filter);
  }

  @Get(":id")
  async getOne(@Param("id", ParseIntPipe) id:number){
    return await this.souvenirLikeService.getOne(id);
  }

  @Post(":souvenirId")
  async toggleLike(@Req() req: Request, @Param("souvenirId", ParseIntPipe) id: number){
    //@ts-ignore
    return this.souvenirLikeService.toggleLike(id, req.user.id)
  }

}