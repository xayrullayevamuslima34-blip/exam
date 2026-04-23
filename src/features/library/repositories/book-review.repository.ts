import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { ConfigService } from '@nestjs/config';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BookReview } from '../entities/book-review.entity';
import { BookReviewFilter } from '../filters/book-review.filter';

@Injectable()
export class BookReviewRepository extends BaseRepository<BookReview>{
  constructor(protected config: ConfigService,
              @InjectRepository(BookReview)
              protected repo: Repository<BookReview>) {
    super();
  }

  public async getAll(filters: BookReviewFilter){
    const whereOptions: FindOptionsWhere<BookReview> = {}
    if (filters.search){
      whereOptions.comment= ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions);
  }

}