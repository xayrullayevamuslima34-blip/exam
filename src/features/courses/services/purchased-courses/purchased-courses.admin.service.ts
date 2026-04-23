import { Injectable, NotFoundException } from '@nestjs/common';
import { PurchasedCoursesFilter } from '../../filters/purchased-courses.filter';
import { ConfigService } from '@nestjs/config';
import { PurchasedCoursesRepository } from '../../repositories/purchased-courses.repository';

@Injectable()
export class PurchasedCoursesAdminService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: PurchasedCoursesRepository) {
  }

  async getAll(filter: PurchasedCoursesFilter) {
    return await this.repo.getAll(filter);
  }

  async getOne(id: number) {
    const purchased = await this.repo.getOneById(id);
    if (!purchased) {
      throw new NotFoundException('Not found');
    }
    return purchased;
  }

  async delete(id: number) {
    const purchased = await this.repo.getOneById(id);
    if (!purchased) {
      throw new NotFoundException('Not found');
    }
    return await this.repo.delete(purchased);
  }

}