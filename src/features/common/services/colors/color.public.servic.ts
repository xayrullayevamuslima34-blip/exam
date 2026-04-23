import { Injectable, NotFoundException } from '@nestjs/common';
import { ColorFilter } from '../../filters/color.filter';
import { ColorRepository } from '../../repositories/color.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ColorPublicService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: ColorRepository) {
  }

  async getAll(filter: ColorFilter) {
    return await this.repo.getAll(filter);
  }

  async getOne(id: number) {
    const color = await this.repo.getOneById(id);
    if (!color) {
      throw new NotFoundException('Color with given id not found');
    }
    return color;

  }
}