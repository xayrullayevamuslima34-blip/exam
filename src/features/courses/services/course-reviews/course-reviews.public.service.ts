import {Body, Injectable} from "@nestjs/common";
import {CourseReviews} from "../../entities/course-reviews.entity";
import {CourseReviewCreateAdminDto} from "../../dtos/course-reviews/admin/course-review.create.admin.dto";

@Injectable()
export class CourseReviewsPublicService{

    async create(@Body() payload: CourseReviewCreateAdminDto){
        const review = CourseReviews.create(payload as CourseReviews)
        await CourseReviews.save(review)
        return review
    }

}