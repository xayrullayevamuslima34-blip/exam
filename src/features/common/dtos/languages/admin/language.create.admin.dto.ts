import {IsNotEmpty, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class LanguageCreateAdminDto{
    @IsString()
    @MaxLength(32)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    title!: string;

    @IsString()
    @MaxLength(2)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    code!: string;
}