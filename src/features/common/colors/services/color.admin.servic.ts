import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Color } from '../entities/color.entity';
import { ColorCreateAdminDto } from '../dtos/admin/color.create.admin.dto';
import { ColorUpdateAdminDto } from '../dtos/admin/color.update.admin.dto';

@Injectable()
export class ColorAdminService {
  async getAll() {
    return await Color.find();
  }

  async getOne(id: number) {
    const color = await Color.findOneBy({ id: +id });
    if (!color) throw new NotFoundException('Not found');
    return color;
  }

  async create(payload: ColorCreateAdminDto) {
    const alreadyExists = await Color.findOneBy({ title: payload.title });
    if (alreadyExists) {
      throw new BadRequestException('Color with given already exists');
    }
    const color = Color.create(payload as Color);
    await Color.save(color);
    return color;
  }

  async update(id: number, payload: ColorUpdateAdminDto) {
    const color = await Color.findOneBy({ id: +id });
    if (!color) {
      throw new NotFoundException('Not found');
    }
    Object.assign(color,
      Object.fromEntries(Object.entries(payload).filter(([key, value]) => value)));
    await Color.save(color);
    return color;
  }

  async delete(id: number) {
    const color = await Color.findOneBy({ id: +id });
    if (!color) {
      throw new NotFoundException('Not found');
    }
    await Color.remove(color);
    return { message: 'Deleted color' };
  }

}

