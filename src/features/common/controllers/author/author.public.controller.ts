import { Controller, Get, Param, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { AuthorsPublicService } from '../../services/author/author.public.service';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { RolesGuard } from '../../../../core/guards/role.guard';
import { AuthorFilter } from '../../filters/author.filter';

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller('public/authors')
export class AuthorsPublicController {

  constructor(private service: AuthorsPublicService) {
  }

  @Get()
  async getAll(@Query() filter: AuthorFilter) {
    return await this.service.getAll(filter);
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.service.getOne(id);
  }

}