import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Player } from '../../entities/player.entity';
import { PlayerCreateAdminDto } from '../../dtos/players/admin/player.create.admin.dto';
import { PlayerUpdateAdminDto } from '../../dtos/players/admin/player.update.admin.dto';
import { PlayerListAdminDto } from '../../dtos/players/admin/player.list.admin.dto';
import { ConfigService } from '@nestjs/config';
import { plainToInstance } from 'class-transformer';
import { PlayerFilter } from '../../filters/player.filter';
import { PlayerRepository } from '../../repositories/player.repository';

@Injectable()
export class PlayerAdminService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: PlayerRepository) {
  }

  async getAll(filter: PlayerFilter) {
    const rawPlayers = await this.repo.getAll(filter);
    for (const player of rawPlayers.data) {
      player.image = this.config.getOrThrow<string>('BASE_URL');
    }
    return plainToInstance(PlayerListAdminDto, rawPlayers);
  }

  async getOne(id: number) {
    const player = await this.repo.getOneById(id);
    if (!player) {
      throw new NotFoundException('Player not found');
    }
    return player;
  }

  async create(payload: PlayerCreateAdminDto, image: Express.Multer.File) {
    const alreadyExists = await Player.findOneBy({ fullName: payload.fullName });
    if (alreadyExists) {
      throw new BadRequestException('Player with given title already exists');
    }
    const player = Player.create({ ...payload, image: image.path });
    return await this.repo.save(player);
  }

  async update(id: number, payload: PlayerUpdateAdminDto, image: Express.Multer.File) {
    const player = await this.repo.getOneById(id);
    if (!player) {
      throw new NotFoundException('Player not found');
    }
    Object.assign(player,
      Object.fromEntries(Object.entries(payload).filter(([key, value]) => value)));
    return player;
  }

  async delete(id: number) {
    const player = await this.repo.getOneById(id);
    if (!player) {
      throw new NotFoundException('Player not found');
    }
    await this.repo.delete(player);
    return { message: 'Deleted successfully' };
  }

}