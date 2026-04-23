import { ApiProperty } from "@nestjs/swagger";
import { Type } from 'class-transformer';
import {IsInt, IsOptional} from "class-validator";

export class PaginationFilters{
  @ApiProperty({required:false})
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  page?:number

  @ApiProperty({required:false})
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  size?:number
}