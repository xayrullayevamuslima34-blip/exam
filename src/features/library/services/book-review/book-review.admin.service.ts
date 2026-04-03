import {Body, Injectable, NotFoundException, Param} from "@nestjs/common";
import {BookReview} from "../../entities/book-review.entity";
import {BookReviewCreateAdminDto} from "../../dtos/book-review/admin /book-review.create.admin.dto";
import {BookReviewUpdateAdminDto} from "../../dtos/book-review/admin /book-review.update.admin.dto";

@Injectable()
export class BookReviewAdminService{
    async getAll(){
        return await BookReview.find()
    }

    async getOne(@Param("id") id: string){
        const review = await BookReview.findOneBy({id: +id})
        if(!review){
            throw new NotFoundException("Book not found")
        }
        return review
    }

    async create(@Body() payload: BookReviewCreateAdminDto){
        const review = await BookReview.create(payload as BookReview)
        await BookReview.save(review)
        return review
    }

    async update(@Param("id") id: string, @Body() payload: BookReviewUpdateAdminDto){
        const review = await BookReview.findOneBy({id: +id})
        if(!review){
            throw new NotFoundException("Book not found")
        }

        Object.assign(review, payload)
        await BookReview.save(review)
        return review
    }

    async delete(@Param("id") id: string){
        const review = await BookReview.findOneBy({id: +id})
        if(!review){
            throw new NotFoundException("Book not found")
        }

        await BookReview.remove(review)
        return {message: "Deleted successfully"}
    }

}