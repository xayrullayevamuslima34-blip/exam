import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { SouvenirColors } from '../entities/souvenirColors.entity';
import { SouvenirColorsFilter } from '../filters/souvenirColors.filter';

@Injectable()
export class SouvenirColorsRepository extends BaseRepository<SouvenirColors>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(SouvenirColors)
    protected readonly repo: Repository<SouvenirColors>
  ) {
    super();
  }

  public async getAll(filters: SouvenirColorsFilter){
    const whereOptions: FindOptionsWhere<SouvenirColors> = {}
    if (filters.colorId){
      whereOptions.colorId= filters.colorId
    }
    return await super.getAll(filters, whereOptions);
  }

}