import { ConfigService } from '@nestjs/config';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Language } from '../entities/language.entity';
import { LanguageFilter } from '../filters/language.filter';

export class LanguageRepository extends BaseRepository<Language>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(Language)
    protected readonly repo: Repository<Language>
  ) {
    super();
  }

  async getAll(filters : LanguageFilter){
    const whereOptions: FindOptionsWhere<Language> = {}

    if(filters.search){
      whereOptions.title = ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions)
  }

}