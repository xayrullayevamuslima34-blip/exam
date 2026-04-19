import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirLikes } from '../../entities/souvenirLikes.entity';

@Injectable()
export class SouvenirLikesAdminService{
  async getAll(){
    return await SouvenirLikes.find()
  }

  async getOne(id:number){
    const souvenirLike = await SouvenirLikes.findOneBy({id:id})
    if(!souvenirLike){
      throw new NotFoundException('No such souvenir image')
    }
    return souvenirLike
  }

  async delete(id:number){
    const souvenirLike = await SouvenirLikes.findOneBy({id:id})
    if(!souvenirLike){
      throw new NotFoundException('No such souvenir image')
    }
    await SouvenirLikes.remove(souvenirLike)
    return {message: `Souvenir deleted successfully`};
  }

}