import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CourseFilter{
  @IsString()
  @IsOptional()
  @ApiProperty()
  search?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  @Type(() => Number)
  page?: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  @Type(() => Number)
  size?: number;
}