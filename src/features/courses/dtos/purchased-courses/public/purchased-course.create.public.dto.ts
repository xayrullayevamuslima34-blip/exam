import {IsBoolean, IsDateString, IsNotEmpty, IsNumber} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class PurchasedCourseCreatePublicDto {
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

    @IsBoolean()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    isCompleted!: boolean;

    @IsDateString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    date!: string;
}