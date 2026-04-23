import {Controller, Get, Param, Query} from "@nestjs/common";
import {PlayerPublicService} from "../../services/players/player.public.service";
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { PlayerFilter } from '../../filters/player.filter';


@Controller("players")
@Roles(Role.User)
export class PlayerPublicController{

    constructor(private readonly playerService: PlayerPublicService) {}

    @Get("list")
    async getAll(@Query() filter: PlayerFilter){
        return this.playerService.getAll(filter)
    }

    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.playerService.getOne(id)
    }

}