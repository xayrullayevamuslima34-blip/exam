import {IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class ReportCategoriesUpdateAdminDto{
    @IsString()
    @MaxLength(64)
    @IsOptional()
    @Expose()
    @ApiProperty()
    title?: string;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    order?: number;
}