import { IsNumber, IsOptional } from 'class-validator';
import { PaginationFilters } from '../../../core/filters/pagination.filter';
import { ApiProperty } from '@nestjs/swagger';

export class CourseUserLessonsFilter extends PaginationFilters {
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  userId!: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  courseLessonId!: number;
}