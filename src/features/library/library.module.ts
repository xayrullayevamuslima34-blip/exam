import { Module } from '@nestjs/common';
import { BookAdminController } from './controllers/book/book.admin.controller';
import { BookPublicController } from './controllers/book/book.public.controller';
import { BookCategoryAdminController } from './controllers/book-category/book-category.admin.controller';
import { BookCategoryPublicController } from './controllers/book-category/book-category.public.controller';
import { BookLikeAdminController } from './controllers/book-like/book-like.admin.controller';
import { BookLikePublicController } from './controllers/book-like/book-like.public.controller';
import { BookReviewAdminController } from './controllers/book-review/book-review.admin.controller';
import { BookReviewPublicController } from './controllers/book-review/book-review.public.controller';
import { BookAdminService } from './services/book/book.admin.service';
import { BookPublicService } from './services/book/book.public.service';
import { BookCategoryAdminService } from './services/book-category/book-category.admin.service';
import { BookCategoryPublicService } from './services/book-category/book-category.public.service';
import { BookLikeAdminService } from './services/book-like/book-like.admin.service';
import { BookLikePublicService } from './services/book-like/book-like.public.service';
import { BookReviewAdminService } from './services/book-review/book-review.admin.service';
import { BookReviewPublicService } from './services/book-review/book-review.public.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { BookCategory } from './entities/book-category.entity';
import { BookLike } from './entities/book-like.entity';
import { BookReview } from './entities/book-review.entity';
import { BookRepository } from './repositories/book.repository';
import { BookCategoryRepository } from './repositories/book-category.repository';
import { BookLikeRepository } from './repositories/book-like.repository';
import { BookReviewRepository } from './repositories/book-review.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Book, BookCategory, BookLike, BookReview])],

  controllers: [BookAdminController, BookPublicController,
    BookCategoryAdminController, BookCategoryPublicController,
    BookLikeAdminController, BookLikePublicController,
    BookReviewAdminController, BookReviewPublicController],

  providers: [BookAdminService, BookPublicService,
    BookCategoryAdminService, BookCategoryPublicService,
    BookLikeAdminService, BookLikePublicService,
    BookReviewAdminService, BookReviewPublicService,
    BookRepository, BookCategoryRepository,
    BookLikeRepository, BookReviewRepository,
  ],
})
export class LibraryModule {
}