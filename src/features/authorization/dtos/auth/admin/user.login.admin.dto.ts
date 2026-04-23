import {IsString, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UserLoginAdminDto{
    @IsString()
    @MaxLength(64)
    @ApiProperty()
    login!: string;

    @IsString()
    @MaxLength(32)
    @ApiProperty()
    password!: string;
}