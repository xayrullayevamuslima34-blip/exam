import {Injectable, NotFoundException, Param} from "@nestjs/common";
import {CourseSections} from "../../entities/course-sections.entity";

@Injectable()
export class CourseSectionsPublicService{
    async getAll(){
        return await CourseSections.find()
    }

    async getOne(@Param("id") id: string){
        const section = await CourseSections.findOneBy({id: +id})
        if (!section){
            throw new NotFoundException("Course section not found")
        }
        return section
    }

}