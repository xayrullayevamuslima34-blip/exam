import { ConfigService } from '@nestjs/config';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { FindOptionsWhere, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Match } from '../entities/match.entity';
import { MatchFilter } from '../filters/match.filter';

export class MatchRepository extends BaseRepository<Match>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(Match)
    protected readonly repo: Repository<Match>
  ) {
    super();
  }

  async getAll(filters : MatchFilter){
    const whereOptions: FindOptionsWhere<Match> = {}

    if(filters.search){
      whereOptions.firstPlayer = filters.search
    }
    return await super.getAll(filters, whereOptions)
  }

}