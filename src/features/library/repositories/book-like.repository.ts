import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { ConfigService } from '@nestjs/config';
import { FindOptionsWhere, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BookLike } from '../entities/book-like.entity';
import { BookLikeFilter } from '../filters/book-like.filter';

@Injectable()
export class BookLikeRepository extends BaseRepository<BookLike>{
  constructor(protected config: ConfigService,
              @InjectRepository(BookLike)
              protected repo: Repository<BookLike>) {
    super();
  }

  public async getAll(filters: BookLikeFilter){
    const whereOptions: FindOptionsWhere<BookLike> = {}
    if (filters.bookId){
      whereOptions.bookId= filters.bookId
    }
    return await super.getAll(filters, whereOptions);
  }

}