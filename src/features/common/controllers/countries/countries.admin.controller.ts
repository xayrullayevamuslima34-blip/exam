import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post, Query, UploadedFile,
    UseInterceptors
} from "@nestjs/common";
import {CountriesAdminService} from "../../services/countries/countries.admin.service";
import {CountryUpdateAdminDto} from "../../dtos/countries/admin/country.update.admin.dto";
import {CountryCreateAdminDto} from "../../dtos/countries/admin/country.create.admin.dto";
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "../../../../config/multer.config";
import { CountryListAdminDto } from '../../dtos/countries/admin/country.list.admin.dto';
import { CountriesFilter } from '../../filters/countries.filter';

@ApiBearerAuth()
@Roles(Role.Admin)
@Controller("admin/countries")
export class CountriesAdminController{

    constructor(private readonly countryService: CountriesAdminService) {}

    @ApiOkResponse({type: [CountryListAdminDto], isArray: true})
    @Get("list")
    async getAll(@Query() filter: CountriesFilter){
        return this.countryService.getAll(filter)
    }

    @ApiOkResponse({type: [CountryListAdminDto]})
    @Get(":id")
    async getOne(@Param("id") id: number){
        return this.countryService.getOne(id)
    }

    @UseInterceptors(FileInterceptor('flag', {storage: storageOptions}))
    @Post("create")
    async create(@Body() payload: CountryCreateAdminDto, @UploadedFile() flag: Express.Multer.File){
        return this.countryService.create(payload, flag)
    }

    @UseInterceptors(FileInterceptor('flag', {storage: storageOptions}))
    @Patch("update/:id")
    async update(@Param("id") id: number, @Body() payload: CountryUpdateAdminDto, @UploadedFile() flag: Express.Multer.File){
        return this.countryService.update(id, payload, flag)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number){
        return this.countryService.delete(id)
    }

}