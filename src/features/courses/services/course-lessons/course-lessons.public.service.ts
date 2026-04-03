import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {CourseLessons} from "../../entities/course-lessons.entity";

@Injectable()
export class CourseLessonsPublicService{
    async getAll(){
        return await CourseLessons.find()
    }

    async getOne(@Param("id") id: string){
        const lesson = await CourseLessons.findOneBy({id: +id})
        if (!lesson){
            throw new NotFoundException("Course not found")
        }
        return lesson
    }

}