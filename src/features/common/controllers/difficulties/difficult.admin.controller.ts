import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    UploadedFile,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {DifficultyCreateAdminDto} from "../../dtos/difficulties/admin/difficulty.create.admin.dto";
import {DifficultyAdminService} from "../../services/difficulties/difficult.admin.service";
import { ApiBearerAuth, ApiConsumes, ApiOkResponse } from '@nestjs/swagger';
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "../../../../config/multer.config";
import {DifficultyUpdateAdminDto} from "../../dtos/difficulties/admin/difficulty.update.admin.dto";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import { DifficultiesListAdminDto } from '../../dtos/difficulties/admin/difficulty.list.dto';
import { DifficultyFilter } from '../../filters/difficulty.filter';

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/difficulties")
export class DifficultyAdminController{

    constructor(private readonly difficultService: DifficultyAdminService) {}

    @ApiOkResponse({type: [DifficultiesListAdminDto]})
    @Get("list")
    async getAll(@Query() filter: DifficultyFilter){
        return this.difficultService.getAll(filter)
    }

    @ApiOkResponse({type: [DifficultiesListAdminDto]})
    @Get(":id")
    async getOne(@Param("id") id: number){
       return this.difficultService.getOne(id)
    }

    @Post("create")
    @ApiConsumes('multipart/form-data')
    @UseInterceptors(FileInterceptor('icon', {storage: storageOptions, limits: {fileSize: 1024 * 256}}))
    async create(@Body() payload: DifficultyCreateAdminDto, @UploadedFile() icon: Express.Multer.File){
        return this.difficultService.create(payload, icon)
    }

    @Patch("update/:id")
    @ApiConsumes("multipart/form-data")
    @UseInterceptors(FileInterceptor('icon', {storage: storageOptions}))
    async update(@Param("id") id: number, @Body() payload: DifficultyUpdateAdminDto, icon: Express.Multer.File){
        return this.difficultService.update(id, payload, icon)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number){
        return this.difficultService.delete(id)
    }

}