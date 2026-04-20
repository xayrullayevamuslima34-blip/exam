import { BaseModel } from '../base-module';
import { ConfigService } from '@nestjs/config';
import { FindOptionsWhere, Repository } from 'typeorm';
import { PaginationFilters } from '../filters/pagination.filter';
import { PaginatedResult } from '../paginatedResult.dto';

export abstract class BaseRepository<T extends BaseModel> {
  protected abstract config: ConfigService;
  protected abstract repo: Repository<T>;

  public async getAll(filters: PaginationFilters, whereOptions?: FindOptionsWhere<T>) {
    const take = filters.size ?? this.config.getOrThrow<number>('DEFAULT_SIZE');
    const currentPage = filters.page ?? this.config.getOrThrow<number>('DEFAULT_PAGE');
    const skip = (currentPage - 1) * take;

    const totalCount = await this.repo.count({ where: whereOptions });
    const totalPages = Math.ceil(totalCount / take);

    const previousPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    const data = await this.repo.find({ skip: skip, take: take, where: whereOptions });
    return { totalPages, totalCount, nextPage, currentPage, previousPage, data } as PaginatedResult;
  }

  public async getOneById(id: number){
    return this.repo.findOneBy({id} as FindOptionsWhere<T>)
  }

    public async save(entity: T){
    return this.repo.save(entity)
  }

  public async delete(entity: T){
    return this.repo.remove(entity)
  }

}