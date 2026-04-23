import {plainToInstance} from "class-transformer";
import {News} from "../../entities/news.entity";
import { NewsFilter } from '../../filters/news.filter';
import { ConfigService } from '@nestjs/config';
import { NotFoundException } from '@nestjs/common';
import { NewsRepository } from '../../repositories/news.repository';
import { NewsListAdminDto } from '../../dtos/news/admin/news.list.admin.dto';

export class NewsPublicService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: NewsRepository) {}

    async getAll(filters: NewsFilter){
        const rawNews = await this.repo.getAll(filters);

        const baseUrl = this.config.getOrThrow<string>('BASE_URL');
        rawNews.data = rawNews.data.map(news => ({
            ...news,
            image: news.image ? `${baseUrl}/${news.image}` : null
        }));

        rawNews.data = plainToInstance(NewsListAdminDto, rawNews.data, { excludeExtraneousValues: true });
        return rawNews;
    }

    async getOne(id: number){
        const news = await News.findOneBy({id: id})
        if (!news){
            throw new NotFoundException("News with given id not found");
        }
        return news
    }
}