import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post, UploadedFile,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {CountriesAdminService} from "../services/countries.admin.service";
import {CountryUpdateAdminDto} from "../dtos/admin/country.update.admin.dto";
import {CountryCreateAdminDto} from "../dtos/admin/country.create.admin.dto";
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "../../../../config/multer.config";
import { CountryListAdminDto } from '../dtos/admin/country.list.admin.dto';

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller("admin/countries")
export class CountriesAdminController{

    constructor(private readonly countryService: CountriesAdminService) {}

    @ApiOkResponse({type: [CountryListAdminDto], isArray: true})
    @Get("list")
    async getAll(){
        return this.countryService.getAll()
    }

    @ApiOkResponse({type: [CountryListAdminDto]})
    @Get(":id")
    async getOne(@Param("id") id: string){
        return this.countryService.getOne(id)
    }

    @UseInterceptors(FileInterceptor('flag', {storage: storageOptions}))
    @Post("create")
    async create(@Body() payload: CountryCreateAdminDto, @UploadedFile() flag: Express.Multer.File){
        return this.countryService.create(payload, flag)
    }

    @UseInterceptors(FileInterceptor('flag', {storage: storageOptions}))
    @Patch("update/:id")
    async update(@Param("id") id: string, @Body() payload: CountryUpdateAdminDto, @UploadedFile() flag: Express.Multer.File){
        return this.countryService.update(id, payload, flag)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: string){
        return this.countryService.delete(id)
    }

}