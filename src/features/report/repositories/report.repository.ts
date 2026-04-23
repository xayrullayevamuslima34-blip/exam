import { Injectable } from '@nestjs/common';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { Reports } from '../entities/reports.entity';
import { News } from '../../news/entities/news.entity';
import { ReportFilter } from '../filters/report.filter';

@Injectable()
export class ReportsRepository extends BaseRepository<Reports> {
  constructor(
    @InjectRepository(Reports)
    protected readonly repo: Repository<Reports>,
    protected readonly config: ConfigService,
  ) {
    super();
  }

  public async getAll(filters: ReportFilter){
    const whereOptions: FindOptionsWhere<Reports> = {}
    if (filters.search){
      whereOptions.reportCategory= ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions);
  }

}