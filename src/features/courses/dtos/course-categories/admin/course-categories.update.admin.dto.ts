import {IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CourseCategoriesUpdateAdminDto{
    @IsString()
    @IsOptional()
    @MaxLength(64)
    @Expose()
    @ApiProperty()
    title?: string;
}