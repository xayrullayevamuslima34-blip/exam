import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {PlayerPublicService} from "../service/player.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("players")
export class PlayerPublicController{

    constructor(private readonly playerService: PlayerPublicService) {}

    @Get("list")
    async getAll(){
        return this.playerService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.playerService.getOne(id)
    }

}