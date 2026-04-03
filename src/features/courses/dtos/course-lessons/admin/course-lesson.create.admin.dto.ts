import {Allow, IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CourseLessonCreateAdminDto{
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

    @IsString()
    @IsOptional()
    @Expose()
    @ApiProperty()
    content?: string;

    @IsString()
    @MaxLength(128)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    thumbnail!: string;

    @Allow()
    @ApiProperty({type: "string", format: "binary"})
    video!: string;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    order?: number;

    @IsDateString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    date!: string;

    @IsBoolean()
    @IsOptional()
    @Expose()
    @ApiProperty()
    isFree?: boolean;
}