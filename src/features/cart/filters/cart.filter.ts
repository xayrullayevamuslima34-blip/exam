import { IsEnum, IsNumber, IsOptional} from 'class-validator';
import { PaginationFilters } from '../../../core/filters/pagination.filter';
import { ApiProperty } from '@nestjs/swagger';
import { CartItemType } from '../../../core/enums/cartItem-type.enum';

export class CartFilter extends PaginationFilters{
  @IsOptional()
  @IsNumber()
  @ApiProperty({required: false})
  userId?: number;

  @IsEnum(CartItemType)
  @IsOptional()
  @ApiProperty({required: false})
  target?: CartItemType;
}