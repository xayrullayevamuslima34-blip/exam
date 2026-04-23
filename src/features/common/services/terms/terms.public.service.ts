import { Injectable, NotFoundException } from '@nestjs/common';
import { TermsFilter } from '../../filters/terms.filter';
import { TermsRepository } from '../../repositories/terms.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TermsPublicService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: TermsRepository) {
  }

  async getAll(filter: TermsFilter) {
    return this.repo.getAll(filter);
  }

  async getOne(id: number) {
    const terms = await this.repo.getOneById(id);
    if (!terms) {
      throw new NotFoundException('Term not found');
    }
    return terms;
  }

}