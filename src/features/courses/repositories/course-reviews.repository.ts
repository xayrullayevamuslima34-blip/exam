import { BaseRepository } from '../../../core/repositories/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CourseReviews } from '../entities/course-reviews.entity';
import { CourseReviewsFilter } from '../filters/course-reviews.filter';

@Injectable()
export class CourseReviewsRepository extends BaseRepository<CourseReviews>{

  constructor(protected readonly config: ConfigService,
              @InjectRepository(CourseReviews)
              protected readonly repo: Repository<CourseReviews>) {
    super();
  }

  async getAll(filters : CourseReviewsFilter){
    const whereOptions: FindOptionsWhere<CourseReviews> = {}

    if(filters.search){
      whereOptions.comment = ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions)
  }
}
