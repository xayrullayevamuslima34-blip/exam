import {IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CourseReviewListPublicDto{
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    rating!: number;

    @IsString()
    @MaxLength(512)
    @IsOptional()
    @Expose()
    @ApiProperty()
    comment?: string;

    @IsDateString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    date!: string;
}