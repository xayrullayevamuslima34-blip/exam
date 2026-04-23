import { SouvenirImages } from '../../entities/souvenirImages.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirImagesCreateAdminDto } from '../../dtos/souvenirImages/admin/souvenirImages.create.admin.dto';
import { SouvenirImagesUpdateAdminDto } from '../../dtos/souvenirImages/admin/souvenirImages.update.public.dto';
import { SouvenirImagesFilter } from '../../filters/souvenirImages.filter';
import { ConfigService } from '@nestjs/config';
import { SouvenirImagesRepository } from '../../repositories/souvenirImages.repository';

@Injectable()
export class SouvenirImagesAdminService{
  constructor(protected readonly config: ConfigService,
              protected readonly repo: SouvenirImagesRepository) {
  }


  async getAll(filter: SouvenirImagesFilter){
    return await this.repo.getAll(filter)
  }

  async getOne(id:number){
    const souvenirImage = await this.repo.getOneById(id)
    if(!souvenirImage){
      throw new NotFoundException('No souvenir image found')
    }
    return souvenirImage
  }

  async create(payload: SouvenirImagesCreateAdminDto){
    const souvenirImage = SouvenirImages.create(payload as SouvenirImages)
    return await this.repo.save(souvenirImage)
  }

  async update(id: number, payload: SouvenirImagesUpdateAdminDto){
    const souvenirImage = await this.repo.getOneById(id)
    if(!souvenirImage){
      throw new NotFoundException('No souvenir image found')
    }
    Object.assign(souvenirImage, payload)
    return await this.repo.save(souvenirImage)
  }

  async delete(id:number){
    const souvenirImage = await this.repo.getOneById(id)
    if(!souvenirImage){
      throw new NotFoundException('No souvenir image found')
    }
    await this.repo.delete(souvenirImage)
    return {message: `Souvenir image was deleted successfully`};
  }

}