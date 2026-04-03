import {IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, Min} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class BookReviewUpdateAdminDto{
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Max(5)
    @Expose()
    @ApiProperty()
    rating?: number;

    @IsString()
    @IsOptional()
    @MaxLength(512)
    @Expose()
    @ApiProperty()
    comment?: string;

    @IsDateString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    date?: string
}