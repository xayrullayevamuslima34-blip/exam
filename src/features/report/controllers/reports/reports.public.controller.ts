import {Controller, Post, UseGuards} from "@nestjs/common";
import {ReportsPublicService} from "../../services/reports/reports.public.service";
import {ReportsCreatePublicDto} from "../../dtos/reports/public/reports.create.public.dto";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthenticationGuard} from "../../../../core/guards/authentication.guard";
import {RolesGuard} from "../../../../core/guards/role.guard";
import {Roles} from "../../../../core/decorators/roles.decorator";
import {Role} from "../../../../core/enums/role.enum";

@ApiBearerAuth()
@UseGuards(AuthenticationGuard, RolesGuard)
@Roles(Role.User)
@Controller("public/reports")
export class ReportsPublicController{

    constructor(private readonly reportsService: ReportsPublicService) {}

    @Post("create")
    async create(userId: number, payload: ReportsCreatePublicDto) {
        return this.reportsService.create(userId, payload)
    }

}