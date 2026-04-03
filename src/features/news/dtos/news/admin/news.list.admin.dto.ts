import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";
import {IsDateString, IsNotEmpty, IsNumber, IsString, MaxLength} from "class-validator";


export class NewsListAdminDto{
    @IsNumber()
    @Expose()
    @ApiProperty()
    id!: number;

    @IsString()
    @MaxLength(256)
    @Expose()
    @ApiProperty()
    title!: string;

    @IsString()
    @MaxLength(128)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    image!: string;

    @IsDateString()
    @Expose()
    @ApiProperty()
    date!: string;
}

