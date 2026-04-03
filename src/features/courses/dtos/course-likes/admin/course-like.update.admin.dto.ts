import {IsDateString, IsNumber, IsOptional} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CourseLikeUpdateAdminDto{
    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    userId?: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    courseId?: number;

    @IsDateString()
    @IsOptional()
    @Expose()
    @ApiProperty()
    date?: string;
}