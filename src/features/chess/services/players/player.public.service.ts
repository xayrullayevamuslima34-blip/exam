import {Injectable, NotFoundException} from "@nestjs/common";
import { PlayerFilter } from '../../filters/player.filter';
import { PlayerRepository } from '../../repositories/player.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PlayerPublicService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: PlayerRepository) {
    }

    async getAll(filter: PlayerFilter){
        return this.repo.getAll(filter)
    }

    async getOne(id: number){
        const player = await this.repo.getOneById(id)
        if (!player){
            throw new NotFoundException("Player not found")
        }
        return player
    }



}