import { Injectable, NotFoundException } from '@nestjs/common';
import { Color } from '../entities/color.entity';

@Injectable()
export class ColorPublicService {
  async getAll() {
    return await Color.find();
  }

  async getOne(id: number) {
    const color = await Color.findOneBy({ id: id });
    if (!color) {
      throw new NotFoundException('Color with given id not found');
    }
    return color;

  }
}