import {Injectable, NotFoundException} from "@nestjs/common";
import { BookLikeFilter } from '../../filters/book-like.filter';
import { ConfigService } from '@nestjs/config';
import { BookLikeRepository } from '../../repositories/book-like.repository';

@Injectable()
export class BookLikeAdminService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: BookLikeRepository) {
    }

    async getAll(filter: BookLikeFilter){
        return await this.repo.getAll(filter)
    }

    async getOne(id: number){
        const like = await this.repo.getOneById(id)
        if(!like){
            throw new NotFoundException("Like not found")
        }
        return like
    }

    async delete(id: number){
        const like = await this.repo.getOneById(id)
        if(!like){
            throw new NotFoundException("Like not found")
        }
        await this.repo.delete(like)
        return {message: "Deleted successfully"}
    }

}