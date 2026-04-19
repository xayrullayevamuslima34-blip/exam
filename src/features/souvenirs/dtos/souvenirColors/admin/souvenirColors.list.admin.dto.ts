import { IsNumber } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SouvenirColorsListAdminDto{
  @IsNumber()
  @Expose()
  @ApiProperty()
  souvenirId!: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  colorId!: number;
}