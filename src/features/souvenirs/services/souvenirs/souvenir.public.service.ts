import { Souvenirs } from '../../entities/souvenirs.entity';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class SouvenirPublicService {
  async getAll(){
    return await Souvenirs.find();
  }

  async getOne(id:number){
    const souvenir = await Souvenirs.findOneBy({id:id});
    if(!souvenir){
      throw new NotFoundException("id not found");
    }
    return  souvenir
  }

}