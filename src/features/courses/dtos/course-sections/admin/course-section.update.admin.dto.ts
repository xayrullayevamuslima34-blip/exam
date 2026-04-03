import {IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CourseSectionUpdateAdminDto{
    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    courseId?: number;

    @IsString()
    @MaxLength(256)
    @IsOptional()
    @Expose()
    @ApiProperty()
    title?: string;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    order?: number;

    @IsDateString()
    @IsOptional()
    @Expose()
    @ApiProperty()
    date?: string;
}