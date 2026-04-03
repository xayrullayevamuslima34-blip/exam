import {IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CourseLikeCreatePublicDto{
    @IsNumber()
    @ApiProperty()
    courseId!: number;
}