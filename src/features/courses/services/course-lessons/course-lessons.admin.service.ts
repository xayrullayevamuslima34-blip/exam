import {Body, Injectable, NotFoundException, Param} from "@nestjs/common";
import {CourseLessons} from "../../entities/course-lessons.entity";
import {CourseLessonCreateAdminDto} from "../../dtos/course-lessons/admin/course-lesson.create.admin.dto";
import {CourseLessonUpdateAdminDto} from "../../dtos/course-lessons/admin/course-lesson.update.admin.dto";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CourseLessonsAdminService{

    constructor(private readonly config: ConfigService) {}

    async getAll(){
        const rawCourseLessons = await CourseLessons.find()
        for (let courseLesson of rawCourseLessons){
            courseLesson.video = this.config.getOrThrow<string>('BASE_URL')
        }
        return await CourseLessons.find()
    }

    async getOne( id: string){
        const lesson = await CourseLessons.findOneBy({id: +id})
        if (!lesson){
            throw new NotFoundException("Lesson not found")
        }
    }

    async create(payload: CourseLessonCreateAdminDto, video: Express.Multer.File){
        const lesson = CourseLessons.create({...payload, video: video.path})
        await CourseLessons.save(lesson)
        return lesson
    }

    async update(id: string, payload: CourseLessonUpdateAdminDto, video: Express.Multer.File){
        const lesson = await CourseLessons.findOneBy({id: +id})
        if (!lesson){
            throw new NotFoundException("Lesson not found")
        }
        Object.assign(lesson,
            Object.fromEntries(
                Object.entries(payload).filter(([key, value]) => value)
            ))
        await CourseLessons.save(lesson)
        return lesson
    }

    async delete(@Param("id") id: string){
        const lesson = await CourseLessons.findOneBy({id: +id})
        if (!lesson){
            throw new NotFoundException("Lesson not found")
        }
        await CourseLessons.remove(lesson)
        return lesson
    }


}