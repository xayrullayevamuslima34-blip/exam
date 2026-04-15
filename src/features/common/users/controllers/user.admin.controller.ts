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
import {UsersCreateAdminDto} from "../dtos/admin/user.create.admin.dto";
import {UsersUpdateAdminDto} from "../dtos/admin/user.update.admin.dto";
import {UsersAdminService} from "../services/user.admin.service";
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "../../../../config/multer.config";
import { type } from 'node:os';
import { UsersListAdminDto } from '../dtos/admin/user.list.admin.dto';

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/users")
export class UsersAdminController{

    constructor(private readonly userService: UsersAdminService) {}

    @ApiOkResponse({type: [UsersListAdminDto], isArray: true})
    @Get("list")
    async getAll(){
        return this.userService.getAll()
    }

    @ApiOkResponse({type: [UsersListAdminDto]})
    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.userService.getOne(id)
    }

    @UseInterceptors(FileInterceptor('profileImage', {storage: storageOptions}))
    @Post("create")
    async create(@Body() payload: UsersCreateAdminDto, @UploadedFile() profileImage: Express.Multer.File){
        return this.userService.create(payload, profileImage)
    }

    @UseInterceptors(FileInterceptor('profileImage', {storage: storageOptions}))
    @Patch("update/:id")
    async update(@Param(":id") id: string, @Body() payload: UsersUpdateAdminDto, @UploadedFile() profileImage: Express.Multer.File){
        return this.userService.update(id, payload, profileImage)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: string){
        return this.userService.delete(id)
    }

}