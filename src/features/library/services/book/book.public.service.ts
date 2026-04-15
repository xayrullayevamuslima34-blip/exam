import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {Book} from "../../entities/book.entity";
import { BookFilter } from '../../filters/book.filter';
import { FindOptionsWhere } from 'typeorm';

@Injectable()
export class BookPublicService{
    async getAll(filter: BookFilter){
        let whereOptions: FindOptionsWhere<Book> = {}
        const take = filter.size ?? Number(process.env.DEFAULT_SIZE)
        const skip = ((filter.page ?? Number(process.env.DEFAULT_PAGE)) - 1) * take

        const book = await Book.find({where: whereOptions, skip: skip, take: take})
        return book
    }

    async getOne(@Param("id")id: string){
        const book = await Book.findOneBy({id: +id})

        if(!book){
            throw new NotFoundException("Book not found")
        }

        return book
    }
}