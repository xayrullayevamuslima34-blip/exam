import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {Reports} from "../entities/reports.entity";

@Injectable()
export class ReportsAdminService{
    async getAll(){
        return Reports.find()
    }

    async getOne(@Param("id") id: string){
        const report = await Reports.findOneBy({id: +id})
        if (!report){
            throw new NotFoundException("No reports found")
        }
        return report
    }

    async delete(@Param("id") id: string){
        const report = await Reports.findOneBy({id: +id})
        if (!report){
            throw new NotFoundException("No reports found")
        }
        await Reports.remove(report)
        return report
    }

}