import {
    Body,
    Controller,
    Post,
    Get,
    Param,
    Delete,
    Patch,
    UseGuards,
    UseInterceptors,
    UploadedFile, Query,
} from '@nestjs/common';
import {NewsCreateAdminDto} from "../../dtos/news/admin/news.create.admin.dto";
import {NewsUpdateAdminDto} from "../../dtos/news/admin/news.update.admin.dto";
import {ApiBearerAuth, ApiOkResponse} from "@nestjs/swagger";
import {NewsListAdminDto} from "../../dtos/news/admin/news.list.admin.dto";
import {NewsAdminService} from "../../services/news/news.admin.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "../../../../config/multer.config";
import { NewsFilter } from '../../filters/news.filter';

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.Admin)
@Controller('admin/news')
export class NewsAdminController {

    constructor(private service: NewsAdminService) {
    }

    @Get()
    @ApiOkResponse({type: NewsListAdminDto, isArray: true})
    async getAll(@Query() filters: NewsFilter){
        return await this.service.getAll(filters)
    }

    @ApiOkResponse({type: [NewsListAdminDto]})
    @Get(':id')
    async getOne(@Param('id') id: number){
        return await this.service.getOne(id)
    }

    @UseInterceptors(FileInterceptor("image", {storage: storageOptions}))
    @Post()
    async create(@Body() payload: NewsCreateAdminDto, @UploadedFile() image: Express.Multer.File){
        return await this.service.create(payload, image)
    }

    @UseInterceptors(FileInterceptor('image', {storage: storageOptions}))
    @Patch(':id')
    async update(@Param('id') id: number, @Body() payload: NewsUpdateAdminDto, @UploadedFile() image: Express.Multer.File){
        return await this.service.update(id, payload, image)
    }

    @Delete(':id')
    async delete(@Param('id') id: number){
        return await this.service.delete(id)
    }
}