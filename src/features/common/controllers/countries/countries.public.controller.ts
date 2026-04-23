import {Controller, Get, Param, Query, UseGuards} from "@nestjs/common";
import {CountriesPublicService} from "../../services/countries/countries.public.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import { CountriesFilter } from '../../filters/countries.filter';

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/countries")
export class CountriesPublicController{

    constructor(private readonly countryService: CountriesPublicService) {}

    @Get("list")
    async getAll(@Query() filter: CountriesFilter){
        return this.countryService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.countryService.getOne(id)
    }

}