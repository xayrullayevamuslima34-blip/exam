import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseSectionsFilter } from '../../filters/course-sections.filter';
import { CourseSectionsRepository } from '../../repositories/course-sections.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CourseSectionsPublicService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: CourseSectionsRepository) {
  }

  async getAll(filter: CourseSectionsFilter) {
    return await this.repo.getAll(filter);
  }

  async getOne(id: number) {
    const section = await this.repo.getOneById(id);
    if (!section) {
      throw new NotFoundException('Course section not found');
    }
    return section;
  }

}