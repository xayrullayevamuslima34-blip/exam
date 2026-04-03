import {Body, Injectable, NotFoundException, Param} from "@nestjs/common";
import {CourseSections} from "../../entities/course-sections.entity";
import {CourseSectionCreateAdminDto} from "../../dtos/course-sections/admin/course-section.create.admin.dto";
import {CourseSectionUpdateAdminDto} from "../../dtos/course-sections/admin/course-section.update.admin.dto";

@Injectable()
export class CourseSectionsAdminService{
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

    async create(@Body() payload: CourseSectionCreateAdminDto){
        const section = CourseSections.create(payload as CourseSections)
        await CourseSections.save(section)
        return section
    }

    async update(@Param("id") id: string, @Body() payload: CourseSectionUpdateAdminDto){
        const section = await CourseSections.findOneBy({id: +id})
        if (!section){
            throw new NotFoundException("Course section not found")
        }
        Object.assign(section, payload)
        await CourseSections.save(section)
        return section
    }

    async delete(@Param("id") id: string){
        const section = await CourseSections.findOneBy({id: +id})
        if (!section){
            throw new NotFoundException("Course section not found")
        }
        await CourseSections.remove(section)
        return {message: "Deleted successfully"}
    }

}