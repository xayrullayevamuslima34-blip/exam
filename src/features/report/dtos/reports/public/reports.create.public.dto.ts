import {IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";
import {ReportType} from "../../../../../core/enums/report-type.enum";

export class ReportsCreatePublicDto {
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    reportCategoryId!: number;

    @IsEnum(ReportType)
    @ApiProperty()
    target!: ReportType;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    targetId!: number;

    @IsString()
    @IsOptional()
    @Expose()
    @ApiProperty()
    description?: string;
}