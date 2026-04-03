import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {Language} from "../entities/language.entity";

@Injectable()
export class LanguagePublicService{
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

}