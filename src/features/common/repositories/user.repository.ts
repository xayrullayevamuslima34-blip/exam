
import { ConfigService } from '@nestjs/config';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Color } from '../entities/color.entity';
import { ColorFilter } from '../filters/color.filter';
import { Users } from '../entities/user.entity';
import { UserFilter } from '../filters/user.filter';

export class UserRepository extends BaseRepository<Users>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(Users)
    protected readonly repo: Repository<Users>
  ) {
    super();
  }

  async getAll(filters : UserFilter){
    const whereOptions: FindOptionsWhere<Users> = {}

    if(filters.search){
      whereOptions.fullName = ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions)
  }

}