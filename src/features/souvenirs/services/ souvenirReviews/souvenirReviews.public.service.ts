import { Injectable } from '@nestjs/common';
import { SouvenirReviewsCreatePublicDto } from '../../dtos/souvenirReviews/public/souvenirReviews.create.public.dto';
import { SouvenirReviews } from '../../entities/souvenirReviews.entity';

@Injectable()
export class SouvenirReviewsPublicService{
  async create(payload: SouvenirReviewsCreatePublicDto){
    const souvenirReview = SouvenirReviews.create(payload as SouvenirReviews)
    await SouvenirReviews.save(souvenirReview)
    return souvenirReview
  }

}