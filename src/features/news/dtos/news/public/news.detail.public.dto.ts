import {Expose} from "class-transformer"
import {IsOptional} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class NewsDetailPublicDto{
    @Expose()
    @ApiProperty()
    id!: number;

    @Expose()
    @ApiProperty()
    title!: string;

    @Expose()
    @ApiProperty()
    date!: string;

    @Expose()
    @ApiProperty()
    content!: string;
}

