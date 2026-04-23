import { IsNumber, IsOptional } from 'class-validator';
import { PaginationFilters } from '../../../core/filters/pagination.filter';
import { ApiProperty } from '@nestjs/swagger';

export class MatchFilter extends PaginationFilters {
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  search?: number;


  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  secondPlayer?: number;
}