import {Column} from "typeorm";
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CourseUserLessonListPublicDto{
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    userId!: number;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    courseLessonId!: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    stoppedAt?: number;

    @IsBoolean()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    isCompleted!: boolean;
}