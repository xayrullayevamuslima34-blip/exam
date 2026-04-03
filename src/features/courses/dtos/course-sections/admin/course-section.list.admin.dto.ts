import {IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CourseSectionListAdminDto{
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    courseId!: number;

    @IsString()
    @MaxLength(256)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    title!: string;

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
}