import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {Player} from "../entities/player.entity";

@Injectable()
export class PlayerPublicService{
    async getAll(){
        return Player.find()
    }

    async getOne(@Param("id") id: string){
        const player = await Player.findOneBy({id: +id})
        if (!player){
            throw new NotFoundException("Player not found")
        }
        return player
    }



}