import {IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class PurchasedCourseListAdminDto{
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
}