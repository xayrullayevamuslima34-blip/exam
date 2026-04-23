import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from '../../entities/book.entity';
import { BookCreateAdminDto } from '../../dtos/book/admin/book.create.admin.dto';
import { BookUpdateAdminDto } from '../../dtos/book/admin/book.update.admin.dto';
import { ConfigService } from '@nestjs/config';
import { BookFilter } from '../../filters/book.filter';
import { BookRepository } from '../../repositories/book.repository';

@Injectable()
export class BookAdminService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: BookRepository) {
  }

  async getAll(filters: BookFilter) {
    return await this.repo.getAll(filters);
  }

  async getOne(id: number) {
    const book = await this.repo.getOneById(id);

    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  async create(payload: BookCreateAdminDto, image: Express.Multer.File) {
    const newBook = Book.create({ ...payload, image: image.path });
    return await this.repo.save(newBook);
  }

  async update(id: number, payload: BookUpdateAdminDto, image: Express.Multer.File) {
    const book = await this.repo.getOneById(id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }

    Object.assign(book,
      Object.fromEntries(
        Object.entries(payload).filter(([key, value]) => value),
      ));
    return await this.repo.save(book);
  }

  async delete(id: number) {
    const book = await this.repo.getOneById(id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    await this.repo.delete(book);
    return { message: 'Deleted Successfully' };
  }


}