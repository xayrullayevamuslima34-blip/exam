import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { CourseListPublicDto } from '../dtos/courses/public/course.list.public.dto';

export class PaginationResultCourseDto {
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

  @ApiProperty({type: () => CourseListPublicDto})
  @Expose()
  @Type(() => CourseListPublicDto)
  data!: CourseListPublicDto[];
}