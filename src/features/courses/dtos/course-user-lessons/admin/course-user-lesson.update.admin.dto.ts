import {Column} from "typeorm";
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CourseUserLessonUpdateAdminDto{
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