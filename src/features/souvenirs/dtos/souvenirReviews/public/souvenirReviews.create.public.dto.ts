import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SouvenirReviewsCreatePublicDto {
  @IsNumber()
  @Expose()
  @ApiProperty()
  userId!: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  souvenirId!: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  rating!: number;

  @IsString()
  @MaxLength(512)
  @IsOptional()
  @Expose()
  @ApiProperty()
  comment?: string;
}