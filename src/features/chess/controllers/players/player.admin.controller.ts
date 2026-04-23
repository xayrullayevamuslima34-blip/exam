import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post, Query, UploadedFile,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {PlayerCreateAdminDto} from "../../dtos/players/admin/player.create.admin.dto";
import {PlayerUpdateAdminDto} from "../../dtos/players/admin/player.update.admin.dto";
import {PlayerAdminService} from "../../services/players/player.admin.service";
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "../../../../config/multer.config";
import { PlayerListAdminDto } from '../../dtos/players/admin/player.list.admin.dto';
import { PlayerFilter } from '../../filters/player.filter';

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("players")
export class PlayerAdminController{

    constructor(private readonly playerService: PlayerAdminService) {}

    @ApiOkResponse({type: [PlayerListAdminDto], isArray: true})
    @Get("list")
    async getAll(@Query() filter: PlayerFilter){
        return this.playerService.getAll(filter)
    }

    @ApiOkResponse({type: [PlayerListAdminDto]})
    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.playerService.getOne(id)
    }

    @UseInterceptors(FileInterceptor('image', {storage: storageOptions}))
    @Post("create")
    async create(@Body() payload: PlayerCreateAdminDto, @UploadedFile() image: Express.Multer.File){
        return this.playerService.create(payload, image)
    }

    @UseInterceptors(FileInterceptor('image', {storage: storageOptions}))
    @Patch("update/:id")
    async update(@Param("id") id: number, @Body() payload: PlayerUpdateAdminDto, @UploadedFile() image: Express.Multer.File){
        return this.playerService.update(id, payload, image)
    }

    @Delete("delete")
    async delete(@Param("id") id: number){
        return this.playerService.delete(id)
    }

}