import {Body, Injectable, NotFoundException, Param} from "@nestjs/common";
import {CourseLikes} from "../../entities/course-likes.entity";
import {CourseLikeCreateAdminDto} from "../../dtos/course-likes/admin/course-like.create.admin.dto";

@Injectable()
export class CourseLikesAdminService{
    async getAll(){
        return await CourseLikes.find()
    }

    async getOne(@Param("id") id: string){
        const like = await CourseLikes.findOneBy({id: +id})
        if (!like){
            throw new NotFoundException("Course not found")
        }
        return like
    }

    async delete(@Param("id") id: string){
        const like = await CourseLikes.findOneBy({id: +id})
        if (!like){
            throw new NotFoundException("Course like not found")
        }
        await CourseLikes.remove(like)
        return {message: "Course like deleted successfully"}
    }


}