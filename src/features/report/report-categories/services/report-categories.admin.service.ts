import {Body, Injectable, NotFoundException, Param} from "@nestjs/common";
import {ReportCategories} from "../entities/report-categories.entity";
import {ReportCategoriesCreateAdminDto} from "../dtos/admin/report-categories.create.admin.dto";
import {ReportCategoriesUpdateAdminDto} from "../dtos/admin/report-categories.update.admin.dto";

@Injectable()
export class ReportCategoriesAdminService{
    async getAll(){
        return ReportCategories.find()
    }

    async getOne(@Param("id") id: string){
        const report = await ReportCategories.findOneBy({id: +id})
        if (!report){
            throw new NotFoundException("No report found")
        }
        return report
    }

    async create(@Body() payload: ReportCategoriesCreateAdminDto){
        const report = ReportCategories.create(payload as ReportCategories)
        await ReportCategories.save(report)
        return report
    }

    async update(@Param("id") id: string, @Body() payload: ReportCategoriesUpdateAdminDto){
        const report = await ReportCategories.findOneBy({id: +id})
        if (!report){
            throw new NotFoundException("No report found")
        }
        Object.assign(report, payload)
        await ReportCategories.save(report)
        return report
    }

    async delete(@Param("id") id: string){
        const report = await ReportCategories.findOneBy({id: +id})
        if (!report){
            throw new NotFoundException("No report found")
        }
        await ReportCategories.remove(report)
    }

}