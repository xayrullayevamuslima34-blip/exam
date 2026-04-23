import { Injectable, NotFoundException } from '@nestjs/common';
import { Terms } from '../../entities/terms.entity';
import { TermsCreateAdminDto } from '../../dtos/terms/admin/terms.create.admin.dto';
import { TermsUpdateAdminDto } from '../../dtos/terms/admin/terms.update.admin.dto';
import { TermsFilter } from '../../filters/terms.filter';
import { ConfigService } from '@nestjs/config';
import { TermsRepository } from '../../repositories/terms.repository';

@Injectable()
export class TermsAdminService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: TermsRepository) {
  }

  async getAll(filter: TermsFilter) {
    return this.repo.getAll(filter);
  }

  async getOne(id: number) {
    const terms = await this.repo.getOneById(id);
    if (!terms) {
      throw new NotFoundException('Not found');
    }
    return terms;
  }

  async create(payload: TermsCreateAdminDto) {
    const terms = Terms.create(payload as Terms);
    return await this.repo.save(terms);
  }

  async update(id: number, payload: TermsUpdateAdminDto) {
    const terms = await this.repo.getOneById(id);
    if (!terms) {
      throw new NotFoundException('Not found');
    }
    Object.assign(terms, payload);
    return await this.repo.save(terms);
  }

  async delete(id: number) {
    const terms = await this.repo.getOneById(id);
    if (!terms) {
      throw new NotFoundException('Term not found');
    }
    await this.repo.delete(terms);
    return { message: 'Deleted successfully' };
  }

}