import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Color } from '../../entities/color.entity';
import { ColorCreateAdminDto } from '../../dtos/colors/admin/color.create.admin.dto';
import { ColorUpdateAdminDto } from '../../dtos/colors/admin/color.update.admin.dto';
import { ColorFilter } from '../../filters/color.filter';
import { ConfigService } from '@nestjs/config';
import { ColorRepository } from '../../repositories/color.repository';

@Injectable()
export class ColorAdminService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: ColorRepository) {
  }

  async getAll(filter: ColorFilter) {
    return await this.repo.getAll(filter);
  }

  async getOne(id: number) {
    const color = await this.repo.getOneById(id);
    if (!color) throw new NotFoundException('Not found');
    return color;
  }

  async create(payload: ColorCreateAdminDto) {
    const alreadyExists = await Color.findOneBy({ title: payload.title });
    if (alreadyExists) {
      throw new BadRequestException('Color with given already exists');
    }
    const color = Color.create(payload as Color);
    return await this.repo.save(color);
  }

  async update(id: number, payload: ColorUpdateAdminDto) {
    const color = await this.repo.getOneById(id);
    if (!color) {
      throw new NotFoundException('Not found');
    }
    Object.assign(color,
      Object.fromEntries(Object.entries(payload).filter(([key, value]) => value)));
    return await this.repo.save(color);
  }

  async delete(id: number) {
    const color = await this.repo.getOneById(id);
    if (!color) {
      throw new NotFoundException('Not found');
    }
    await this.repo.delete(color);
    return { message: 'Deleted color' };
  }

}

