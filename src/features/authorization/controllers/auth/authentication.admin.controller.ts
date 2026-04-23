import { Body, Controller, Post} from '@nestjs/common';
import { UserCreateAdminDto } from '../../dtos/auth/admin/user.create.admin.dto';
import { UserLoginAdminDto } from '../../dtos/auth/admin/user.login.admin.dto';
import { AuthenticationAdminService } from '../../services/auth/authentication.admin.service';


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