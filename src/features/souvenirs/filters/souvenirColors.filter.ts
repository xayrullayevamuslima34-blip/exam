import { IsNumber, IsOptional, IsString } from 'class-validator';
import { PaginationFilters } from '../../../core/filters/pagination.filter';
import { ApiProperty } from '@nestjs/swagger';

export class SouvenirColorsFilter extends PaginationFilters{
  @IsNumber()
  @IsOptional()
  @ApiProperty({required:false})
  souvenirId?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({required:false})
  colorId?: number;
}