import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { ReportCategories } from '../entities/report-categories.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { News } from '../../news/entities/news.entity';
import { ReportCategoriesFilter } from '../filters/report-categories.filter';

@Injectable()
export class ReportCategoriesRepository extends BaseRepository<ReportCategories>{
  constructor(
    @InjectRepository(ReportCategories)
    protected readonly repo: Repository<ReportCategories>,
    protected readonly config: ConfigService,
  ) {
    super();
  }

  public async getAll(filters: ReportCategoriesFilter){
    const whereOptions: FindOptionsWhere<ReportCategories> = {}
    if (filters.search){
      whereOptions.title= ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions);
  }

}