import {IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CourseCategoriesListAdminDto{
    @IsString()
    @IsOptional()
    @MaxLength(64)
    @Expose()
    @ApiProperty()
    title?: string;

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