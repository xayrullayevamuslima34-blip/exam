import {BadRequestException, Injectable, NotFoundException} from "@nestjs/common";
import {Countries} from "../../entities/countries.entity";
import {CountryCreateAdminDto} from "../../dtos/countries/admin/country.create.admin.dto";
import {CountryUpdateAdminDto} from "../../dtos/countries/admin/country.update.admin.dto";
import {Difficulty} from "../../entities/difficulty.entity";
import { ConfigService } from '@nestjs/config';
import { CountriesFilter } from '../../filters/countries.filter';
import { CountriesRepository } from '../../repositories/countries.repository';

@Injectable()
export class CountriesAdminService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: CountriesRepository) {
    }

    async getAll(filter: CountriesFilter){
        const rawCountries = await this.repo.getAll(filter)
        for (const country of rawCountries.data){
            country.flag = this.config.getOrThrow<string>('BASE_URL')
        }
        return rawCountries
    }

    async getOne(id: number){
        const country = await this.repo.getOneById(id)
        if (!country){
            throw new NotFoundException("Could not find country")
        }
        return country
    }

    async create(payload: CountryCreateAdminDto, flag: Express.Multer.File){
        const alreadyExists = await Difficulty.findOneBy({title: payload.title})
        if (alreadyExists) {
            throw new BadRequestException("Country with given title already exists")
        }
        const country = Countries.create({...payload, flag: flag.path})
        return await this.repo.save(country)
    }

    async update(id: number, payload: CountryUpdateAdminDto, flag: Express.Multer.File){
        const country = await this.repo.getOneById(id)
        if (!country){
            throw new NotFoundException("Could not find country")
        }
        Object.assign(country,
            Object.fromEntries(
                Object.entries(payload).filter(([key, value]) => value)))
        return  await this.repo.save(country)
    }

    async delete(id: number){
        const country = await this.repo.getOneById(id)
        if (!country){
            throw new NotFoundException("Could not find country")
        }
        await this.repo.delete(country)
        return {message: "Deleted successfully"}
    }

}