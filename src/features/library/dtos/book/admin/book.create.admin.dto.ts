import {Allow, IsDateString, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class BookCreateAdminDto{
    @IsNumber()
    @Expose()
    @ApiProperty()
    authorId!: number;

    @IsNumber()
    @Expose()
    @ApiProperty()
    categoryId!: number;

    @IsNumber()
    @Expose()
    @ApiProperty()
    languageId!: number;

    @IsNumber()
    @Expose()
    @ApiProperty()
    difficultyId!: number;

    @IsString()
    @MaxLength(120)
    @Expose()
    @ApiProperty()
    title!: string;

    @IsString()
    @Expose()
    @ApiProperty()
    description!: string;

    @Allow()
    @ApiProperty({type: "string", format: "binary"})
    image?: string;

    @IsNumber()
    @Expose()
    @ApiProperty()
    price!: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    newPrice?: number;

    @IsNumber()
    @Expose()
    @ApiProperty()
    pages!: number;

    @IsDateString()
    @Expose()
    @ApiProperty()
    pubDate!: string;
}