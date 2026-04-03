import {IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class PurchasedCourseUpdatePublicDto {
    @IsBoolean()
    @IsOptional()
    @Expose()
    @ApiProperty()
    isCompleted?: boolean;

    @IsDateString()
    @IsOptional()
    @Expose()
    @ApiProperty()
    date?: string;
}