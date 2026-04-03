import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {BookCategory} from "../../entities/book-category.entity";

@Injectable()
export class BookCategoryPublicService{
    async getAll(){
        return await BookCategory.find()
    }

    async getOne(@Param("id") id: string){
        const category = await BookCategory.findOneBy({id: +id})
        if(!category){
            throw new NotFoundException("Book not found")
        }
        return category
    }
}