import {IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class LanguageListAdminDto{
    @IsString()
    @MaxLength(32)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    title!: string;

    @IsString()
    @MaxLength(2)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    code!: string;

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