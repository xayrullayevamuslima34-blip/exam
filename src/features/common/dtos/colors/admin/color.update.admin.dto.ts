import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { BaseModel } from '../../../../../core/base-module';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ColorUpdateAdminDto {
  @IsString()
  @IsOptional()
  @MaxLength(28)
  @Expose()
  @ApiProperty()
  title?: string;

  @IsString()
  @IsOptional()
  @MaxLength(10)
  @Expose()
  @ApiProperty()
  color?: string;
}