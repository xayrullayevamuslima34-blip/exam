import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthorsCreateAdminDto } from '../../dtos/author/admin/author.create.admin.dto';
import { AuthorsUpdateAdminDto } from '../../dtos/author/admin/author.update.admin.dto';
import { Author } from '../../entities/author.entity';
import { AuthorFilter } from '../../filters/author.filter';
import { ConfigService } from '@nestjs/config';
import { AuthorRepository } from '../../repositories/author.repository';

@Injectable()
export class AuthorsAdminService {

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

  async create(payload: AuthorsCreateAdminDto) {
    const author = Author.create(payload as Author);
    return await this.repo.save(author);
    ;
  }

  async update(id: number, payload: AuthorsUpdateAdminDto) {
    const author = await this.repo.getOneById(id);
    if (!author) {
      throw new NotFoundException('Author not found');
    }

    Object.assign(
      author,
      Object.fromEntries(Object.entries(payload).filter(([_, value]) => value !== undefined)),
    );
    return await this.repo.save(author);
    ;
  }

  async delete(id: number) {
    const author = await this.repo.getOneById(id);
    if (!author) {
      throw new NotFoundException('Author not found');
    }

    await this.repo.delete(author);
    return { message: 'Author deleted successfully' };
  }
}