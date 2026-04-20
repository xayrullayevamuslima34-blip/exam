import { BaseRepository } from '../../../../core/repositories/base.repository';
import { Course } from '../../entities/course.entity';
import { PaginationFilters } from '../../../../core/filters/pagination.filter';
import { PaginatedResult } from '../../../../core/paginatedResult.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';

@Injectable()
export class CourseAdminRepository extends BaseRepository<Course>{

  constructor(protected readonly config: ConfigService,
              @InjectRepository(Course)
              protected readonly repo: Repository<Course>) {
    super();
  }

  async getAll(filters: PaginationFilters){
    const take = filters.size ?? this.config.getOrThrow<number>("DEFAULT_SIZE")
    const currentPage = filters.page ?? this.config.getOrThrow<number>("DEFAULT_PAGE")
    const skip = (currentPage -1) * take

    const totalCount = await this.repo.count()
    const totalPages = Math.ceil(totalCount / take)
    const previousPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    const data = await this.repo.find({skip: skip, take: take})
    return {totalCount, totalPages, currentPage, previousPage, nextPage, data} as PaginatedResult

  }
}
