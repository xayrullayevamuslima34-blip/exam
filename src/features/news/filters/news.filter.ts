import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class NewsFilter{
  @IsString()
  @IsOptional()
  @ApiProperty({required: false})
  search?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({required: false})
  @Type(() => Number)
  page?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({required: false})
  @Type(() => Number)
  size?: number;
}
