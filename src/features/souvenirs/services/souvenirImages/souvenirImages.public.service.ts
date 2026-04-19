import { SouvenirImages } from '../../entities/souvenirImages.entity';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class SouvenirImagesPublicService{
  async getAll(){
    return await SouvenirImages.find()
  }

  async getOne(id:number){
    const souvenirImage = await SouvenirImages.findOneBy({id:id})
    if(!souvenirImage){
      throw new NotFoundException('No such souvenir image')
    }
    return souvenirImage
  }

}