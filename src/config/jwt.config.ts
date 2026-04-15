import {JwtModuleOptions} from "@nestjs/jwt";
import { ConfigService } from '@nestjs/config';

export const jwtConfig = (configService: ConfigService): JwtModuleOptions => ({
    global: true,
    secret: configService.getOrThrow<string>('JWT_SECRET'),
    signOptions: {
        //@ts-ignore
        expiresIn: configService.getOrThrow<string>('JWT_EXPIRES_IN')
    },
})