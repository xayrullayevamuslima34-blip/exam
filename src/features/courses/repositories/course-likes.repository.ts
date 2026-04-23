import { BaseRepository } from '../../../core/repositories/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CourseLikes } from '../entities/course-likes.entity';
import { CourseLikesFilter } from '../filters/course-likes.filter';

@Injectable()
export class CourseLikesRepository extends BaseRepository<CourseLikes>{

  constructor(protected readonly config: ConfigService,
              @InjectRepository(CourseLikes)
              protected readonly repo: Repository<CourseLikes>) {
    super();
  }

  async getAll(filters : CourseLikesFilter){
    const whereOptions: FindOptionsWhere<CourseLikes> = {}

    if(filters.userId){
      whereOptions.userId = filters.userId
    }
    return await super.getAll(filters, whereOptions)
  }
}
