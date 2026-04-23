import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirLikes } from '../../entities/souvenirLikes.entity';
import { SouvenirLikesFilter } from '../../filters/souvenirLikes.filter';
import { ConfigService } from '@nestjs/config';
import { SouvenirLikesRepository } from '../../repositories/souvenirLikes.repository';

@Injectable()
export class SouvenirLikesAdminService{

  constructor(protected readonly config: ConfigService,
              protected readonly repo: SouvenirLikesRepository) {
  }

  async getAll(filter: SouvenirLikesFilter){
    return await this.repo.getAll(filter)
  }

  async getOne(id:number){
    const souvenirLike = await this.repo.getOneById(id)
    if(!souvenirLike){
      throw new NotFoundException('No such souvenir image')
    }
    return souvenirLike
  }

  async delete(id:number){
    const souvenirLike = await this.repo.getOneById(id)
    if(!souvenirLike){
      throw new NotFoundException('No such souvenir image')
    }
    await this.repo.delete(souvenirLike)
    return {message: `Souvenir deleted successfully`};
  }

}