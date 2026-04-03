import {Module} from "@nestjs/common";
import {ReportsAdminController} from "./reports/controllers/reports.admin.controller";
import {BookReviewPublicController} from "../library/controllers/book-review/book-review.public.controller";
import {ReportsAdminService} from "./reports/service/reports.admin.service";
import {ReportsPublicController} from "./reports/controllers/reports.public.controller";
import {ReportsPublicService} from "./reports/service/reports.public.service";
import {ReportCategoriesAdminController} from "./report-categories/controllers/report-categories.admin.controller";
import {ReportCategoriesAdminService} from "./report-categories/services/report-categories.admin.service";
import {ReportCategoriesPublicController} from "./report-categories/controllers/report-categories.public.controller";
import {ReportCategoriesPublicService} from "./report-categories/services/report-categories.public.service";

@Module({
    controllers: [ReportsAdminController, ReportsPublicController,
                  ReportCategoriesAdminController, ReportCategoriesPublicController],

    providers: [ReportsAdminService, ReportsPublicService,
                ReportCategoriesAdminService, ReportCategoriesPublicService]
})
export class ReportModule{}