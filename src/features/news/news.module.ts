import { Module } from '@nestjs/common';
import { NewsAdminController } from './controllers/news/news.admin.controller';
import { NewsAdminService } from './services/news/news.admin.service';
import { NewsPublicService } from './services/news/news.public.service';
import { NewsPublicController } from './controllers/news/news.public.controller';
import { NewsViewsAdminService } from './services/news-views/news-views.admin.service';
import { NewsViewsAdminController } from './controllers/news-views/news-views.admin.controller';
import { NewsViewsPublicController } from './controllers/news-views/news-views.public.controller';
import { NewsViewsPublicService } from './services/news-views/news-views.public.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from '../../config/jwt.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from './entities/news.entity';
import { NewsAdminRepository } from './repositories/news/news.admin.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([News]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: jwtConfig,
    }),
  ],
  controllers: [NewsAdminController, NewsPublicController,
    NewsViewsAdminController, NewsViewsPublicController],

  providers: [NewsAdminService, NewsPublicService,
    NewsAdminRepository,
    NewsViewsAdminService, NewsViewsPublicService],
})
export class NewsModule {
}
