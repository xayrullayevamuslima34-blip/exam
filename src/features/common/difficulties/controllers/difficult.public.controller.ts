import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {DifficultyPublicService} from "../services/difficult.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/difficulties")
export class DifficultyPublicController{

    constructor(private readonly difficultyService: DifficultyPublicService) {}

    @Get("list")
    async getAll(){
        return this.difficultyService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.difficultyService.getOne(id)
    }


}