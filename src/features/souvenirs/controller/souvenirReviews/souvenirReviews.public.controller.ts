import { Body, Controller, Post } from '@nestjs/common';
import { SouvenirReviewsPublicService } from '../../services/ souvenirReviews/souvenirReviews.public.service';
import { SouvenirReviewsCreatePublicDto } from '../../dtos/souvenirReviews/public/souvenirReviews.create.public.dto';

@Controller("public/souvenirReviews")
export class SouvenirReviewsPublicController{

  constructor(private readonly souvenirReviewService: SouvenirReviewsPublicService) {}

  @Post("create")
  async create(@Body() payload: SouvenirReviewsCreatePublicDto){
    await this.souvenirReviewService.create(payload);
  }

}