import {IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";
import {MatchType} from "../../../../../core/enums/match-type.enum";
import {WinnerType} from "../../../../../core/enums/winner-type.enum";

export class MatchUpdateAdminDto{
    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    firstPlayer?: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    firstPlayerResult?: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    secondPlayer?: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    secondPlayerResult?: number;

    @IsEnum(MatchType)
    @IsOptional()
    @Expose()
    @ApiProperty()
    type?: MatchType;

    @IsNumber()
    @IsOptional()
    @Expose()
    @ApiProperty()
    moves?: number;

    @IsDateString()
    @IsOptional()
    @Expose()
    @ApiProperty()
    date?: number;

    @IsEnum(WinnerType)
    @IsOptional()
    @Expose()
    @ApiProperty()
    winner?: WinnerType;
}