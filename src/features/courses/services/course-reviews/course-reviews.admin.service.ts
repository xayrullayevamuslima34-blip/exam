import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseReviewsFilter } from '../../filters/course-reviews.filter';
import { ConfigService } from '@nestjs/config';
import { CourseReviewsRepository } from '../../repositories/course-reviews.repository';

@Injectable()
export class CourseReviewsAdminService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: CourseReviewsRepository) {
  }

  async getAll(filter: CourseReviewsFilter) {
    return await this.repo.getAll(filter);
  }

  async getOne(id: number) {
    const review = await this.repo.getOneById(id);
    if (!review) {
      throw new NotFoundException('Course review not found');
    }
    return review;
  }

  async delete(id: number) {
    const review = await this.repo.getOneById(id);
    if (!review) {
      throw new NotFoundException('Course review not found');
    }
    await this.repo.delete(review);
    return { message: 'Deleted successfully' };
  }

}