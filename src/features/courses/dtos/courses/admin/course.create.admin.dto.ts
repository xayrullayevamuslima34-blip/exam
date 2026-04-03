import {Allow, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CourseCreateAdminDto{
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    authorId!: number;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    categoryId!: number;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    languageId!: number;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    difficultyId!: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    @Expose()
    @ApiProperty()
    title!: string;

    @Allow()
    @ApiProperty({type: "string", format: "binary"})
    image!: string;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    price!: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    newPrice?: number;
}