import {Allow, IsDateString, IsOptional, IsString, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Expose} from "class-transformer";

export class NewsUpdateAdminDto{
    @IsString()
    @MaxLength(256)
    @IsOptional()
    @Expose()
    @ApiProperty()
    title?: string;

    @IsDateString()
    @IsOptional()
    @ApiProperty()
    @Expose()
    date?: string;

    @Allow()
    @ApiProperty({type: "string", format: "binary"})
    image?: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    @Expose()
    content?: string;
}

