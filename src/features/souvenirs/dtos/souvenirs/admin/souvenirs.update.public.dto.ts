import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SouvenirsUpdateAdminDto {
  @IsString()
  @MaxLength(128)
  @IsOptional()
  @Expose()
  @ApiProperty()
  title?: string;

  @IsString()
  @IsOptional()
  @Expose()
  @ApiProperty()
  description?: string;

  @IsNumber()
  @IsOptional()
  @Expose()
  @ApiProperty()
  price?: number;
}