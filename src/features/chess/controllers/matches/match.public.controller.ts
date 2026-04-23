import { Controller, Get, Param, Query } from '@nestjs/common';
import { MatchPublicService } from '../../services/matches/match.public.service';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { ApiBearerAuth } from '@nestjs/swagger';
import { MatchFilter } from '../../filters/match.filter';

@Roles(Role.User)
@ApiBearerAuth()
@Controller("public/matches")
export class MatchPublicController {
    constructor(private readonly matchService: MatchPublicService) {
    }

    @Get("list")
    async getAll(@Query() filter: MatchFilter) {
        return this.matchService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number) {
        return this.matchService.getOne(id)
    }
}