import {Allow, IsOptional, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class DifficultyUpdateAdminDto {
    @IsString()
    @MaxLength(32)
    @IsOptional()
    @Expose()
    @ApiProperty()
    title?: string;

    @Allow()
    @Expose()
    @ApiProperty({type: "string", format: "binary", required: false})
    icon?: string;
}