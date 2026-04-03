import {IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, Min} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class BookReviewCreateAdminDto{
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    userId!: number;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    bookId!: number;

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Max(5)
    @Expose()
    @ApiProperty()
    rating!: number;

    @IsString()
    @IsOptional()
    @MaxLength(512)
    @Expose()
    @ApiProperty()
    comment?: string;

    @IsDateString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    date!: string
}