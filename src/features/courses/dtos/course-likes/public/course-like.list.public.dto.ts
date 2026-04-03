import {IsDateString, IsNotEmpty, IsNumber} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CourseLikeListPublicDto{
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    userId!: number;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    courseId!: number;

    @IsDateString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    date!: string;
}