import { BaseRepository } from '../../../core/repositories/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CourseSections } from '../entities/course-sections.entity';
import { CourseSectionsFilter } from '../filters/course-sections.filter';

@Injectable()
export class CourseSectionsRepository extends BaseRepository<CourseSections>{

  constructor(protected readonly config: ConfigService,
              @InjectRepository(CourseSections)
              protected readonly repo: Repository<CourseSections>) {
    super();
  }

  async getAll(filters : CourseSectionsFilter){
    const whereOptions: FindOptionsWhere<CourseSections> = {}

    if(filters.search){
      whereOptions.title = ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions)
  }
}
