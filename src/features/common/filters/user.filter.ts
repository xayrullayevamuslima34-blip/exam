import { IsOptional, IsString } from 'class-validator';
import { PaginationFilters } from '../../../core/filters/pagination.filter';
import { ApiProperty } from '@nestjs/swagger';

export class UserFilter extends PaginationFilters{
  @IsString()
  @IsOptional()
  @ApiProperty({required: false})
  search?: string;
}