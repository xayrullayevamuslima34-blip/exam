import { Injectable, NotFoundException } from '@nestjs/common';
import { PurchasedCourses } from '../../entities/purchased-courses.entity';
import { PurchasedCourseCreatePublicDto } from '../../dtos/purchased-courses/public/purchased-course.create.public.dto';
import { PurchasedCourseUpdatePublicDto } from '../../dtos/purchased-courses/public/purchased-course.update.public.dto';
import { PurchasedCoursesFilter } from '../../filters/purchased-courses.filter';
import { PurchasedCoursesRepository } from '../../repositories/purchased-courses.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PurchasedCoursesPublicService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: PurchasedCoursesRepository) {
  }

  async getAll(filter: PurchasedCoursesFilter) {
    return await this.repo.getAll(filter);
  }

  async getOne(id: number) {
    const purchased = await this.repo.getOneById(id);
    if (!purchased) {
      throw new NotFoundException('Not found');
    }
    return purchased;
  }

  async create(payload: PurchasedCourseCreatePublicDto) {
    const purchased = PurchasedCourses.create(payload as PurchasedCourses);
    return await this.repo.save(purchased);
  }

  async update(id: number, payload: PurchasedCourseUpdatePublicDto) {
    const purchased = await this.repo.getOneById(id);
    if (!purchased) {
      throw new NotFoundException('Not found');
    }
    Object.assign(purchased, payload);
    return await this.repo.save(purchased);
  }

  async delete(id: number) {
    const purchased = await this.repo.getOneById(id);
    if (!purchased) {
      throw new NotFoundException('Not found');
    }
    return await this.repo.delete(purchased);
  }

}