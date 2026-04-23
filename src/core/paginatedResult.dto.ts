import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { Type as NestType } from '@nestjs/common';

export interface PaginatedResult {
  totalPages: number;
  previousPage?: number;
  currentPage: number;
  nextPage?: number;
  totalCount: number;
  data: any[];
}

export function PaginatedResult<T>(Dto: NestType<T>) {
  class PaginatedResult implements PaginatedResult {
    @ApiProperty()
    @Expose()
    totalPages!: number;

    @ApiProperty()
    @Expose()
    previousPage?: number;

    @ApiProperty()
    @Expose()
    currentPage!: number;

    @ApiProperty()
    @Expose()
    nextPage?: number;

    @ApiProperty()
    @Expose()
    totalCount!: number;

    @ApiProperty({ type: [Dto] })
    @Expose()
    @Type(() => Dto)
    data!: T[];
  }

  return PaginatedResult;
}