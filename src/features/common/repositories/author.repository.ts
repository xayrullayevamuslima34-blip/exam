import { ConfigService } from '@nestjs/config';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { Author } from '../entities/author.entity';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorFilter } from '../filters/author.filter';

export class AuthorRepository extends BaseRepository<Author>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(Author)
    protected readonly repo: Repository<Author>
  ) {
    super();
  }

  async getAll(filters : AuthorFilter){
    const whereOptions: FindOptionsWhere<Author> = {}

    if(filters.search){
      whereOptions.fullName = ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions)
  }

}