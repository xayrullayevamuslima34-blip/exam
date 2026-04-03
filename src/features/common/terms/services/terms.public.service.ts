import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {Terms} from "../entities/terms.entity";

@Injectable()
export class TermsPublicService{
    async getAll(){
        return Terms.find()
    }

    async getOne(@Param("id") id: string){
        const terms = await Terms.findOneBy({id: +id})
        if (!terms){
            throw new NotFoundException("Term not found")
        }
        return terms
    }

}