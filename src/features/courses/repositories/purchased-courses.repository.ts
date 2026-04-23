import { BaseRepository } from '../../../core/repositories/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { FindOptionsWhere, Repository } from 'typeorm';
import { PurchasedCourses } from '../entities/purchased-courses.entity';
import { PurchasedCoursesFilter } from '../filters/purchased-courses.filter';

@Injectable()
export class PurchasedCoursesRepository extends BaseRepository<PurchasedCourses>{

  constructor(protected readonly config: ConfigService,
              @InjectRepository(PurchasedCourses)
              protected readonly repo: Repository<PurchasedCourses>) {
    super();
  }

  async getAll(filters : PurchasedCoursesFilter){
    const whereOptions: FindOptionsWhere<PurchasedCourses> = {}

    if(filters.userId){
      whereOptions.userId = filters.userId
    }
    return await super.getAll(filters, whereOptions)
  }
}
