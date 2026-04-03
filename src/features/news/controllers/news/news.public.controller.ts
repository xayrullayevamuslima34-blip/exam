import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {ApiOkResponse} from "@nestjs/swagger";
import {NewsListAdminDto} from "../../dtos/news/admin/news.list.admin.dto";
import {NewsPublicService} from "../../services/news/news.public.service";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";

@UseGuards(AuthenticationGuard, RolesGuard)
@Controller('public/news')
export class NewsPublicController {

    constructor(private service: NewsPublicService) {
    }

    @Get()
    @ApiOkResponse({type: () => NewsListAdminDto, isArray: true})
    async getAll(){
       return await this.service.getAll()
    }

    @Get(':id')
    async getOne(@Param('id') id: number){
       return await this.service.getOne(id)
    }

}