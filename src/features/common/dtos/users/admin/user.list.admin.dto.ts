import {Role} from "../../../../../core/enums/role.enum";
import {IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";
import {LoginType} from "../../../../../core/enums/login-type.enum";

export class UsersListAdminDto{
    @IsEnum(Role)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    role!: Role;

    @IsString()
    @MaxLength(64)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    fullName!: string;

    @IsString()
    @IsOptional()
    @MaxLength(128)
    @Expose()
    @ApiProperty()
    profileImage?: string;

    @IsString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    login!: string;

    @IsEnum(LoginType)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    loginType!: string;

    @IsString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    password!: string;

    @IsDateString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    birthDate!: string;

    @IsBoolean()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    isVerified!: boolean;

    @IsBoolean()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    isActive!: boolean;

    @IsString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    createdAt!: string;

    @IsString()
    @IsOptional()
    @Expose()
    @ApiProperty()
    updatedAt?: string;
}