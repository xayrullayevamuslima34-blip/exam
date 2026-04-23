import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PaginationFilters } from '../../../core/filters/pagination.filter';

export class NewsViewsFilter extends  PaginationFilters{
  @IsString()
  @IsOptional()
  @ApiProperty({required: false})
  search?: string;

}
