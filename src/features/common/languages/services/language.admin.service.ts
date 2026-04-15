import {Body, Injectable, NotFoundException, Param} from "@nestjs/common";
import {Language} from "../entities/language.entity";
import {LanguageCreateAdminDto} from "../dtos/admin/language.create.admin.dto";
import {LanguageUpdateAdminDto} from "../dtos/admin/language.update.admin.dto";

@Injectable()
export class LanguageAdminService{
    async getAll(){
        return await Language.find()
    }

    async getOne(@Param("id") id: string){
        const language = await Language.findOneBy({id: +id})
        if(!language){
            throw new NotFoundException("Language not found")
        }
        return language
    }

    async create(@Body() payload: LanguageCreateAdminDto){
        const language = Language.create(payload as Language)
        await Language.save(language)
        return language
    }

    async update(@Param("id") id: string, @Body() payload: LanguageUpdateAdminDto){
        const language = await Language.findOneBy({id: +id})
        if(!language){
            throw new NotFoundException("Language not found")
        }
        Object.assign(language, payload)
        await Language.save(language)
        return language
    }

    async delete(@Param("id") id: string){
        const language = await Language.findOneBy({id: +id})
        if(!language){
            throw new NotFoundException("Language not found")
        }
        await Language.remove(language)
        return {message: "Deleted successfully"}
    }

}