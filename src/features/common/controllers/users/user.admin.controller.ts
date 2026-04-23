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
    UseInterceptors
} from "@nestjs/common";
import {UsersCreateAdminDto} from "../../dtos/users/admin/user.create.admin.dto";
import {UsersUpdateAdminDto} from "../../dtos/users/admin/user.update.admin.dto";
import {UsersAdminService} from "../../services/users/user.admin.service";
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "../../../../config/multer.config";
import { UsersListAdminDto } from '../../dtos/users/admin/user.list.admin.dto';
import { UserFilter } from '../../filters/user.filter';

@ApiBearerAuth()
@Roles(Role.Admin)
@Controller("admin/users")
export class UsersAdminController{

    constructor(private readonly userService: UsersAdminService) {}

    @ApiOkResponse({type: [UsersListAdminDto], isArray: true})
    @Get("list")
    async getAll(@Query() filter: UserFilter){
        return this.userService.getAll(filter)
    }

    @ApiOkResponse({type: [UsersListAdminDto]})
    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.userService.getOne(id)
    }

    @UseInterceptors(FileInterceptor('profileImage', {storage: storageOptions}))
    @Post("create")
    async create(@Body() payload: UsersCreateAdminDto, @UploadedFile() profileImage: Express.Multer.File){
        return this.userService.create(payload, profileImage)
    }

    @UseInterceptors(FileInterceptor('profileImage', {storage: storageOptions}))
    @Patch("update/:id")
    async update(@Param(":id") id: number, @Body() payload: UsersUpdateAdminDto, @UploadedFile() profileImage: Express.Multer.File){
        return this.userService.update(id, payload, profileImage)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number){
        return this.userService.delete(id)
    }

}