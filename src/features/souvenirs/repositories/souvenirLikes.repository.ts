import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { SouvenirLikes } from '../entities/souvenirLikes.entity';
import { SouvenirLikesFilter } from '../filters/souvenirLikes.filter';

@Injectable()
export class SouvenirLikesRepository extends BaseRepository<SouvenirLikes>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(SouvenirLikes)
    protected readonly repo: Repository<SouvenirLikes>
  ) {
    super();
  }

  public async getAll(filters: SouvenirLikesFilter){
    const whereOptions: FindOptionsWhere<SouvenirLikes> = {}
    if (filters.userId){
      whereOptions.userId= filters.userId
    }
    return await super.getAll(filters, whereOptions);
  }

}