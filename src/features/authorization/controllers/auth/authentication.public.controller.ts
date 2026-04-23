import {Body, Controller, Post, UseGuards} from '@nestjs/common';
import {AuthenticationPublicService} from "../../services/auth/authentication.public.service";
import {SignUpDto} from "../../dtos/auth/public/sign-up.dto";
import {SignInDto} from "../../dtos/auth/public/sign-in.dto";
import {VerifyOtpDto} from "../../dtos/auth/public/verify-otp.dto";
import {ResendOtpDto} from "../../dtos/auth/public/resend-otp.dto";
import {SetPasswordDto} from "../../dtos/auth/public/set-password.dto";

@Controller('auth')
export class AuthenticationPublicController{
    constructor(private readonly authService: AuthenticationPublicService) {}

    @Post('sign-up')
    async signUp(@Body() payload: SignUpDto) {
        return await this.authService.signUp(payload);
    }

    @Post('sign-in')
    async signIn(@Body() payload: SignInDto) {
        return await this.authService.signIn(payload);
    }

    @Post('verify-otp')
    async verifyOtp(@Body() payload: VerifyOtpDto) {
        return await this.authService.verifyOtp(payload);
    }

    @Post('resend-otp')
    async resendOtp(@Body() payload: ResendOtpDto) {
        return await this.authService.resendOtp(payload);
    }

    @Post('set-password')
    async setPassword(@Body() payload: SetPasswordDto) {
        return await this.authService.setPassword(payload);
    }
}