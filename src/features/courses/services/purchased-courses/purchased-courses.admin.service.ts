import {Body, Injectable, NotFoundException, Param} from "@nestjs/common";
import {PurchasedCourses} from "../../entities/purchased-courses.entity";
import {PurchasedCourseCreatePublicDto} from "../../dtos/purchased-courses/public/purchased-course.create.public.dto";
import {PurchasedCourseUpdatePublicDto} from "../../dtos/purchased-courses/public/purchased-course.update.public.dto";

@Injectable()
export class PurchasedCoursesAdminService{
    async getAll(){
        return await PurchasedCourses.find()
    }

    async getOne(@Param(":id") id: string){
        const purchased = await PurchasedCourses.findOneBy({id: +id})
        if (!purchased){
            throw new NotFoundException("Not found")
        }
        return purchased
    }

    async delete(@Param("id") id: string){
        const purchased = await PurchasedCourses.findOneBy({id: +id})
        if (!purchased){
            throw new NotFoundException("Not found")
        }
        await PurchasedCourses.remove(purchased)
        return purchased
    }

}