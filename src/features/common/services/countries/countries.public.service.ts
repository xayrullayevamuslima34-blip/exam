import {Injectable, NotFoundException} from "@nestjs/common";
import { CountriesFilter } from '../../filters/countries.filter';
import { CountriesRepository } from '../../repositories/countries.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CountriesPublicService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: CountriesRepository) {
    }

    async getAll(filter: CountriesFilter){
        return this.repo.getAll(filter)
    }

    async getOne(id: number){
        const course = await this.repo.getOneById(id)
        if (!course){
            throw new NotFoundException("Not Found")
        }
        return course
    }
}