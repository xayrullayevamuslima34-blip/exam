import { BaseRepository } from '../../../core/repositories/base.repository';
import { Course } from '../entities/course.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CourseCategories } from '../entities/course-categories.entity';
import { CourseCategoriesFilter } from '../filters/course-categories.filter';

@Injectable()
export class CourseCategoriesRepository extends BaseRepository<CourseCategories>{

  constructor(protected readonly config: ConfigService,
              @InjectRepository(CourseCategories)
              protected readonly repo: Repository<CourseCategories>) {
    super();
  }

  async getAll(filters : CourseCategoriesFilter){
    const whereOptions: FindOptionsWhere<CourseCategories> = {}

    if(filters.search){
      whereOptions.title = ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions)
  }
}
