import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirImagesFilter } from '../../filters/souvenirImages.filter';
import { SouvenirImagesRepository } from '../../repositories/souvenirImages.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SouvenirImagesPublicService{

  constructor(protected readonly config: ConfigService,
              protected readonly repo: SouvenirImagesRepository) {
  }

  async getAll(filter: SouvenirImagesFilter){
    return await this.repo.getAll(filter)
  }

  async getOne(id:number){
    const souvenirImage = await this.repo.getOneById(id)
    if(!souvenirImage){
      throw new NotFoundException('No such souvenir image')
    }
    return souvenirImage
  }

}