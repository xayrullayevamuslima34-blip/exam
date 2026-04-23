import { Module } from '@nestjs/common';
import { ReportsAdminController } from './controllers/reports/reports.admin.controller';
import { ReportsAdminService } from './services/reports/reports.admin.service';
import { ReportsPublicController } from './controllers/reports/reports.public.controller';
import { ReportsPublicService } from './services/reports/reports.public.service';
import { ReportCategoriesAdminController } from './controllers/report-categories/report-categories.admin.controller';
import { ReportCategoriesAdminService } from './services/report-categories/report-categories.admin.service';
import { ReportCategoriesPublicController } from './controllers/report-categories/report-categories.public.controller';
import { ReportCategoriesPublicService } from './services/report-categories/report-categories.public.service';
import { ReportsRepository } from './repositories/report.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reports } from './entities/reports.entity';
import { ReportCategories } from './entities/report-categories.entity';
import { ReportCategoriesRepository } from './repositories/report-categories.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Reports, ReportCategories])],

  controllers: [ReportsAdminController, ReportsPublicController,
    ReportCategoriesAdminController, ReportCategoriesPublicController],

  providers: [ReportsAdminService, ReportsPublicService,
    ReportsRepository, ReportCategoriesRepository,
    ReportCategoriesAdminService, ReportCategoriesPublicService],
})
export class ReportModule {
}