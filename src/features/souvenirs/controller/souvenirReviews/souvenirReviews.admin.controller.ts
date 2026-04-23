import { Controller, Delete, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { SouvenirReviewsAdminService } from '../../services/ souvenirReviews/souvenirReviews.admin.service';
import { SouvenirReviewsFilter } from '../../filters/souvenirReviews.filter';

@Controller("admin/souvenirReviews")
export class SouvenirReviewsAdminController{

  constructor(private readonly souvenirReviewService: SouvenirReviewsAdminService) {}

  @Get("list")
  async getAll(@Query() filter: SouvenirReviewsFilter){
    return await this.souvenirReviewService.getAll(filter);
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