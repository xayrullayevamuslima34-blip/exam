import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {CourseReviews} from "../../entities/course-reviews.entity";

@Injectable()
export class CourseReviewsAdminService{
    async getAll(){
        return await CourseReviews.find()
    }

    async getOne(@Param("id") id: string){
        const review = await CourseReviews.findOneBy({id: +id})
        if (!review){
            throw new NotFoundException("Course review not found")
        }
        return review
    }

    async delete(@Param("id") id: string){
        const review = await CourseReviews.findOneBy({id: +id})
        if (!review){
            throw new NotFoundException("Course review not found")
        }
        await CourseReviews.remove(review)
        return {message: "Deleted successfully"}
    }

}