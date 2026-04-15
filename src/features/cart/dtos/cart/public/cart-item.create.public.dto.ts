
import { IsEnum, IsNumber } from 'class-validator';
import { CartItemType } from '../../../../../core/enums/cartItem-type.enum';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CartItemCreatePublicDto {
  @IsEnum(CartItemType)
  target!: CartItemType;

  @IsNumber()
  @Expose()
  @ApiProperty()
  targetId!: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  quantity!: number;
}