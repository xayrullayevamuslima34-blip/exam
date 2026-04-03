import {IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class ReportCategoriesCreateAdminDto{
    @IsString()
    @MaxLength(64)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    title!: string;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    order?: number;
}