import {plainToInstance} from "class-transformer";
import {NotFoundException} from "@nestjs/common";
import {NewsCreateAdminDto} from "../../dtos/news/admin/news.create.admin.dto";
import {NewsListAdminDto} from "../../dtos/news/admin/news.list.admin.dto";
import {News} from "../../entities/news.entity";
import {NewsUpdateAdminDto} from "../../dtos/news/admin/news.update.admin.dto";

export class NewsPublicService{
    async create(payload: NewsCreateAdminDto){
        const news = News.create(payload as News)
        news.createdAt = (new Date()).toISOString()
        await News.save(news)
        return news
    }

    async getAll(){
        const news = await News.find()
        const data = plainToInstance(NewsListAdminDto, news, {excludeExtraneousValues: true})
        return news
    }

    async getOne(id: number){
        const news = await News.findOneBy({id: id})
        return news
    }

    async update(id: number, payload: NewsUpdateAdminDto){
        const news = await News.findOneBy({id})
        if(!news){
            throw new NotFoundException('News with given id not found')
        }

        Object.assign(
            news,
            Object.fromEntries(
                Object.entries(payload).filter(([key, value]) => value)
            )
        )

        await News.save(news)
        return news
    }

    async delete(id){
        const news = await News.findOneBy({id})
        if(!news){
            throw new NotFoundException('News with given id not found')
        }
        await News.remove(news)
    }
}