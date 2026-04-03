import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {CourseUserLessons} from "../../entities/course-user-lessons.entity";

@Injectable()
export class CourseUserLessonsPublicService{
    async getAll(){
        return await CourseUserLessons.find()
    }

    async getOne(@Param("id") id: string){
        const userLesson = await CourseUserLessons.findOneBy({id: +id})
        if (!userLesson){
            throw new NotFoundException("Not found")
        }
        return userLesson
    }

}