import { Injectable, NotFoundException } from '@nestjs/common';
import { BookLike } from '../../entities/book-like.entity';
import { User } from '../../../authorization/entities/authentication.entity';
import { Book } from '../../entities/book.entity';
import { BookLikeRepository } from '../../repositories/book-like.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BookLikePublicService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: BookLikeRepository) {
  }

  async toggleLike(bookId: number, userId: number) {
    const user = await User.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const book = await Book.findOneBy({ id: bookId });
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    const like = await BookLike.findOneBy({ userId, bookId });
    if (like) {
      await this.repo.delete(like);
      return { message: 'Removed' };
    } else {
      const newLike = BookLike.create({ userId: user.id, bookId: book.id });
      await this.repo.save(newLike);
      return { message: 'Liked' };
    }
  }

}