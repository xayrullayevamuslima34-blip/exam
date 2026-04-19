import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SouvenirReviewsAdminService } from '../../services/ souvenirReviews/souvenirReviews.admin.service';

@Controller("admin/souvenirReviews")
export class SouvenirReviewsAdminController{

  constructor(private readonly souvenirReviewService: SouvenirReviewsAdminService) {}

  @Get("list")
  async getAll(){
    return await this.souvenirReviewService.getAll();
  }

  @Get(":id")
  async getOne(@Param("id", ParseIntPipe) id: number){
    return await this.souvenirReviewService.getOne(id);
  }

  @Delete("delete/:id")
  async delete(@Param("id", ParseIntPipe) id: number){
    await this.souvenirReviewService.delete(id);
  }

}