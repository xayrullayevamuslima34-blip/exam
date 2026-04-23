import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { Book } from '../entities/book.entity';
import { ConfigService } from '@nestjs/config';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BookFilter } from '../filters/book.filter';

@Injectable()
export class BookRepository extends BaseRepository<Book>{
  constructor(protected config: ConfigService,
              @InjectRepository(Book)
              protected repo: Repository<Book>) {
    super();
  }

  public async getAll(filters: BookFilter){
    const whereOptions: FindOptionsWhere<Book> = {}
    if (filters.search){
      whereOptions.title= ILike(`%${filters.search}%`)
    }
    return await super.getAll(filters, whereOptions);
  }

}