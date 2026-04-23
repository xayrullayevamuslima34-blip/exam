import {Allow, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CountryUpdateAdminDto{
    @IsString()
    @MaxLength(64)
    @IsOptional()
    @Expose()
    @ApiProperty()
    title?: string;

   @Allow()
    @IsOptional()
    @Expose()
    @ApiProperty({type: "string", format: "binary"})
    flag?: string;
}