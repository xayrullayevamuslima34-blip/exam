import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirLikes } from '../../entities/souvenirLikes.entity';
import { Users } from '../../../common/entities/user.entity';
import { SouvenirLikesFilter } from '../../filters/souvenirLikes.filter';
import { SouvenirLikesRepository } from '../../repositories/souvenirLikes.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SouvenirLikesPublicService{

  constructor(protected readonly config: ConfigService,
              protected readonly repo: SouvenirLikesRepository) {
  }

  async getAll(filter: SouvenirLikesFilter){
    return await this.repo.getAll(filter)
  }

  async getOne(id:number){
    const souvenirLike = await this.repo.getOneById(id)
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
      await this.repo.delete(like)
      return {message: "Souvenir like was removed"};
    }else {
      const newLike = SouvenirLikes.create({userId: user.id, souvenirId: souvenir.id})
      await this.repo.save(newLike)
      return {message: "Souvenir like was saved"};
    }

  }

}