import {Body, Injectable, NotFoundException, Param} from "@nestjs/common";
import {NewsViews} from "../../entities/news-views.entity";
import {NewsViewsCreateAdminDto} from "../../dtos/news-views/admin/news-views.create.admin.dto";
import {NewsViewsUpdateAdminDto} from "../../dtos/news-views/admin/news-views.update.admin.dto";

@Injectable()
export class NewsViewsAdminService{
    async getAll(){
        return NewsViews.find()
    }

    async getOne(@Param("id") id: string){
        const views = await NewsViews.findOneBy({id: +id})
        if (!views){
            throw new NotFoundException("Not found")
        }
        return views
    }

    async create(@Body() payload: NewsViewsCreateAdminDto){
        const views = NewsViews.create(payload as NewsViews)
        await NewsViews.save(views)
        return views
    }

    async update(@Param("id") id: string, @Body() payload: NewsViewsUpdateAdminDto){
        const views = await NewsViews.findOneBy({id: +id})
        if (!views){
            throw new NotFoundException("Not found")
        }
        Object.assign(views, payload)
        await NewsViews.save(views)
        return views
    }

    async delete(@Param("id") id: string){
        const views = await NewsViews.findOneBy({id: +id})
        if (!views){
            throw new NotFoundException("Not Found")
        }
        await NewsViews.remove(views)
        return {message: "Deleted successfully"}
    }

}