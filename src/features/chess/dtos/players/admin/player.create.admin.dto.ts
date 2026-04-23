import {Allow, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class PlayerCreateAdminDto{
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    countryId!: number;

    @IsString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    fullName!: string;

    @Allow()
    @ApiProperty({type: "string", format: "binary"})
    image?: string;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    classic?: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    rapid?: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    blitz?: number;
}