import {IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class NewsViewsUpdateAdminDto{
    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    userId?: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    newsId?: number;

    @IsDateString()
    @IsOptional()
    @Expose()
    @ApiProperty()
    firstDate?: string;

    @IsDateString()
    @IsOptional()
    @Expose()
    @ApiProperty()
    lastDate?: string;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    count?: number;
}