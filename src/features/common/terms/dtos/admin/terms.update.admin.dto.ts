import {IsOptional, IsString} from "class-validator";
import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class TermsUpdateAdminDto{
    @IsString()
    @IsOptional()
    @Expose()
    @ApiProperty()
    content?: string;
}