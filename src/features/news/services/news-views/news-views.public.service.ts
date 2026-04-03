import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {NewsViews} from "../../entities/news-views.entity";

@Injectable()
export class NewsViewsPublicService{
    async getAll(){
        return NewsViews.find()
    }

    async getOne(@Param("id") id: string){
        const views = await NewsViews.findOneBy({id: +id})
        if (!views){
            throw new NotFoundException("Not Found")
        }
        return views
    }
}