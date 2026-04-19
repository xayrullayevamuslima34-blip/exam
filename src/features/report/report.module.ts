import { Module } from '@nestjs/common';
import { ReportsAdminController } from './reports/controllers/reports.admin.controller';
import { ReportsAdminService } from './reports/service/reports.admin.service';
import { ReportsPublicController } from './reports/controllers/reports.public.controller';
import { ReportsPublicService } from './reports/service/reports.public.service';
import { ReportCategoriesAdminController } from './report-categories/controllers/report-categories.admin.controller';
import { ReportCategoriesAdminService } from './report-categories/services/report-categories.admin.service';
import { ReportCategoriesPublicController } from './report-categories/controllers/report-categories.public.controller';
import { ReportCategoriesPublicService } from './report-categories/services/report-categories.public.service';
import { jwtConfig } from '../../config/jwt.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: jwtConfig,
    }),
  ],
  controllers: [ReportsAdminController, ReportsPublicController,
    ReportCategoriesAdminController, ReportCategoriesPublicController],

  providers: [ReportsAdminService, ReportsPublicService,
    ReportCategoriesAdminService, ReportCategoriesPublicService],
})
export class ReportModule {
}