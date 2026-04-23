import { Souvenirs } from '../../entities/souvenirs.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirColors } from '../../entities/souvenirColors.entity';
import { SouvenirColorsUpdateAdminDto } from '../../dtos/souvenirColors/admin/souvenirColors.update.public.dto';
import { SouvenirColorsCreateAdminDto } from '../../dtos/souvenirColors/admin/souvenirColors.create.admin.dto';
import { SouvenirColorsFilter } from '../../filters/souvenirColors.filter';
import { SouvenirColorsRepository } from '../../repositories/souvenirColors.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SouvenirColorsAdminService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: SouvenirColorsRepository) {
  }

  async getAll(filter: SouvenirColorsFilter) {
    return await this.repo.getAll(filter);
  }

  async getOne(id: number) {
    const souvenir = await this.repo.getOneById(id);
    if (!souvenir) {
      throw new NotFoundException('No such souvenir');
    }
    return souvenir;
  }

  async create(payload: SouvenirColorsCreateAdminDto) {
    const souvenir = SouvenirColors.create(payload as SouvenirColors);
    return await this.repo.save(souvenir);
  }

  async update(id: number, payload: SouvenirColorsUpdateAdminDto) {
    const souvenir = await this.repo.getOneById(id);
    if (!souvenir) {
      throw new NotFoundException('No such souvenir');
    }
    Object.assign(souvenir, payload as SouvenirColors);
    return await this.repo.save(souvenir);
  }

  async delete(id: number) {
    const souvenir = await this.repo.getOneById(id);
    if (!souvenir) {
      throw new NotFoundException('No such souvenir');
    }
    await this.repo.delete(souvenir);
    return { message: 'Deleted Souvenir' };
  }

}