import { Injectable, NotFoundException } from '@nestjs/common';
import { BookReview } from '../../entities/book-review.entity';
import { BookReviewCreateAdminDto } from '../../dtos/book-review/admin /book-review.create.admin.dto';
import { BookReviewUpdateAdminDto } from '../../dtos/book-review/admin /book-review.update.admin.dto';
import { BookReviewFilter } from '../../filters/book-review.filter';
import { ConfigService } from '@nestjs/config';
import { BookReviewRepository } from '../../repositories/book-review.repository';

@Injectable()
export class BookReviewAdminService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: BookReviewRepository) {
  }

  async getAll(filter: BookReviewFilter) {
    return await this.repo.getAll(filter);
  }

  async getOne(id: number) {
    const review = await this.repo.getOneById(id);
    if (!review) {
      throw new NotFoundException('Book not found');
    }
    return review;
  }

  async create(payload: BookReviewCreateAdminDto) {
    const review = await BookReview.create(payload as BookReview);
    return await this.repo.save(review);
  }

  async update(id: number, payload: BookReviewUpdateAdminDto) {
    const review = await this.repo.getOneById(id);
    if (!review) {
      throw new NotFoundException('Book not found');
    }

    Object.assign(review, payload);
    return await this.repo.save(review);
  }

  async delete(id: number) {
    const review = await this.repo.getOneById(id);
    if (!review) {
      throw new NotFoundException('Book not found');
    }

    await this.repo.delete(review);
    return { message: 'Deleted successfully' };
  }

}