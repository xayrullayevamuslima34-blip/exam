import {IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class UsersListPublicDto{
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
}