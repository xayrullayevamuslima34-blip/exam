import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {CourseLikes} from "../../entities/course-likes.entity";
import {User} from "../../../authorization/auth/entities/authentication.entity";
import {Course} from "../../entities/course.entity";

@Injectable()
export class CourseLikesPublicService{
    async getAll(){
        return await CourseLikes.find()
    }

    async getOne(@Param("id") id:string){
        const like = await CourseLikes.findOneBy({id: +id})
        if (!like){
            throw new NotFoundException("Course not found")
        }
        return like
    }

    async toggleLike(courseId: number, userId: number){
        const user = await User.findOneBy({id: userId})
        if (!user){
            throw new NotFoundException("User not found")
        }
        const course = await Course.findOneBy({id: courseId})
        if(!course){
            throw new NotFoundException("Course not found")
        }

        const like = await CourseLikes.findOneBy({userId, courseId})
        if (like){
            await CourseLikes.remove(like)
            return {message: "Removed"}
        }else {
            const newLike = CourseLikes.create({userId: user.id, courseId: course.id})
            await CourseLikes.save(newLike)
            return {message: "Liked"}
        }
    }
}