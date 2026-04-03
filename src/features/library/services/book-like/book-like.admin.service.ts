import {Body, Injectable, NotFoundException, Param} from "@nestjs/common";
import {BookLike} from "../../entities/book-like.entity";
import {BookLikeCreateAdminDto} from "../../dtos/book-like/admin/book-like.create.admin.dto";

@Injectable()
export class BookLikeAdminService{
    async getAll(){
        return await BookLike.find()
    }

    async getOne(@Param("id") id: string){
        const like = await BookLike.findOneBy({id: +id})
        if(!like){
            throw new NotFoundException("Like not found")
        }
        return like
    }

    async delete(@Param("id") id: string){
        const like = await BookLike.findOneBy({id: +id})
        if(!like){
            throw new NotFoundException("Like not found")
        }
        await BookLike.remove(like)
        return {message: "Deleted successfully"}
    }

}