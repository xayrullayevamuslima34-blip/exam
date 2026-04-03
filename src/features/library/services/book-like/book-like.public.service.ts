import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {BookLike} from "../../entities/book-like.entity";
import {User} from "../../../authorization/auth/entities/authentication.entity";
import {Course} from "../../../courses/entities/course.entity";
import {Book} from "../../entities/book.entity";

@Injectable()
export class BookLikePublicService{

    async toggleLike(bookId: number, userId: number){
        const user = await User.findOneBy({id: userId})
        if (!user){
            throw new NotFoundException("User not found")
        }
        const book = await Book.findOneBy({id: bookId})
        if(!book){
            throw new NotFoundException("Book not found")
        }
        const like = await BookLike.findOneBy({userId, bookId})
        if (like){
            await BookLike.remove(like)
            return {message: "Removed"}
        }else {
            const newLike = BookLike.create({userId: user.id, bookId: book.id})
            await BookLike.save(newLike)
            return {message: "Liked"}
        }
    }

}