import { Module } from '@nestjs/common';
import { AuthenticationPublicController } from './controllers/auth/authentication.public.controller';
import { AuthenticationPublicService } from './services/auth/authentication.public.service';
import { OtpCodePublicService } from './services/otp-codes/otp-code.public.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from '../../config/jwt.config';
import { AuthenticationAdminController } from './controllers/auth/authentication.admin.controller';
import { AuthenticationAdminService } from './services/auth/authentication.admin.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [AuthenticationAdminController, AuthenticationPublicController],

  providers: [AuthenticationAdminService, AuthenticationPublicService,
    OtpCodePublicService],
})

export class AuthorizationModule {
}