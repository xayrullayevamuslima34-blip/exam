import { Injectable } from '@nestjs/common';
import { SouvenirReviewsCreatePublicDto } from '../../dtos/souvenirReviews/public/souvenirReviews.create.public.dto';
import { SouvenirReviews } from '../../entities/souvenirReviews.entity';
import { SouvenirReviewsRepository } from '../../repositories/souvenirReviews.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SouvenirReviewsPublicService{

  constructor(protected readonly config: ConfigService,
              protected readonly repo: SouvenirReviewsRepository) {
  }

  async create(payload: SouvenirReviewsCreatePublicDto){
    const souvenirReview = SouvenirReviews.create(payload as SouvenirReviews)
    return await this.repo.save(souvenirReview)
  }

}