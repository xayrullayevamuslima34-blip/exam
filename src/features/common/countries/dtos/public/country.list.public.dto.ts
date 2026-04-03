import {IsNotEmpty, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CountryListPublicDto{
    @IsString()
    @MaxLength(64)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    title!: string;

    @IsString()
    @MaxLength(128)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    flag!: string;
}