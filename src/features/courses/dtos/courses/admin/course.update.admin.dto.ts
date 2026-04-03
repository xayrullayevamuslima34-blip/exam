import {Allow, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CourseUpdateAdminDto{
    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    authorId!: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    categoryId?: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    languageId?: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    difficultyId?: number;

    @IsString()
    @IsOptional()
    @MaxLength(128)
    @Expose()
    @ApiProperty()
    title?: string;

    @Allow()
    @ApiProperty({type: "string", format: "binary"})
    image!: string;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    price?: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    newPrice?: number;
}