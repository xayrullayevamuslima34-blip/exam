import { Injectable, NotFoundException } from '@nestjs/common';
import { Match } from '../../entities/match.entity';
import { MatchCreateAdminDto } from '../../dtos/matches/admin/match.create.admin.dto';
import { MatchUpdateAdminDto } from '../../dtos/matches/admin/match.update.admin.dto';
import { MatchFilter } from '../../filters/match.filter';
import { ConfigService } from '@nestjs/config';
import { MatchRepository } from '../../repositories/match.repository';

@Injectable()
export class MatchAdminService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: MatchRepository) {
  }

  async getAll(filter: MatchFilter) {
    return this.repo.getAll(filter);
  }

  async getOne(id: number) {
    const match = await this.repo.getOneById(id);
    if (!match) {
      throw new NotFoundException('Match not found');
    }
    return match;
  }

  async create(payload: MatchCreateAdminDto) {
    const match = Match.create(payload as Match);
    return await this.repo.save(match);
  }

  async update(id: number, payload: MatchUpdateAdminDto) {
    const match = await this.repo.getOneById(id);
    if (!match) {
      throw new NotFoundException('Match not found');
    }
    Object.assign(match, payload);
    return await this.repo.save(match);
  }

  async delete(id: number) {
    const match = await this.repo.getOneById(id);
    if (!match) {
      throw new NotFoundException('Match not found');
    }
    return await this.repo.delete(match);
  }

}