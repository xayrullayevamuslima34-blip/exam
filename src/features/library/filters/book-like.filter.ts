import { IsNotEmpty, IsNumber} from 'class-validator';
import { PaginationFilters } from '../../../core/filters/pagination.filter';
import { ApiProperty } from '@nestjs/swagger';

export class BookLikeFilter extends PaginationFilters{
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({required:false})
  userId!: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({required:false})
  bookId!: number;
}