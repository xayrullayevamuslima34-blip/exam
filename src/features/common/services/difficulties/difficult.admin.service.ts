import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Difficulty } from '../../entities/difficulty.entity';
import { DifficultyCreateAdminDto } from '../../dtos/difficulties/admin/difficulty.create.admin.dto';
import { DifficultyUpdateAdminDto } from '../../dtos/difficulties/admin/difficulty.update.admin.dto';
import { ConfigService } from '@nestjs/config';
import { DifficultyFilter } from '../../filters/difficulty.filter';
import { DifficultyRepository } from '../../repositories/difficulty.repository';

@Injectable()
export class DifficultyAdminService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: DifficultyRepository) {
  }

  async getAll(filter: DifficultyFilter) {
    const rawDifficulties = await this.repo.getAll(filter);
    for (let difficulty of rawDifficulties.data) {
      difficulty.icon = this.config.getOrThrow<string>('BASE_URL') + '/' + difficulty.icon;
    }
    return rawDifficulties;
  }

  async getOne(id: number) {
    const difficulty = await this.repo.getOneById(id);
    if (!difficulty) {
      throw new NotFoundException('Difficulty not found');
    }
    return difficulty;
  }

  async create(payload: DifficultyCreateAdminDto, icon: Express.Multer.File) {
    const alreadyExists = await Difficulty.findOneBy({ title: payload.title });
    if (alreadyExists) {
      throw new BadRequestException('Difficulty with given title already exists');
    }

    const difficulty = Difficulty.create(payload as Difficulty);
    difficulty.icon = icon.path;
    return await this.repo.save(difficulty);
  }

  async update(id: number, payload: DifficultyUpdateAdminDto, icon: Express.Multer.File) {
    const difficulty = await this.repo.getOneById(id);
    if (!difficulty) {
      throw new NotFoundException('Difficulty not found');
    }

    Object.assign(difficulty,
      Object.fromEntries(Object.entries(payload).filter(([key, value]) => value)));
    return await this.repo.save(difficulty);
  }

  async delete(id: number) {
    const difficulty = await this.repo.getOneById(id);
    if (!difficulty) {
      throw new NotFoundException('Difficulty not found');
    }
    await this.repo.delete(difficulty);
    return { message: 'Difficulty deleted' };
  }

}