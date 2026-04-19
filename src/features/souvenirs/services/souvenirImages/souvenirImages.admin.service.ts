import { SouvenirImages } from '../../entities/souvenirImages.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirImagesCreateAdminDto } from '../../dtos/souvenirImages/admin/souvenirImages.create.admin.dto';
import { SouvenirImagesUpdateAdminDto } from '../../dtos/souvenirImages/admin/souvenirImages.update.public.dto';

@Injectable()
export class SouvenirImagesAdminService{
  async getAll(){
    return await SouvenirImages.find()
  }

  async getOne(id:number){
    const souvenirImage = await SouvenirImages.findOneBy({id:id})
    if(!souvenirImage){
      throw new NotFoundException('No souvenir image found')
    }
    return souvenirImage
  }

  async create(payload: SouvenirImagesCreateAdminDto){
    const souvenirImage = SouvenirImages.create(payload as SouvenirImages)
    await SouvenirImages.save(souvenirImage)
    return souvenirImage
  }

  async update(id: number, payload: SouvenirImagesUpdateAdminDto){
    const souvenirImage = await SouvenirImages.findOneBy({id:id})
    if(!souvenirImage){
      throw new NotFoundException('No souvenir image found')
    }
    Object.assign(souvenirImage, payload)
    await SouvenirImages.save(souvenirImage)
    return souvenirImage
  }

  async delete(id:number){
    const souvenirImage = await SouvenirImages.findOneBy({id:id})
    if(!souvenirImage){
      throw new NotFoundException('No souvenir image found')
    }
    await SouvenirImages.remove(souvenirImage)
    return {message: `Souvenir image was deleted successfully`};
  }

}