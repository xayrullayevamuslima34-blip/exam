import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { PaginationFilters } from '../../../core/filters/pagination.filter';

export class NewsFilter extends  PaginationFilters{
  @IsString()
  @IsOptional()
  @ApiProperty({required: false})
  search?: string;

}
