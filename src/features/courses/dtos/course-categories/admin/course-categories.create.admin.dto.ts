import {IsNotEmpty, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CourseCategoriesCreateAdminDto{
    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    @Expose()
    @ApiProperty()
    title!: string;
}