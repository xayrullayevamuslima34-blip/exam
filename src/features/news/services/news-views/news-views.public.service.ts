import {Injectable, NotFoundException} from "@nestjs/common";
import { ConfigService } from '@nestjs/config';
import { NewsViewsRepository } from '../../repositories/news-views.repository';
import { NewsViewsFilter } from '../../filters/newsViews.filter';
import { NewsListAdminDto } from '../../dtos/news/admin/news.list.admin.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class NewsViewsPublicService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: NewsViewsRepository) {
    }

    async getAll(filters: NewsViewsFilter){
        const rawNews = await this.repo.getAll(filters);

        rawNews.data = plainToInstance(NewsListAdminDto, rawNews.data, { excludeExtraneousValues: true });
        return rawNews;
    }

    async getOne(id: number){
        const views = await this.repo.getOneById(id)
        if (!views){
            throw new NotFoundException("Not Found")
        }
        return views
    }
}