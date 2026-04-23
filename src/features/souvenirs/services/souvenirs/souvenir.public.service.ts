import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirsFilter } from '../../filters/souvenirs.filter';
import { ConfigService } from '@nestjs/config';
import { SouvenirsRepository } from '../../repositories/souvenirs.repository';

@Injectable()
export class SouvenirPublicService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: SouvenirsRepository) {}

  async getAll(filter: SouvenirsFilter) {
    return await this.repo.getAll(filter)
  }

  async getOne(id: number) {
    const souvenir = await this.repo.getOneById(id);
    if (!souvenir) {
      throw new NotFoundException('id not found');
    }
    return souvenir;
  }

}