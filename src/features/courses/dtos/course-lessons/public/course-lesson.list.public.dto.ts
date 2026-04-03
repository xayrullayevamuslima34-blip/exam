import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CourseLessonListPublicDto{
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    courseId!: number;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    courseSectionId!: number;

    @IsString()
    @MaxLength(128)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    title!: string;

    @IsNotEmpty()
    @IsString()
    thumbnail!: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(256)
    @Expose()
    @ApiProperty()
    video!: string;

    @IsOptional()
    @IsNumber()
    order?: number;

    @IsNotEmpty()
    @IsBoolean()
    isFree!: boolean;
}