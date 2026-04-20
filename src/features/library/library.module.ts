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
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { jwtConfig } from '../../config/jwt.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: jwtConfig,
    }),
  ],
  controllers: [BookAdminController, BookPublicController,
    BookCategoryAdminController, BookCategoryPublicController,
    BookLikeAdminController, BookLikePublicController,
    BookReviewAdminController, BookReviewPublicController],

  providers: [BookAdminService, BookPublicService,
    BookCategoryAdminService, BookCategoryPublicService,
    BookLikeAdminService, BookLikePublicService,
    BookReviewAdminService, BookReviewPublicService],
})
export class LibraryModule {
}