import { Allow, IsNumber, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SouvenirImagesListAdminDto {
  @IsNumber()
  @Expose()
  @ApiProperty()
  souvenirId!: number;

  @Allow()
  @Expose()
  @MaxLength(128)
  @ApiProperty({type: 'string', format: 'binary'})
  image: string;
}