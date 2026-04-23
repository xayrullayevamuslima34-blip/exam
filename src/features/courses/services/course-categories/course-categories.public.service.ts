import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseCategoriesFilter } from '../../filters/course-categories.filter';
import { CourseCategoriesRepository } from '../../repositories/course-categories.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CourseCategoriesPublicService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: CourseCategoriesRepository) {
  }

  async getAll(filter: CourseCategoriesFilter) {
    return await this.repo.getAll(filter);
  }

  async getOne(id: number) {
    const category = await this.repo.getOneById(id);
    if (!category) {
      throw new NotFoundException('Course category not found');
    }
    return category;
  }

}