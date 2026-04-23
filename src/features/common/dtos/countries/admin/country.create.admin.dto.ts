import {Allow, IsNotEmpty, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CountryCreateAdminDto{
    @IsString()
    @MaxLength(64)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    title!: string;

    @Allow()
    @IsNotEmpty()
    @Expose()
    @ApiProperty({type: "string", format: "binary"})
    flag!: string;
}