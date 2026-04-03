import {IsDateString, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CourseReviewUpdateAdminDto{
    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    rating?: number;

    @IsString()
    @MaxLength(512)
    @IsOptional()
    @Expose()
    @ApiProperty()
    comment?: string;

    @IsDateString()
    @IsOptional()
    @Expose()
    @ApiProperty()
    date?: string;
}