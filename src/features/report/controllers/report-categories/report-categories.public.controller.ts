import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ReportCategoriesPublicService } from '../../services/report-categories/report-categories.public.service';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { RolesGuard } from '../../../../core/guards/role.guard';
import { PaginationFilters } from '../../../../core/filters/pagination.filter';
import { ApiOkResponse } from '@nestjs/swagger';
import { ReportCategoriesFilter } from '../../filters/report-categories.filter';

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller('public/report-categories')
export class ReportCategoriesPublicController {

  constructor(private readonly reportCategoriesService: ReportCategoriesPublicService) {
  }

  @Get('list')
  @ApiOkResponse({ type: PaginationFilters })
  async getAll(@Query() filter: ReportCategoriesFilter) {
    return this.reportCategoriesService.getAll(filter);
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return this.reportCategoriesService.getOne(id);
  }

}