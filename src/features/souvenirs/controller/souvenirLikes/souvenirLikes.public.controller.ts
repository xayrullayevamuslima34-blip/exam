import { Controller, Get, Param, ParseIntPipe, Post, Req } from '@nestjs/common';
import { SouvenirLikesPublicService } from '../../services/souvenirLikes/souvenirLikes.public.service';

@Controller("public/souvenirLikes")
export class SouvenirLikesPublicController{

  constructor(private readonly souvenirLikeService: SouvenirLikesPublicService) {}

  @Get("list")
  async getAll(){
    return await this.souvenirLikeService.getAll();
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