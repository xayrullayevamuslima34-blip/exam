import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CourseListAdminDto{
    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    authorId!: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    categoryId?: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    languageId?: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    difficultyId?: number;

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

    @IsBoolean()
    @Expose()
    @ApiProperty()
    isLiked!: boolean;
}