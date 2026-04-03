import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {Countries} from "../entities/countries.entity";

@Injectable()
export class CountriesPublicService{
    async getAll(){
        return Countries.find()
    }

    async getOne(@Param("id") id: string){
        const course = await Countries.findOneBy({id: +id})
        if (!course){
            throw new NotFoundException("Not Found")
        }
        return course
    }
}