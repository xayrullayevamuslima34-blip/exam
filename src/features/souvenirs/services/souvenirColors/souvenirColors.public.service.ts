import { Souvenirs } from '../../entities/souvenirs.entity';
import { NotFoundError } from 'rxjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SouvenirColorsPublicService {
  async getAll(){
    return await Souvenirs.find();
  }

  async getOne(id:number){
    const souvenir = await Souvenirs.findOneBy({id:id});
    if(!souvenir){
      throw new NotFoundError("Souvenir not found");
    }
    return souvenir;
  }

}