import { Souvenirs } from '../../entities/souvenirs.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirsCreateAdminDto } from '../../dtos/souvenirs/admin/souvenirs.create.admin.dto';
import { SouvenirsUpdateAdminDto } from '../../dtos/souvenirs/admin/souvenirs.update.public.dto';
import { SouvenirsFilter } from '../../filters/souvenirs.filter';
import { ConfigService } from '@nestjs/config';
import { SouvenirsRepository } from '../../repositories/souvenirs.repository';

@Injectable()
export class SouvenirAdminService{

  constructor(protected readonly config: ConfigService,
              protected readonly repo: SouvenirsRepository) {}

  async getAll(filter: SouvenirsFilter){
    return await this.repo.getAll(filter)
  }

  async getOne(id: number){
    const souvenir = await this.repo.getOneById(id)
    if(!souvenir){
      throw new NotFoundException("No such souvenir")
    }
    return souvenir
  }

  async create(payload: SouvenirsCreateAdminDto){
    const souvenir = Souvenirs.create(payload as Souvenirs)
    return await this.repo.save(souvenir)
  }

  async update(id: number, payload: SouvenirsUpdateAdminDto){
    const souvenir = await this.repo.getOneById(id)
    if(!souvenir){
      throw new NotFoundException("No such souvenir")
    }
    Object.assign(souvenir,payload)
    return await this.repo.save(souvenir)
  }

  async delete(id: number){
    const souvenir = await this.repo.getOneById(id)
    if(!souvenir){
      throw new NotFoundException("No such souvenir")
    }
    return await this.repo.delete(souvenir)
  }

}