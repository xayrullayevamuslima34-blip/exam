import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from "@nestjs/common";
import {MatchCreateAdminDto} from "../dtos/admin/match.create.admin.dto";
import {MatchUpdateAdminDto} from "../dtos/admin/match.update.admin.dto";
import {MatchAdminService} from "../service/match.admin.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {ApiBearerAuth} from "@nestjs/swagger";
import {Role} from "../../../../core/enums/role.enum";
import {Roles} from "../../../../core/decorators/roles.decorator";

@Roles(Role.Admin)
@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Controller("admin/matches")
export class MatchAdminController{

    constructor(private readonly matchService: MatchAdminService) {}

    @Get("list")
    async getAll(){
        return this.matchService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.matchService.getOne(id)
    }

    @Post("create")
    async create(@Body() payload: MatchCreateAdminDto){
        return this.matchService.create(payload)
    }

    @Patch("update/:id")
    async update(@Param("id") id: string, @Body() payload: MatchUpdateAdminDto){
        return this.matchService.update(id, payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: string){
        return this.matchService.delete(id)
    }

}