import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { SouvenirReviews } from '../entities/souvenirReviews.entity';
import { SouvenirReviewsFilter } from '../filters/souvenirReviews.filter';

@Injectable()
export class SouvenirReviewsRepository extends BaseRepository<SouvenirReviews>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(SouvenirReviews)
    protected readonly repo: Repository<SouvenirReviews>
  ) {
    super();
  }

  public async getAll(filters: SouvenirReviewsFilter){
    const whereOptions: FindOptionsWhere<SouvenirReviews> = {}
    if (filters.search){
      whereOptions.comment= ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions);
  }

}