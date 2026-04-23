import { BaseRepository } from '../../../core/repositories/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CourseUserLessons } from '../entities/course-user-lessons.entity';
import { CourseUserLessonsFilter } from '../filters/course-user-lessons.filter';

@Injectable()
export class CourseUserLessonsRepository extends BaseRepository<CourseUserLessons>{

  constructor(protected readonly config: ConfigService,
              @InjectRepository(CourseUserLessons)
              protected readonly repo: Repository<CourseUserLessons>) {
    super();
  }

  async getAll(filters : CourseUserLessonsFilter){
    const whereOptions: FindOptionsWhere<CourseUserLessons> = {}

    if(filters.userId){
      whereOptions.userId = filters.userId
    }
    return await super.getAll(filters, whereOptions)
  }
}
