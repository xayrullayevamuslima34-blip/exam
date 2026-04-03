import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Patch,
    Post, UploadedFile,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {Player} from "../entities/player.entity";
import {PlayerCreateAdminDto} from "../dtos/admin/player.create.admin.dto";
import {PlayerUpdateAdminDto} from "../dtos/admin/player.update.admin.dto";
import {PlayerAdminService} from "../service/player.admin.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "../../../../config/multer.config";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("players")
export class PlayerAdminController{

    constructor(private readonly playerService: PlayerAdminService) {}

    @Get("list")
    async getAll(){
        return this.playerService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.playerService.getOne(id)
    }

    @UseInterceptors(FileInterceptor('image', {storage: storageOptions}))
    @Post("create")
    async create(@Body() payload: PlayerCreateAdminDto, @UploadedFile() image: Express.Multer.File){
        return this.playerService.create(payload, image)
    }

    @UseInterceptors(FileInterceptor('image', {storage: storageOptions}))
    @Patch("update/:id")
    async update(@Param("id") id: string, @Body() payload: PlayerUpdateAdminDto, @UploadedFile() image: Express.Multer.File){
        return this.playerService.update(id, payload, image)
    }

    @Delete("delete")
    async delete(@Param("id") id: string){
        return this.playerService.delete(id)
    }

}