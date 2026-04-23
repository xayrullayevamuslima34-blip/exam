import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { Souvenirs } from '../entities/souvenirs.entity';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { SouvenirsFilter } from '../filters/souvenirs.filter';

@Injectable()
export class SouvenirsRepository extends BaseRepository<Souvenirs>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(Souvenirs)
    protected readonly repo: Repository<Souvenirs>
  ) {
    super();
  }

  public async getAll(filters: SouvenirsFilter){
    const whereOptions: FindOptionsWhere<Souvenirs> = {}
    if (filters.search){
      whereOptions.title= ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions);
  }

}