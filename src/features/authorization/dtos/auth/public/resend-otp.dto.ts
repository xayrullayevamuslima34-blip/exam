import {IsEnum, IsString, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {LoginType} from "../../../../../core/enums/login-type.enum";

export class ResendOtpDto{
    @IsString()
    @MaxLength(64)
    @ApiProperty()
    login!: string;

    @IsEnum(LoginType)
    @ApiProperty()
    loginType!: LoginType;
}