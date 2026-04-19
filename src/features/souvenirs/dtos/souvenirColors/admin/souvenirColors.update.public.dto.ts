import { IsNumber, IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SouvenirColorsUpdateAdminDto{
  @IsNumber()
  @IsOptional()
  @Expose()
  @ApiProperty()
  souvenirId?: number;

  @IsNumber()
  @IsOptional()
  @Expose()
  @ApiProperty()
  colorId?: number;
}