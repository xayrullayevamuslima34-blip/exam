import { Allow, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SouvenirImagesUpdateAdminDto {
  @IsNumber()
  @Expose()
  @IsOptional()
  @ApiProperty()
  souvenirId?: number;

  @Allow()
  @Expose()
  @IsOptional()
  @MaxLength(128)
  @ApiProperty({type: 'string', format: 'binary'})
  image?: string;
}