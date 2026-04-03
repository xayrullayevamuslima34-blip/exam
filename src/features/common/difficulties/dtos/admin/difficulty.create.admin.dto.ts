import {Allow, IsNotEmpty, IsString, MaxLength} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class DifficultyCreateAdminDto {
    @IsString()
    @MaxLength(32)
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    title!: string;

    @Allow()
    @Expose()
    @ApiProperty({type: "string", format: "binary"})
    icon!: string;
}