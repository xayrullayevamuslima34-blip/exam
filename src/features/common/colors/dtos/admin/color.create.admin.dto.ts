import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ColorCreateAdminDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(28)
  @Expose()
  @ApiProperty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  @Expose()
  @ApiProperty()
  color!: string;
}