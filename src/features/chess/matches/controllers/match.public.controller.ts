import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {MatchPublicService} from "../service/match.public.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("public/matches")
export class MatchPublicController {

    constructor(private readonly matchService: MatchPublicService) {
    }

    @Get("list")
    async getAll() {
        return this.matchService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string) {
        return this.matchService.getOne(id)
    }
}