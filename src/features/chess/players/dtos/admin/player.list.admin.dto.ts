import {Allow, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class PlayerListAdminDto{
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

    @IsString()
    @MaxLength(128)
    @IsOptional()
    @ApiProperty()
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