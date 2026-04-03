import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {DifficultyCreateAdminDto} from "../dtos/admin/difficulty.create.admin.dto";
import {DifficultyAdminService} from "../services/difficult.admin.service";
import {ApiBearerAuth, ApiConsumes} from "@nestjs/swagger";
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "../../../../config/multer.config";
import {DifficultyUpdateAdminDto} from "../dtos/admin/difficulty.update.admin.dto";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/difficulties")
export class DifficultyAdminController{

    constructor(private readonly difficultService: DifficultyAdminService) {}

    @Get("list")
    async getAll(){
        return this.difficultService.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id: string){
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
    async update(@Param("id") id: string, @Body() payload: DifficultyUpdateAdminDto, icon: Express.Multer.File){
        return this.difficultService.update(id, payload, icon)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: string){
        return this.difficultService.delete(id)
    }

}