import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {CountriesPublicService} from "../services/countries.public.service";
import {Countries} from "../entities/countries.entity";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/countries")
export class CountriesPublicController{

    constructor(private readonly countryService: CountriesPublicService) {}

    @Get("list")
    async getAll(){
        return this.countryService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.countryService.getOne(id)
    }

}