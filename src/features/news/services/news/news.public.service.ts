import {plainToInstance} from "class-transformer";
import {NotFoundException} from "@nestjs/common";
import {News} from "../../entities/news.entity";
import { NewsFilter } from '../../filters/news.filter';
import { FindOptionsWhere, ILike } from 'typeorm';
import { PaginationResultNewsDto } from '../../filters/pagination-result.news.dto';
import { NewsListPublicDto } from '../../dtos/news/public/news.list.public.dto';
import { ConfigService } from '@nestjs/config';

export class NewsPublicService{

    constructor(private readonly config: ConfigService) {}

    async getAll(filter: NewsFilter){
        let whereOptions: FindOptionsWhere<News> = {};
        let take = filter.size ?? this.config.getOrThrow<number>('DEFAULT_SIZE')
        const currentPage = filter.page ?? this.config.getOrThrow<number>('DEFAULT_PAGE')
        const skip = (currentPage - 1 ) * take

        if(filter.search){
            whereOptions.title = ILike(`%${filter.search}%`)
        }

        const totalCount = await News.countBy(whereOptions)
        const totalPages = Math.ceil(totalCount / take)
        const nextPage = currentPage < totalPages ? currentPage + 1 : 1;

        const news = await News.find({where: whereOptions, take: take, skip: skip})
        const data = plainToInstance(NewsListPublicDto, news, {excludeExtraneousValues: true})
        return {totalCount, totalPages, currentPage, nextPage, data} as PaginationResultNewsDto
    }

    async getOne(id: number){
        const news = await News.findOneBy({id: id})
        if (!news){
            throw Error()
        }
        return news
    }
}