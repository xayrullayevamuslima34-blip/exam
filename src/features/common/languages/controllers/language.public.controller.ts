import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {LanguagePublicService} from "../services/language.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/languages")
export class LanguagePublicController{

    constructor(private readonly languageService: LanguagePublicService ) {}

    @Get("list")
    async getAll(){
        return this.languageService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.languageService.getOne(id)
    }

}