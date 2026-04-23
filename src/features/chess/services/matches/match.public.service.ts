import { Injectable, NotFoundException } from '@nestjs/common';
import { MatchFilter } from '../../filters/match.filter';
import { MatchRepository } from '../../repositories/match.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MatchPublicService {

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
}