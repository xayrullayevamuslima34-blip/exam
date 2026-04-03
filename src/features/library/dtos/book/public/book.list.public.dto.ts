import {IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class BookListPublicDto{
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

    @MaxLength(128)
    @IsOptional()
    @Expose()
    @ApiProperty()
    image?: string;

    @IsString()
    @Expose()
    @ApiProperty()
    title!: string;

    @IsNumber()
    @Expose()
    @ApiProperty()
    price!: number;

    @IsNumber()
    @Expose()
    @ApiProperty()
    rating!: number;

    @IsNumber()
    @Expose()
    @ApiProperty()
    pages!: number;
}