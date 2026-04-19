import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirLikes } from '../../entities/souvenirLikes.entity';
import { Users } from '../../../common/users/entities/user.entity';

@Injectable()
export class SouvenirLikesPublicService{
  async getAll(){
    return await SouvenirLikes.find()
  }

  async getOne(id:number){
    const souvenirLike = await SouvenirLikes.findOneBy({id:id})
    if(!souvenirLike){
      throw new NotFoundException("Not Found")
    }
    return souvenirLike
  }

  async toggleLike(souvenirId: number, userId: number){
    const user = await Users.findOneBy({id: userId})
    if(!user){
      throw new NotFoundException("Not Found")
    }

    const souvenir = await SouvenirLikes.findOneBy({id: souvenirId})
    if(!souvenir){
      throw new NotFoundException("Not Found")
    }

    const like = await SouvenirLikes.findOneBy({userId, souvenirId})
    if(like){
      await SouvenirLikes.remove(like)
      return {message: "Souvenir like was removed"};
    }else {
      const newLike = SouvenirLikes.create({userId: user.id, souvenirId: souvenir.id})
      await SouvenirLikes.save(newLike)
      return {message: "Souvenir like was saved"};
    }

  }

}