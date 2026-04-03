import {Role} from "../../../../../core/enums/role.enum";
import {Allow, IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";
import {LoginType} from "../../../../../core/enums/login-type.enum";

export class UsersCreateAdminDto{
    @IsEnum(Role)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    role!: Role;

    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    @Expose()
    @ApiProperty()
    FullName!: string;

    @Allow()
    @ApiProperty({type: "string", format: "binary"})
    profileImage?: string;

    @IsString()
    @MaxLength(64)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    login!: string;


    @IsEnum(LoginType)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    loginType!: LoginType;

    @IsString()
    @MaxLength(128)
    @IsOptional()
    @Expose()
    @ApiProperty()
    password?: string;

    @IsString()
    @IsOptional()
    @Expose()
    @ApiProperty()
    birthDate?: string;


    @IsBoolean()
    @IsOptional()
    @Expose()
    @ApiProperty()
    isVerified?: boolean;

    @IsBoolean()
    @IsOptional()
    @Expose()
    @ApiProperty()
    isActive?: boolean;
}