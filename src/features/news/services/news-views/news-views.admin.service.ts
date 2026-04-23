import {Body, Injectable, NotFoundException, Param} from "@nestjs/common";
import {NewsViews} from "../../entities/news-views.entity";
import {NewsViewsCreateAdminDto} from "../../dtos/news-views/admin/news-views.create.admin.dto";
import {NewsViewsUpdateAdminDto} from "../../dtos/news-views/admin/news-views.update.admin.dto";
import { NewsViewsFilter } from '../../filters/newsViews.filter';
import { NewsListAdminDto } from '../../dtos/news/admin/news.list.admin.dto';
import { ConfigService } from '@nestjs/config';
import { NewsViewsRepository } from '../../repositories/news-views.repository';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class NewsViewsAdminService{

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
            throw new NotFoundException("Not found")
        }
        return views
    }

    async create(payload: NewsViewsCreateAdminDto){
        const views = NewsViews.create(payload as NewsViews)
        return await this.repo.save(views)
    }

    async update(id: number, payload: NewsViewsUpdateAdminDto){
        const views = await this.repo.getOneById(id)
        if (!views){
            throw new NotFoundException("Not found")
        }
        Object.assign(views, payload)
        return await this.repo.save(views)
    }

    async delete(id: number){
        const views = await this.repo.getOneById(id)
        if (!views){
            throw new NotFoundException("Not Found")
        }
        await this.repo.delete(views)
        return {message: "Deleted successfully"}
    }

}