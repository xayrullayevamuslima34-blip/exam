import {Body, Injectable, NotFoundException, Param} from "@nestjs/common";
import {CourseCategories} from "../../entities/course-categories.entity";
import {CourseCategoriesCreateAdminDto} from "../../dtos/course-categories/admin/course-categories.create.admin.dto";
import {CourseCategoriesUpdateAdminDto} from "../../dtos/course-categories/admin/course-categories.update.admin.dto";

@Injectable()
export class CourseCategoriesAdminService{
    async getAll(){
        return await CourseCategories.find()
    }

    async getOne(@Param("id") id: string){
        const category = await CourseCategories.findOneBy({id: +id})
        if (!category){
            throw new NotFoundException("Course category not found")
        }
        return category
    }

    async create(@Body() payload: CourseCategoriesCreateAdminDto){
        const category = CourseCategories.create(payload as CourseCategories)
        await CourseCategories.save(category)
        return category
    }

    async update(id: string, payload: CourseCategoriesUpdateAdminDto){
        const category = await CourseCategories.findOneBy({id: +id})
        if (!category){
            throw new NotFoundException("Course category not found")
        }
        Object.assign(category, payload)
        await CourseCategories.save(category)
        return category
    }

    async delete(@Param("id") id: string){
        const category = await CourseCategories.findOneBy({id: +id})
        if(!category){
            throw new NotFoundException("Course category not found")
        }
        await CourseCategories.remove(category)
        return category
    }

}