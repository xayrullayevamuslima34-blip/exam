import {IsDateString, IsEnum, IsNotEmpty, IsNumber} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";
import {MatchType} from "../../../../../core/enums/match-type.enum";
import {WinnerType} from "../../../../../core/enums/winner-type.enum";

export class MatchListAdminDto{
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    firstPlayer!: number;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    firstPlayerResult!: number;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    secondPlayer!: number;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    secondPlayerResult!: number;

    @IsEnum(MatchType)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    type!: MatchType;

    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    moves!: number;

    @IsDateString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    date!: number;

    @IsEnum(WinnerType)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    winner!: WinnerType;
}