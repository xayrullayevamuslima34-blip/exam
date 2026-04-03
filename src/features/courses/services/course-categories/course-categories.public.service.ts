import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {CourseCategories} from "../../entities/course-categories.entity";

@Injectable()
export class CourseCategoriesPublicService{
    async getAll(){
        return await CourseCategories.find()
    }

    async getOne(@Param("id") id: string){
        const category = await CourseCategories.findOneBy({id: +id})
        if(!category){
            throw new NotFoundException("Course category not found")
        }
    }

}