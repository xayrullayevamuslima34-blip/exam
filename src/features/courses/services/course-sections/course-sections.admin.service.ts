import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseSections } from '../../entities/course-sections.entity';
import { CourseSectionCreateAdminDto } from '../../dtos/course-sections/admin/course-section.create.admin.dto';
import { CourseSectionUpdateAdminDto } from '../../dtos/course-sections/admin/course-section.update.admin.dto';
import { CourseSectionsFilter } from '../../filters/course-sections.filter';
import { ConfigService } from '@nestjs/config';
import { CourseSectionsRepository } from '../../repositories/course-sections.repository';

@Injectable()
export class CourseSectionsAdminService {

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

  async create(payload: CourseSectionCreateAdminDto) {
    const section = CourseSections.create(payload as CourseSections);
    return await this.repo.save(section);
  }

  async update(id: number, payload: CourseSectionUpdateAdminDto) {
    const section = await this.repo.getOneById(id);
    if (!section) {
      throw new NotFoundException('Course section not found');
    }
    Object.assign(section, payload);
    return await this.repo.save(section);
  }

  async delete(id: number) {
    const section = await this.repo.getOneById(id);
    if (!section) {
      throw new NotFoundException('Course section not found');
    }
    await this.repo.delete(section);
    return { message: 'Deleted successfully' };
  }

}