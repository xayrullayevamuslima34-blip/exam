import { Injectable, NotFoundException } from '@nestjs/common';
import { Language } from '../../entities/language.entity';
import { LanguageCreateAdminDto } from '../../dtos/languages/admin/language.create.admin.dto';
import { LanguageUpdateAdminDto } from '../../dtos/languages/admin/language.update.admin.dto';
import { LanguageFilter } from '../../filters/language.filter';
import { ConfigService } from '@nestjs/config';
import { LanguageRepository } from '../../repositories/language.repository';

@Injectable()
export class LanguageAdminService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: LanguageRepository) {
  }

  async getAll(filter: LanguageFilter) {
    return await this.repo.getAll(filter);
  }

  async getOne(id: number) {
    const language = await this.repo.getOneById(id);
    if (!language) {
      throw new NotFoundException('Language not found');
    }
    return language;
  }

  async create(payload: LanguageCreateAdminDto) {
    const language = Language.create(payload as Language);
    return await this.repo.save(language);
  }

  async update(id: number, payload: LanguageUpdateAdminDto) {
    const language = await this.repo.getOneById(id);
    if (!language) {
      throw new NotFoundException('Language not found');
    }
    Object.assign(language, payload);
    return await this.repo.save(language);
  }

  async delete(id: number) {
    const language = await this.repo.getOneById(id);
    if (!language) {
      throw new NotFoundException('Language not found');
    }
    await this.repo.delete(language);
    return { message: 'Deleted successfully' };
  }

}