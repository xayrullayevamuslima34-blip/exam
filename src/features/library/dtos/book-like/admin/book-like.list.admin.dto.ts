import {IsDateString, IsNotEmpty, IsNumber, IsString} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class BookLikeListAdminDto{
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

    @IsDateString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    date!: string;

    @IsString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    createdAt: string;
}
