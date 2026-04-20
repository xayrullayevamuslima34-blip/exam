import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../core/repositories/base.repository';
import { Book } from '../../entities/book.entity';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookAdminRepository extends BaseRepository<Book>{
  constructor(protected config: ConfigService,
              @InjectRepository(Book)
              protected repo: Repository<Book>) {
    super();
  }
}