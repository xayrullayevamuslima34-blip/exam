
import {IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CourseListPublicDto{
    @IsString()
    @IsOptional()
    @MaxLength(128)
    @Expose()
    @ApiProperty()
    title?: string;

    @IsString()
    @IsOptional()
    @MaxLength(128)
    @Expose()
    @ApiProperty()
    image?: string;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    price?: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    newPrice?: number;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    reviewsCount!: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    rating?: number;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    sectionsCount!: number;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    lessonsCount!: number;

    @Expose()
    @ApiProperty()
    isLiked!: boolean;
}