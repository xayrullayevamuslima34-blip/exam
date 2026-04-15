import {BadRequestException, Body, Injectable, NotFoundException, Param} from "@nestjs/common";
import {Difficulty} from "../entities/difficulty.entity";
import {DifficultyCreateAdminDto} from "../dtos/admin/difficulty.create.admin.dto";
import {DifficultyUpdateAdminDto} from "../dtos/admin/difficulty.update.admin.dto";
import {ConfigService} from "@nestjs/config";
import {plainToInstance} from "class-transformer";
import {DifficultiesListAdminDto} from "../dtos/admin/difficulty.list.dto";

@Injectable()
export class DifficultyAdminService{

    constructor(private readonly config: ConfigService) {}

    async getAll(){
        const rawDifficulties = await Difficulty.find()
        for (let difficulty of rawDifficulties){
            difficulty.icon=this.config.getOrThrow<string>('BASE_URL')+'/'+difficulty.icon
        }
        return plainToInstance(DifficultiesListAdminDto, rawDifficulties)
    }

    async getOne(@Param("id") id: string){
        const difficulty = await Difficulty.findOneBy({id: +id})
        if(!difficulty){
            throw new NotFoundException("Difficulty not found")
        }
        return difficulty
    }

    async create(@Body() payload: DifficultyCreateAdminDto, icon: Express.Multer.File){
        const alreadyExists = await Difficulty.findOneBy({title: payload.title})
        if (alreadyExists) {
                throw new BadRequestException("Difficulty with given title already exists")
            }

        const difficulty = Difficulty.create(payload as Difficulty)
        difficulty.icon = icon.path
        await Difficulty.save(difficulty)
        return difficulty
    }

    async update(@Param("id") id: string, @Body() payload: DifficultyUpdateAdminDto, icon: Express.Multer.File){
        const difficulty = await Difficulty.findOneBy({id: +id})
        if(!difficulty){
            throw new NotFoundException("Difficulty not found")
        }

        Object.assign(difficulty,
            Object.fromEntries(Object.entries(payload).filter(([key, value]) => value)))
        await Difficulty.save(difficulty)
        return difficulty
    }

    async delete(@Param("id") id: string){
        const difficulty = await Difficulty.findOneBy({id: +id})
        if(!difficulty){
            throw new NotFoundException("Difficulty not found")
        }
        await Difficulty.remove(difficulty)
        return {message: "Difficulty deleted"}
    }

}