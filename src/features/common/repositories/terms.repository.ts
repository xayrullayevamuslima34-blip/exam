import { ConfigService } from '@nestjs/config';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Color } from '../entities/color.entity';
import { ColorFilter } from '../filters/color.filter';
import { Terms } from '../entities/terms.entity';
import { TermsFilter } from '../filters/terms.filter';

export class TermsRepository extends BaseRepository<Terms>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(Terms)
    protected readonly repo: Repository<Terms>
  ) {
    super();
  }

  async getAll(filters : TermsFilter){
    const whereOptions: FindOptionsWhere<Terms> = {}

    if(filters.search){
      whereOptions.content = ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions)
  }

}