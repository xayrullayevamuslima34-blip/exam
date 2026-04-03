import {IsDateString, IsEnum, IsNotEmpty, IsNumber, IsString} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";
import {ReportType} from "../../../../../core/enums/report-type.enum";

export class ReportsListAdminDto{
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    reportCategoryId!: number;

    @IsEnum(ReportType)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    target!: ReportType;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    targetId!: number;

    @IsString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    description!: string;

    @IsDateString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    date!: string;
}