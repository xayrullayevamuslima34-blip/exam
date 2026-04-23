import { ConfigService } from '@nestjs/config';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Color } from '../entities/color.entity';
import { ColorFilter } from '../filters/color.filter';

export class ColorRepository extends BaseRepository<Color>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(Color)
    protected readonly repo: Repository<Color>
  ) {
    super();
  }

  async getAll(filters : ColorFilter){
    const whereOptions: FindOptionsWhere<Color> = {}

    if(filters.search){
      whereOptions.title = ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions)
  }

}