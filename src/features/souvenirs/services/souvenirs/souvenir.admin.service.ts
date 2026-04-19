import { Souvenirs } from '../../entities/souvenirs.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirsCreateAdminDto } from '../../dtos/souvenirs/admin/souvenirs.create.admin.dto';
import { SouvenirsUpdateAdminDto } from '../../dtos/souvenirs/admin/souvenirs.update.public.dto';

@Injectable()
export class SouvenirAdminService{
  async getAll(){
    return await Souvenirs.find()
  }

  async getOne(id: number){
    const souvenir = Souvenirs.findOneBy({id:id})
    if(!souvenir){
      throw new NotFoundException("No such souvenir")
    }
    return souvenir
  }

  async create(payload: SouvenirsCreateAdminDto){
    const souvenir = Souvenirs.create(payload as Souvenirs)
    await Souvenirs.save(souvenir)
    return souvenir
  }

  async update(id: number, payload: SouvenirsUpdateAdminDto){
    const souvenir = await Souvenirs.findOneBy({id:id})
    if(!souvenir){
      throw new NotFoundException("No such souvenir")
    }
    Object.assign(souvenir,payload)
    await Souvenirs.save(souvenir)
    return souvenir
  }

  async delete(id: number){
    const souvenir = await Souvenirs.findOneBy({id:id})
    if(!souvenir){
      throw new NotFoundException("No such souvenir")
    }
    await Souvenirs.remove(souvenir)
    return souvenir
  }

}