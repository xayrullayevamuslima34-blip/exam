import {BadRequestException, Body, Injectable, NotFoundException, Param, UploadedFile} from "@nestjs/common";
import {Countries} from "../entities/countries.entity";
import {CountryCreateAdminDto} from "../dtos/admin/country.create.admin.dto";
import {CountryUpdateAdminDto} from "../dtos/admin/country.update.admin.dto";
import {Difficulty} from "../../difficulties/entities/difficulty.entity";
import { ConfigService } from '@nestjs/config';
import { plainToInstance } from 'class-transformer';
import { CountryListAdminDto } from '../dtos/admin/country.list.admin.dto';

@Injectable()
export class CountriesAdminService{

    constructor(private readonly config: ConfigService) {}

    async getAll(){
        const rawCountries = await Countries.find()
        for (const country of rawCountries){
            country.flag = this.config.getOrThrow<string>('BASE_URL')
        }
        return plainToInstance(CountryListAdminDto, rawCountries)
    }

    async getOne(id: string){
        const country = await Countries.findOneBy({id: +id})
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
        await Countries.save(country)
        return country
    }

    async update(id: string, payload: CountryUpdateAdminDto, flag: Express.Multer.File){
        const country = await Countries.findOneBy({id: +id})
        if (!country){
            throw new NotFoundException("Could not find country")
        }
        Object.assign(country,
            Object.fromEntries(
                Object.entries(payload).filter(([key, value]) => value)))
        await Countries.save(country)
        return country
    }

    async delete(@Param("id") id: string){
        const country = await Countries.findOneBy({id: +id})
        if (!country){
            throw new NotFoundException("Could not find country")
        }
        await Countries.remove(country)
        return {message: "Deleted successfully"}
    }

}