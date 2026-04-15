import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { NewsListPublicDto } from '../dtos/news/public/news.list.public.dto';

export class PaginationResultNewsDto {
  @ApiProperty()
  @Expose()
  totalPages!: number;

  @ApiProperty()
  @Expose()
  currentPage!: number;

  @ApiProperty()
  @Expose()
  nextPage?: number;

  @ApiProperty()
  @Expose()
  totalCount!: number;

  @ApiProperty({type: () => NewsListPublicDto})
  @Expose()
  @Type(() => NewsListPublicDto)
  data!: NewsListPublicDto[];
}