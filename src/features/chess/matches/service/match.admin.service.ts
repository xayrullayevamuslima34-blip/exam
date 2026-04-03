import {Body, Injectable, NotFoundException, Param} from "@nestjs/common";
import {Match} from "../entities/match.entity";
import {MatchCreateAdminDto} from "../dtos/admin/match.create.admin.dto";
import {MatchUpdateAdminDto} from "../dtos/admin/match.update.admin.dto";

@Injectable()
export class MatchAdminService{
    async getAll(){
        return Match.find()
    }

    async getOne(@Param("id") id: string){
        const match = await Match.findOneBy({id: +id})
        if (!match){
            throw new NotFoundException("Match not found")
        }
        return match
    }

    async create(@Body() payload: MatchCreateAdminDto){
        const match = Match.create(payload as Match)
        await Match.save(match)
        return match
    }

    async update(@Param("id") id: string, @Body() payload: MatchUpdateAdminDto){
        const match = await Match.findOneBy({id: +id})
        if (!match){
            throw new NotFoundException("Match not found")
        }
        Object.assign(match, payload)
        await Match.save(match)
        return match
    }

    async delete(@Param("id") id: string){
        const match = await Match.findOneBy({id: +id})
        if (!match){
            throw new NotFoundException("Match not found")
        }
        await Match.remove(match)
    }

}