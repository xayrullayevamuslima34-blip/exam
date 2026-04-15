import {Body, Injectable, NotFoundException, Param} from "@nestjs/common";
import {CourseUserLessons} from "../../entities/course-user-lessons.entity";
import {CourseUserLessonCreateAdminDto} from "../../dtos/course-user-lessons/admin/course-user-lesson.create.admin.dto";
import {CourseUserLessonUpdateAdminDto} from "../../dtos/course-user-lessons/admin/course-user-lesson.update.admin.dto";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CourseUserLessonsAdminService{
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

    async create(@Body() payload: CourseUserLessonCreateAdminDto){
        const userLesson = CourseUserLessons.create(payload as CourseUserLessons)
        await CourseUserLessons.save(userLesson)
        return userLesson
    }

    async update(@Param("id") id: string, @Body() payload: CourseUserLessonUpdateAdminDto){
        const userLesson = await CourseUserLessons.findOneBy({id: +id})
        if (!userLesson){
            throw new NotFoundException("Not found")
        }
        Object.assign(userLesson, payload)
        await CourseUserLessons.save(userLesson)
        return userLesson
    }

    async delete(@Param("id") id: string){
        const userLesson = await CourseUserLessons.findOneBy({id: +id})
        if (!userLesson){
            throw new NotFoundException("Not found")
        }
        await CourseUserLessons.remove(userLesson)
        return {message: "Deleted successfully"}
    }

}