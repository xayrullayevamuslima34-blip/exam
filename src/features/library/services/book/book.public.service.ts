import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {Book} from "../../entities/book.entity";

@Injectable()
export class BookPublicService{
    async getAll(){
        return await Book.find()
    }

    async getOne(@Param("id")id: string){
        const book = await Book.findOneBy({id: +id})

        if(!book){
            throw new NotFoundException("Book not found")
        }

        return book
    }
}