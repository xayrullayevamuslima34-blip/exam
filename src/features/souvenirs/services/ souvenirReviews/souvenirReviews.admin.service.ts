import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirReviews } from '../../entities/souvenirReviews.entity';

@Injectable()
export class SouvenirReviewsAdminService{
  async getAll(){
    return await SouvenirReviews.find()
  }

  async getOne(id:number){
    const souvenirReview = await SouvenirReviews.findOneBy({id:id})
    if(!souvenirReview){
      throw new NotFoundException('No souvenir review found')
    }
    return souvenirReview
  }

  async delete(id:number){
    const souvenirReview = await SouvenirReviews.findOneBy({id:id})
    if(!souvenirReview){
      throw new NotFoundException('No souvenir review found')
    }
    await SouvenirReviews.remove(souvenirReview)
    return {message: "Deleted souvenir review"}
  }

}