import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { NewsViews } from '../entities/news-views.entity';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { News } from '../entities/news.entity';
import { NewsViewsFilter } from '../filters/newsViews.filter';

@Injectable()
export class NewsViewsRepository extends BaseRepository<NewsViews> {

  constructor(protected readonly config: ConfigService,
              @InjectRepository(NewsViews)
              protected readonly repo: Repository<NewsViews>) {
    super();
  }

  public async getAll(filters: NewsViewsFilter){
    const whereOptions: FindOptionsWhere<News> = {}
    if (filters.search){
      whereOptions.title= ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions);
  }

}