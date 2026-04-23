import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseUserLessons } from '../../entities/course-user-lessons.entity';
import {
  CourseUserLessonCreateAdminDto,
} from '../../dtos/course-user-lessons/admin/course-user-lesson.create.admin.dto';
import {
  CourseUserLessonUpdateAdminDto,
} from '../../dtos/course-user-lessons/admin/course-user-lesson.update.admin.dto';
import { CourseUserLessonsFilter } from '../../filters/course-user-lessons.filter';
import { ConfigService } from '@nestjs/config';
import { CourseUserLessonsRepository } from '../../repositories/course-user-lessons.repository';

@Injectable()
export class CourseUserLessonsAdminService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: CourseUserLessonsRepository) {
  }

  async getAll(filter: CourseUserLessonsFilter) {
    return await this.repo.getAll(filter);
  }

  async getOne(id: number) {
    const userLesson = await this.repo.getOneById(id);
    if (!userLesson) {
      throw new NotFoundException('Not found');
    }
    return userLesson;
  }

  async create(payload: CourseUserLessonCreateAdminDto) {
    const userLesson = CourseUserLessons.create(payload as CourseUserLessons);
    return await this.repo.save(userLesson);
  }

  async update(id: number, payload: CourseUserLessonUpdateAdminDto) {
    const userLesson = await this.repo.getOneById(id);
    if (!userLesson) {
      throw new NotFoundException('Not found');
    }
    Object.assign(userLesson, payload);
    return await this.repo.save(userLesson);
  }

  async delete(id: number) {
    const userLesson = await this.repo.getOneById(id);
    if (!userLesson) {
      throw new NotFoundException('Not found');
    }
    await this.repo.delete(userLesson);
    return { message: 'Deleted successfully' };
  }

}