import {IsDateString, IsNotEmpty, IsNumber, IsString} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class NewsViewsListAdminDto{
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    userId!: number;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    newsId!: number;

    @IsDateString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    firstDate!: string;

    @IsDateString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    lastDate!: string;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    count!: number;
}