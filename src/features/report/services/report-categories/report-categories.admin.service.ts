import {Injectable, NotFoundException} from "@nestjs/common";
import {ReportCategories} from "../../entities/report-categories.entity";
import {ReportCategoriesCreateAdminDto} from "../../dtos/report-categories/admin/report-categories.create.admin.dto";
import {ReportCategoriesUpdateAdminDto} from "../../dtos/report-categories/admin/report-categories.update.admin.dto";
import { ReportCategoriesFilter } from '../../filters/report-categories.filter';
import { ConfigService } from '@nestjs/config';
import { ReportCategoriesRepository } from '../../repositories/report-categories.repository';
import { ReportsListAdminDto } from '../../dtos/reports/admin/reports.list.admin.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ReportCategoriesAdminService{

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
            throw new NotFoundException("No report found")
        }
        return report
    }

    async create(payload: ReportCategoriesCreateAdminDto){
        const report = ReportCategories.create(payload as ReportCategories)
        await this.repo.save(report)
        return report
    }

    async update(id: number, payload: ReportCategoriesUpdateAdminDto){
        const report = await this.repo.getOneById(id)
        if (!report){
            throw new NotFoundException("No report found")
        }
        Object.assign(report, payload)
        return await this.repo.save(report)
    }

    async delete(id: number){
        const report = await this.repo.getOneById(id)
        if (!report){
            throw new NotFoundException("No report found")
        }
        return await this.repo.delete(report)
    }

}