import { plainToInstance } from 'class-transformer';
import { Injectable, NotFoundException } from '@nestjs/common';
import { NewsCreateAdminDto } from '../../dtos/news/admin/news.create.admin.dto';
import { NewsListAdminDto } from '../../dtos/news/admin/news.list.admin.dto';
import { NewsUpdateAdminDto } from '../../dtos/news/admin/news.update.admin.dto';
import { News } from '../../entities/news.entity';
import { ConfigService } from '@nestjs/config';
import { NewsFilter } from '../../filters/news.filter';
import { NewsRepository } from '../../repositories/news.repository';


@Injectable()
export class NewsAdminService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: NewsRepository) {
  }

  async getAll(filters: NewsFilter) {
    const rawNews = await this.repo.getAll(filters);

    const baseUrl = this.config.getOrThrow<string>('BASE_URL');
    rawNews.data = rawNews.data.map(news => ({
      ...news,
      image: news.image ? `${baseUrl}/${news.image}` : null
    }));

    rawNews.data = plainToInstance(NewsListAdminDto, rawNews.data, { excludeExtraneousValues: true });
    return rawNews;
  }

  async getOne(id: number) {
    const news = await this.repo.getOneById(id);
    if (!news) {
      throw new NotFoundException('News with given id not found');
    }
    return plainToInstance(NewsListAdminDto, news, { excludeExtraneousValues: true });
  }

  async create(payload: NewsCreateAdminDto, image: Express.Multer.File) {
    const news = { ...payload, image: image.path } as News;
    news.createdAt = (new Date()).toISOString();
    return this.repo.save(news);
  }

  async update(id: number, payload: NewsUpdateAdminDto, image: Express.Multer.File) {
    const news = await this.repo.getOneById(id);
    if (!news) {
      throw new NotFoundException('News with given id not found');
    }

    Object.assign(
      news,
      Object.fromEntries(
        Object.entries(payload).filter(([_, value]) => value !== undefined),
      ));
    return await this.repo.save(news);
  }

  async delete(id: number) {
    const news = await this.repo.getOneById(id);
    if (!news) {
      throw new NotFoundException('News with given id not found');
    }
    return this.repo.delete(news);
  }
}
