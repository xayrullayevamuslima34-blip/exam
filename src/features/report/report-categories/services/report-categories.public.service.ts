import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {ReportCategories} from "../entities/report-categories.entity";

@Injectable()
export class ReportCategoriesPublicService{
    async getAll(){
        return ReportCategories.find()
    }

    async getOne(@Param("id") id: string){
        const report = await ReportCategories.findOneBy({id: +id})
        if (!report){
            throw new NotFoundException("No report found with id")
        }
        return report
    }
}