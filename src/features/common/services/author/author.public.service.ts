import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthorFilter } from '../../filters/author.filter';
import { AuthorRepository } from '../../repositories/author.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthorsPublicService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: AuthorRepository) {
  }

  async getAll(filter: AuthorFilter) {
    return await this.repo.getAll(filter);
  }

  async getOne(id: number) {
    const author = await this.repo.getOneById(id);
    if (!author) {
      throw new NotFoundException('Author not found');
    }
    return author;
  }

}