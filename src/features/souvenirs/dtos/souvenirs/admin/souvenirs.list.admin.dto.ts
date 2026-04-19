import { IsNumber, IsString, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SouvenirsListAdminDto {
  @IsString()
  @MaxLength(128)
  @Expose()
  @ApiProperty()
  title!: string;

  @IsString()
  @Expose()
  @ApiProperty()
  description!: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  price!: number;
}