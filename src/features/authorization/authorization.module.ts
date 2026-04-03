import {Module} from "@nestjs/common";
import {AuthenticationPublicController} from "./auth/controller/authentication.public.controller";
import {AuthenticationPublicService} from "./auth/services/user/authentication.public.service";
import {OtpCodePublicService} from "./otp-codes/service/otp-code.public.service";
import {JwtModule} from "@nestjs/jwt";
import {jwtConfig} from "../../config/jwt.config";
import {AuthenticationAdminController} from "./auth/controller/authentication.admin.controller";
import {AuthenticationAdminService} from "./auth/services/user/authentication.admin.service";

@Module({
    imports: [
        JwtModule.register(jwtConfig)
    ],

    controllers: [AuthenticationAdminController, AuthenticationPublicController],

    providers: [AuthenticationAdminService ,AuthenticationPublicService,
                OtpCodePublicService]
})

export  class AuthorizationModule{}