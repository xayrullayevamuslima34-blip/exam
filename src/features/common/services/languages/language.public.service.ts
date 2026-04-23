import {Injectable, NotFoundException} from "@nestjs/common";
import { LanguageFilter } from '../../filters/language.filter';
import { LanguageRepository } from '../../repositories/language.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LanguagePublicService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: LanguageRepository) {
    }

    async getAll(filter: LanguageFilter){
        return await this.repo.getAll(filter)
    }

    async getOne(id: number){
        const language = await this.repo.getOneById(id)
        if(!language){
            throw new NotFoundException("Language not found")
        }
        return language
    }

}