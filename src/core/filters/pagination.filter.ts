import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import {IsInt, IsNumber, IsString, MinLength} from "class-validator";

export class PaginationFilters{
  @ApiProperty({required:false})
  @IsInt()
  @Optional()
  @MinLength(1)
  page?:number

  @ApiProperty({required:false})
  @IsInt()
  @Optional()
  @MinLength(1)
  size?:number
}