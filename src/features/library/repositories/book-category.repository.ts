import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { ConfigService } from '@nestjs/config';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BookCategory } from '../entities/book-category.entity';
import { BookCategoryFilter } from '../filters/book-category.filter';

@Injectable()
export class BookCategoryRepository extends BaseRepository<BookCategory>{
  constructor(protected config: ConfigService,
              @InjectRepository(BookCategory)
              protected repo: Repository<BookCategory>) {
    super();
  }

  public async getAll(filters: BookCategoryFilter){
    const whereOptions: FindOptionsWhere<BookCategory> = {}
    if (filters.search){
      whereOptions.title= ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions);
  }

}