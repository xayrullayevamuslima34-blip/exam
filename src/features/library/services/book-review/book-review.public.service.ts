import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {BookReview} from "../../entities/book-review.entity";

@Injectable()
export class BookReviewPublicService{
    async getAll(@Param("id") id: string){
        return await BookReview.find()
    }

    async getOne(@Param("id") id: string){
        const review = await BookReview.findOneBy({id: +id})
        if(!review){
            throw new NotFoundException("Book not found")
        }
        return review
    }
}