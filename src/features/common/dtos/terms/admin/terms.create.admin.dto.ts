import {IsNotEmpty, IsString} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class TermsCreateAdminDto{
    @IsString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty()
    content!: string;
}