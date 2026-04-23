import {Controller, Get, Param, Query, UseGuards} from "@nestjs/common";
import {LanguagePublicService} from "../../services/languages/language.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import { PlayerFilter } from '../../../chess/filters/player.filter';
import { LanguageFilter } from '../../filters/language.filter';

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/languages")
export class LanguagePublicController{

    constructor(private readonly languageService: LanguagePublicService ) {}

    @Get("list")
    async getAll(@Query() filter: LanguageFilter){
        return this.languageService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.languageService.getOne(id)
    }

}