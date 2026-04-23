import { Module } from '@nestjs/common';
import { NewsAdminController } from './controllers/news/news.admin.controller';
import { NewsAdminService } from './services/news/news.admin.service';
import { NewsPublicService } from './services/news/news.public.service';
import { NewsPublicController } from './controllers/news/news.public.controller';
import { NewsViewsAdminService } from './services/news-views/news-views.admin.service';
import { NewsViewsAdminController } from './controllers/news-views/news-views.admin.controller';
import { NewsViewsPublicController } from './controllers/news-views/news-views.public.controller';
import { NewsViewsPublicService } from './services/news-views/news-views.public.service';
import { NewsRepository } from './repositories/news.repository';
import { News } from './entities/news.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsViews } from './entities/news-views.entity';
import { NewsViewsRepository } from './repositories/news-views.repository';


@Module({

  imports: [
    TypeOrmModule.forFeature([News, NewsViews]),
  ],


  controllers: [NewsAdminController, NewsPublicController,
    NewsViewsAdminController, NewsViewsPublicController],

  providers: [NewsAdminService, NewsPublicService,
    NewsRepository, NewsViewsRepository,
    NewsViewsAdminService, NewsViewsPublicService],
})
export class NewsModule {
}
