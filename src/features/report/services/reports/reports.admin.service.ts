import {Injectable, NotFoundException} from "@nestjs/common";
import { ReportFilter } from '../../filters/report.filter';
import { ConfigService } from '@nestjs/config';
import { ReportsRepository } from '../../repositories/report.repository';
import { plainToInstance } from 'class-transformer';
import { ReportsListAdminDto } from '../../dtos/reports/admin/reports.list.admin.dto';

@Injectable()
export class ReportsAdminService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: ReportsRepository) {
    }

    async getAll(filter: ReportFilter){
        const report = await this.repo.getAll(filter)

        report.data = plainToInstance(ReportsListAdminDto, report.data, { excludeExtraneousValues: true });
        return report;
    }

    async getOne(id: number){
        const report = await this.repo.getOneById(id)
        if (!report){
            throw new NotFoundException("No reports found")
        }
        return report
    }

    async delete(id: number){
        const report = await this.repo.getOneById(id)
        if (!report){
            throw new NotFoundException("No reports found")
        }
        return await this.repo.delete(report)
    }

}