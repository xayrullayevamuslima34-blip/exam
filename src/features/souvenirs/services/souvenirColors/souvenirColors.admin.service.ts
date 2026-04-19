import { Souvenirs } from '../../entities/souvenirs.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirColors } from '../../entities/souvenirColors.entity';
import { SouvenirColorsUpdateAdminDto } from '../../dtos/souvenirColors/admin/souvenirColors.update.public.dto';
import { SouvenirColorsCreateAdminDto } from '../../dtos/souvenirColors/admin/souvenirColors.create.admin.dto';

@Injectable()
export class SouvenirColorsAdminService {
  async getAll(){
    return await Souvenirs.find()
  }

  async getOne(id:number){
    const souvenir = await SouvenirColors.findOneBy({id:id})
    if(!souvenir){
      throw new NotFoundException("No such souvenir")
    }
    return souvenir
  }

  async create(payload: SouvenirColorsCreateAdminDto){
    const souvenir = SouvenirColors.create(payload as SouvenirColors)
    await Souvenirs.save(souvenir)
    return souvenir
  }

  async update(id:number, payload: SouvenirColorsUpdateAdminDto){
    const souvenir = await SouvenirColors.findOneBy({id:id})
    if(!souvenir){
      throw new NotFoundException("No such souvenir")
    }
    Object.assign(souvenir,payload as SouvenirColors)
    await Souvenirs.save(souvenir)
    return souvenir
  }

  async delete(id:number){
    const souvenir = await SouvenirColors.findOneBy({id:id})
    if(!souvenir){
      throw new NotFoundException("No such souvenir")
    }
    await SouvenirColors.remove(souvenir)
    return {message:"Deleted Souvenir"};
  }

}