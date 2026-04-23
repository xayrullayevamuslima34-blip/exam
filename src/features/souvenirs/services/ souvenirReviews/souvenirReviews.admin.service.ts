import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirReviewsFilter } from '../../filters/souvenirReviews.filter';
import { ConfigService } from '@nestjs/config';
import { SouvenirReviewsRepository } from '../../repositories/souvenirReviews.repository';

@Injectable()
export class SouvenirReviewsAdminService{

  constructor(protected readonly config: ConfigService,
              protected readonly repo: SouvenirReviewsRepository) {
  }

  async getAll(filter: SouvenirReviewsFilter){
    return await this.repo.getAll(filter)
  }

  async getOne(id:number){
    const souvenirReview = await this.repo.getOneById(id)
    if(!souvenirReview){
      throw new NotFoundException('No souvenir review found')
    }
    return souvenirReview
  }

  async delete(id:number){
    const souvenirReview = await this.repo.getOneById(id)
    if(!souvenirReview){
      throw new NotFoundException('No souvenir review found')
    }
    await this.repo.delete(souvenirReview)
    return {message: "Deleted souvenir review"}
  }

}