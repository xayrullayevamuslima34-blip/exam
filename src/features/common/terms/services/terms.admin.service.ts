import {Body, Get, Injectable, NotFoundException, Param} from "@nestjs/common";
import {Terms} from "../entities/terms.entity";
import {TermsCreateAdminDto} from "../dtos/admin/terms.create.admin.dto";
import {TermsUpdateAdminDto} from "../dtos/admin/terms.update.admin.dto";

@Injectable()
export class TermsAdminService{
    async getAll(){
        return Terms.find()
    }

    async getOne(@Param("id") id: string){
        const terms = await Terms.findOneBy({id: +id})
        if (!terms){
            throw new NotFoundException("Not found")
        }
        return terms
    }

    async create(@Body() payload: TermsCreateAdminDto){
        const terms = Terms.create(payload as Terms)
        await Terms.save(terms)
        return terms
    }

    async update(@Param("id") id: string, @Body() payload: TermsUpdateAdminDto){
        const terms = await Terms.findOneBy({id: +id})
        if (!terms){
            throw new NotFoundException("Not found")
        }
        Object.assign(terms, payload)
        await Terms.save(terms)
        return terms
    }

    async delete(@Param("id") id: string){
        const terms = await Terms.findOneBy({id: +id})
        if (!terms){
            throw new NotFoundException("Term not found")
        }
        await Terms.remove(terms)
        return {message: "Deleted successfully"}
    }

}