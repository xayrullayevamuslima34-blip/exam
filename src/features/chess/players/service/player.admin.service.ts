import {
    BadRequestException,
    Body,
    Injectable,
    NotFoundException,
    Param,
    UploadedFile,
    UseInterceptors
} from "@nestjs/common";
import {Player} from "../entities/player.entity";
import {PlayerCreateAdminDto} from "../dtos/admin/player.create.admin.dto";
import {PlayerUpdateAdminDto} from "../dtos/admin/player.update.admin.dto";
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "../../../../config/multer.config";
import {Difficulty} from "../../../common/difficulties/entities/difficulty.entity";

@Injectable()
export class PlayerAdminService{
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

    async create(payload: PlayerCreateAdminDto, image: Express.Multer.File){
        const alreadyExists = await Player.findOneBy({fullName: payload.fullName})
        if (alreadyExists) {
            throw new BadRequestException("Player with given title already exists")
        }
        const player = Player.create({...payload, image: image.path})
        await Player.save(player)
        return player
    }

    async update(id: string, payload: PlayerUpdateAdminDto, image: Express.Multer.File){
        const player = await Player.findOneBy({id: +id})
        if (!player){
            throw new NotFoundException("Player not found")
        }
        Object.assign(player,
            Object.fromEntries(Object.entries(payload).filter(([key, value]) => value)))
        return player
    }

    async delete(@Param("id") id: string){
        const player = await Player.findOneBy({id: +id})
        if (!player){
            throw new NotFoundException("Player not found")
        }
        await Player.remove(player)
        return {message: "Deleted successfully"}
    }

}