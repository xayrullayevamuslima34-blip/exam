import { BaseRepository } from '../../../core/repositories/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CourseLessons } from '../entities/course-lessons.entity';
import { CourseLikesFilter } from '../filters/course-likes.filter';
import { CourseLessonsFilter } from '../filters/course-lessons.filter';

@Injectable()
export class CourseLessonsRepository extends BaseRepository<CourseLessons>{

  constructor(protected readonly config: ConfigService,
              @InjectRepository(CourseLessons)
              protected readonly repo: Repository<CourseLessons>) {
    super();
  }

  async getAll(filters : CourseLessonsFilter){
    const whereOptions: FindOptionsWhere<CourseLessons> = {}

    if(filters.search){
      whereOptions.title = ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions)
  }
}
