import { ConfigService } from '@nestjs/config';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Difficulty } from '../entities/difficulty.entity';
import { DifficultyFilter } from '../filters/difficulty.filter';

export class DifficultyRepository extends BaseRepository<Difficulty>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(Difficulty)
    protected readonly repo: Repository<Difficulty>
  ) {
    super();
  }

  async getAll(filters : DifficultyFilter){
    const whereOptions: FindOptionsWhere<Difficulty> = {}

    if(filters.search){
      whereOptions.title = ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions)
  }

}