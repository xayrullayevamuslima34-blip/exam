import {Body, Injectable, NotFoundException, Param, UploadedFile} from "@nestjs/common";
import {Book} from "../../entities/book.entity";
import {BookCreateAdminDto} from "../../dtos/book/admin/book.create.admin.dto";
import {BookUpdateAdminDto} from "../../dtos/book/admin/book.update.admin.dto";

@Injectable()
export class BookAdminService{
    async getAll(){
        return await Book.find()
    }

    async getOne(@Param("id") id: string){
        const book = await Book.findOneBy({id: +id})

        if(!book){
            throw new NotFoundException("Book not found")
        }
        return book
    }

    async create(payload: BookCreateAdminDto, image: Express.Multer.File){
        const newBook = Book.create({...payload, image: image.path})
        await Book.save(newBook)
        return newBook
    }

    async update(id: string, payload: BookUpdateAdminDto, image: Express.Multer.File){
        const book = await Book.findOneBy({id: +id})
        if(!book){
            throw new NotFoundException("Book not found")
        }

        Object.assign(book,
            Object.fromEntries(
                Object.entries(payload).filter(([key, value]) => value)
            ))
        await Book.save(book)
        return book
    }

    async delete(@Param("id") id: string){
        const book = await Book.findOneBy({id: +id})
        if(!book){
            throw new NotFoundException("Book not found")
        }
        await Book.remove(book)
        return {message: "Deleted Successfully"}
    }


}