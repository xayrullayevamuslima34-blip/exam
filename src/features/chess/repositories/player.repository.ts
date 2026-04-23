import { ConfigService } from '@nestjs/config';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from '../entities/player.entity';
import { PlayerFilter } from '../filters/player.filter';

export class PlayerRepository extends BaseRepository<Player>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(Player)
    protected readonly repo: Repository<Player>
  ) {
    super();
  }

  async getAll(filters : PlayerFilter){
    const whereOptions: FindOptionsWhere<Player> = {}

    if(filters.search){
      whereOptions.fullName = ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions)
  }

}