import {BadRequestException, Body, Injectable, NotFoundException, Param, UploadedFile} from "@nestjs/common";
import {Countries} from "../entities/countries.entity";
import {CountryCreateAdminDto} from "../dtos/admin/country.create.admin.dto";
import {CountryUpdateAdminDto} from "../dtos/admin/country.update.admin.dto";
import {Difficulty} from "../../difficulties/entities/difficulty.entity";

@Injectable()
export class CountriesAdminService{
    async getAll(){
        return Countries.find()
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