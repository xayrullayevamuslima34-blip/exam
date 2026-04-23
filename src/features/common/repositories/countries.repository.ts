import { ConfigService } from '@nestjs/config';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Countries } from '../entities/countries.entity';
import { CountriesFilter } from '../filters/countries.filter';

export class CountriesRepository extends BaseRepository<Countries>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(Countries)
    protected readonly repo: Repository<Countries>
  ) {
    super();
  }

  async getAll(filters : CountriesFilter){
    const whereOptions: FindOptionsWhere<Countries> = {}

    if(filters.search){
      whereOptions.title = ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions)
  }

}