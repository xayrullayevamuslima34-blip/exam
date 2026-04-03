import {Allow, IsDateString, IsString, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Expose} from "class-transformer";

export class NewsCreateAdminDto{
    @IsString()
    @MaxLength(256)
    @Expose()
    @ApiProperty()
    title!: string;

    @IsDateString()
    @ApiProperty()
    @Expose()
    date!: string;

    @Allow()
    @ApiProperty({type: "string", format: "binary"})
    image!: string;

    @IsString()
    @ApiProperty()
    @Expose()
    content!: string;
}

