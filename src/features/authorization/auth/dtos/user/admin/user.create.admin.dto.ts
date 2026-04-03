import { ApiProperty } from "@nestjs/swagger";
import {LoginType} from "../../../../../../core/enums/login-type.enum";
import {IsEnum, IsString, MaxLength} from "class-validator";

export class UserCreateAdminDto{
    @IsString()
    @MaxLength(64)
    @ApiProperty()
    fullName!: string;

    @IsString()
    @MaxLength(64)
    @ApiProperty()
    login!: string;

    @IsEnum(LoginType)
    @ApiProperty()
    loginType!: LoginType;

    @IsString()
    @MaxLength(32)
    @ApiProperty()
    password!: string;
}