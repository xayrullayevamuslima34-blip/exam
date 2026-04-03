import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {Difficulty} from "../entities/difficulty.entity";

@Injectable()
export class DifficultyPublicService{
    async getAll(){
        return await Difficulty.find()
    }

    async getOne(@Param("id") id: string){
        const difficulty = await Difficulty.findOneBy({id: +id})
        if(!difficulty){
            throw new NotFoundException("Difficulty not found")
        }
        return difficulty
    }

}