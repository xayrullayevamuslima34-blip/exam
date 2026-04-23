import {Injectable, NotFoundException} from "@nestjs/common";
import { DifficultyFilter } from '../../filters/difficulty.filter';
import { DifficultyRepository } from '../../repositories/difficulty.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DifficultyPublicService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: DifficultyRepository) {
    }

    async getAll(filter: DifficultyFilter){
        return await this.repo.getAll(filter)
    }

    async getOne(id: number){
        const difficulty = await this.repo.getOneById(id)
        if(!difficulty){
            throw new NotFoundException("Difficulty not found")
        }
        return difficulty
    }

}