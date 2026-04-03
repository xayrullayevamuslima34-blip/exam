import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {Match} from "../entities/match.entity";

@Injectable()
export class MatchPublicService{
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
}