
import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { CartItemType } from '../../../../../core/enums/cartItem-type.enum';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CartItemUpdatePublicDto {
  @IsOptional()
  @IsEnum(CartItemType)
  target?: CartItemType;

  @IsNumber()
  @IsOptional()
  @Expose()
  @ApiProperty()
  targetId?: number;

  @IsNumber()
  @IsOptional()
  @Expose()
  @ApiProperty()
  quantity?: number;
}