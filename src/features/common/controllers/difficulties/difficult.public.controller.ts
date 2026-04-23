import {Controller, Get, Param, Query, UseGuards} from "@nestjs/common";
import {DifficultyPublicService} from "../../services/difficulties/difficult.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import { DifficultyFilter } from '../../filters/difficulty.filter';

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/difficulties")
export class DifficultyPublicController{

    constructor(private readonly difficultyService: DifficultyPublicService) {}

    @Get("list")
    async getAll(@Query() filter: DifficultyFilter){
        return this.difficultyService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.difficultyService.getOne(id)
    }


}