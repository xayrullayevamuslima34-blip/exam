import { Controller, Get, Param, Query, Req, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { NewsPublicService } from '../../services/news/news.public.service';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { RolesGuard } from '../../../../core/guards/role.guard';
import { NewsFilter } from '../../filters/news.filter';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import {ParseIntPipe, UseFilters} from '@nestjs/common';
import { NewsListPublicDto } from '../../dtos/news/public/news.list.public.dto';
import { GlobalFilter } from '../../../../core/filters/global.filter';
import { PaginatedResult } from '../../../../core/paginatedResult.dto';

@Roles(Role.User)
@UseFilters(GlobalFilter)
@Controller('public/news')
export class NewsPublicController {

    constructor(private readonly service: NewsPublicService) {
    }

    @Get()
    @ApiOkResponse({type: [PaginatedResult], isArray: true})
    async getAll( @Query() filter: NewsFilter){
        let news = await this.service.getAll(filter)
        return news
    }

    @Get(':id')
    @ApiOkResponse({type: [NewsListPublicDto]})
    async getOne(@Param('id', ParseIntPipe) id: number){
       return await this.service.getOne(id)
    }

}














