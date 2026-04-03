import {IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class BookCategoryListPublicDto{
    @IsString()
    @MaxLength(64)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    title!: string;
}