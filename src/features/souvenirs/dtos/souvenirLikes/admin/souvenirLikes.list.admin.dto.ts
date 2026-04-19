import { IsNumber } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SouvenirLikesListAdminDto {
  @IsNumber()
  @Expose()
  @ApiProperty()
  userId!: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  souvenirId!: number;
}