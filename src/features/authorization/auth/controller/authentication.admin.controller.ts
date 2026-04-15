import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UserCreateAdminDto } from '../dtos/user/admin/user.create.admin.dto';
import { UserLoginAdminDto } from '../dtos/user/admin/user.login.admin.dto';
import { AuthenticationAdminService } from '../services/user/authentication.admin.service';


@Controller('admin/auth')
export class AuthenticationAdminController {
    constructor(private service: AuthenticationAdminService) {}

    @Post('register')
    async create(@Body() payload: UserCreateAdminDto) {
        return this.service.create(payload);
    }

    @Post('login')
    async login(@Body() payload: UserLoginAdminDto) {
        return this.service.login(payload);
    }
}