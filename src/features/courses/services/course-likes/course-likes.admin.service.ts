import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseLikesFilter } from '../../filters/course-likes.filter';
import { ConfigService } from '@nestjs/config';
import { CourseLikesRepository } from '../../repositories/course-likes.repository';

@Injectable()
export class CourseLikesAdminService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: CourseLikesRepository) {
  }

  async getAll(filter: CourseLikesFilter) {
    return await this.repo.getAll(filter);
  }

  async getOne(id: number) {
    const like = await this.repo.getOneById(id);
    if (!like) {
      throw new NotFoundException('Course not found');
    }
    return like;
  }

  async delete(id: number) {
    const like = await this.repo.getOneById(id);
    if (!like) {
      throw new NotFoundException('Course like not found');
    }
    await this.repo.delete(like);
    return { message: 'Course like deleted successfully' };
  }


}