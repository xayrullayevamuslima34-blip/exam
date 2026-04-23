import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirColorsFilter } from '../../filters/souvenirColors.filter';
import { SouvenirColorsRepository } from '../../repositories/souvenirColors.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SouvenirColorsPublicService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: SouvenirColorsRepository) {
  }

  async getAll(filter: SouvenirColorsFilter){
    return await this.repo.getAll(filter);
  }

  async getOne(id:number){
    const souvenir = await this.repo.getOneById(id);
    if(!souvenir){
      throw new NotFoundException("Souvenir not found");
    }
    return souvenir;
  }

}