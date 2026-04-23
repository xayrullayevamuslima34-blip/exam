import { BaseRepository } from '../../../core/repositories/base.repository';
import { Course } from '../entities/course.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CourseFilter } from '../filters/course.filter';

@Injectable()
export class CourseRepository extends BaseRepository<Course>{

  constructor(protected readonly config: ConfigService,
              @InjectRepository(Course)
              protected readonly repo: Repository<Course>) {
    super();
  }

  async getAll(filters : CourseFilter){
    const whereOptions: FindOptionsWhere<Course> = {}

    if(filters.search){
      whereOptions.title = ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions)
  }
}
