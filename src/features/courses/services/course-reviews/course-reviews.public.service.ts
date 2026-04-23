import { Injectable } from '@nestjs/common';
import { CourseReviews } from '../../entities/course-reviews.entity';
import { CourseReviewCreateAdminDto } from '../../dtos/course-reviews/admin/course-review.create.admin.dto';
import { CourseReviewsRepository } from '../../repositories/course-reviews.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CourseReviewsPublicService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: CourseReviewsRepository) {
  }

  async create(payload: CourseReviewCreateAdminDto) {
    const review = CourseReviews.create(payload as CourseReviews);
    return await this.repo.save(review);
  }

}