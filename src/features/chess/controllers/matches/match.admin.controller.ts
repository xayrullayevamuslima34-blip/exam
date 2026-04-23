import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from "@nestjs/common";
import {MatchCreateAdminDto} from "../../dtos/matches/admin/match.create.admin.dto";
import {MatchUpdateAdminDto} from "../../dtos/matches/admin/match.update.admin.dto";
import {MatchAdminService} from "../../services/matches/match.admin.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {Role} from "../../../../core/enums/role.enum";
import {Roles} from "../../../../core/decorators/roles.decorator";
import { MatchFilter } from '../../filters/match.filter';

@Roles(Role.Admin)
@ApiBearerAuth()
@Controller("admin/matches")
export class MatchAdminController{

    constructor(private readonly matchService: MatchAdminService) {}

    @Get("list")
    async getAll(@Query() filter: MatchFilter){
        return this.matchService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.matchService.getOne(id)
    }

    @Post("create")
    async create(@Body() payload: MatchCreateAdminDto){
        return this.matchService.create(payload)
    }

    @Patch("update/:id")
    async update(@Param("id") id: number, @Body() payload: MatchUpdateAdminDto){
        return this.matchService.update(id, payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number){
        return this.matchService.delete(id)
    }

}