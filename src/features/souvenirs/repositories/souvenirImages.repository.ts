import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { SouvenirImages } from '../entities/souvenirImages.entity';
import { SouvenirImagesFilter } from '../filters/souvenirImages.filter';

@Injectable()
export class SouvenirImagesRepository extends BaseRepository<SouvenirImages>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(SouvenirImages)
    protected readonly repo: Repository<SouvenirImages>
  ) {
    super();
  }

  public async getAll(filters: SouvenirImagesFilter){
    const whereOptions: FindOptionsWhere<SouvenirImages> = {}
    if (filters.search){
      whereOptions.image= ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions);
  }

}