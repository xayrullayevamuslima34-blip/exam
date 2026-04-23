import {Injectable, NotFoundException, } from "@nestjs/common";
import { ReportCategoriesFilter } from '../../filters/report-categories.filter';
import { ReportCategoriesRepository } from '../../repositories/report-categories.repository';
import { ConfigService } from '@nestjs/config';
import { ReportsListAdminDto } from '../../dtos/reports/admin/reports.list.admin.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ReportCategoriesPublicService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: ReportCategoriesRepository) {
    }

    async getAll(filter: ReportCategoriesFilter){
        const report = await this.repo.getAll(filter)

        report.data = plainToInstance(ReportsListAdminDto, report.data, { excludeExtraneousValues: true });
        return report;
    }

    async getOne(id: number){
        const report = await this.repo.getOneById(id)
        if (!report){
            throw new NotFoundException("No report found with id")
        }
        return report
    }
}