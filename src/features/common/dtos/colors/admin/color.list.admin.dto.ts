import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { BaseModel } from '../../../../../core/base-module';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ColorListAdminDto {
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