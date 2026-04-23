import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseCategories } from '../../entities/course-categories.entity';
import { CourseCategoriesCreateAdminDto } from '../../dtos/course-categories/admin/course-categories.create.admin.dto';
import { CourseCategoriesUpdateAdminDto } from '../../dtos/course-categories/admin/course-categories.update.admin.dto';
import { CourseCategoriesFilter } from '../../filters/course-categories.filter';
import { ConfigService } from '@nestjs/config';
import { CourseCategoriesRepository } from '../../repositories/course-categories.repository';

@Injectable()
export class CourseCategoriesAdminService {

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

  async create(payload: CourseCategoriesCreateAdminDto) {
    const category = CourseCategories.create(payload as CourseCategories);
    return await this.repo.save(category);
  }

  async update(id: number, payload: CourseCategoriesUpdateAdminDto) {
    const category = await this.repo.getOneById(id);
    if (!category) {
      throw new NotFoundException('Course category not found');
    }
    Object.assign(category, payload);
    return await this.repo.save(category);
  }

  async delete(id: number) {
    const category = await this.repo.getOneById(id);
    if (!category) {
      throw new NotFoundException('Course category not found');
    }
    return await this.repo.delete(category);
  }

}