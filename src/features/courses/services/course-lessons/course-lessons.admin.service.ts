import {Injectable, NotFoundException} from "@nestjs/common";
import {CourseLessons} from "../../entities/course-lessons.entity";
import {CourseLessonCreateAdminDto} from "../../dtos/course-lessons/admin/course-lesson.create.admin.dto";
import {CourseLessonUpdateAdminDto} from "../../dtos/course-lessons/admin/course-lesson.update.admin.dto";
import { ConfigService } from '@nestjs/config';
import { CourseLessonsFilter } from '../../filters/course-lessons.filter';
import { CourseLessonsRepository } from '../../repositories/course-lessons.repository';

@Injectable()
export class CourseLessonsAdminService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: CourseLessonsRepository) {}

    async getAll(filter:  CourseLessonsFilter){
        const rawCourseLessons = await this.repo.getAll(filter)
        const baseUrl = this.config.getOrThrow<string>('BASE_URL');

        for (const lesson of rawCourseLessons.data) {
            lesson.video = `${baseUrl}/${lesson.video}`;
        }

        return rawCourseLessons
    }

    async getOne( id: number){
        const lesson = await this.repo.getOneById(id)
        if (!lesson){
            throw new NotFoundException("Lesson not found")
        }
        return lesson
    }

    async create(payload: CourseLessonCreateAdminDto, video: Express.Multer.File){
        const lesson = CourseLessons.create({...payload, video: video.path})
        return  await this.repo.save(lesson)
    }

    async update(id: number, payload: CourseLessonUpdateAdminDto, video: Express.Multer.File){
        const lesson = await this.repo.getOneById(id)
        if (!lesson){
            throw new NotFoundException("Lesson not found")
        }
        Object.assign(lesson,
            Object.fromEntries(
                Object.entries(payload).filter(([key, value]) => value)
            ))
        return  await this.repo.save(lesson)
    }

    async delete(id: number){
        const lesson = await this.repo.getOneById(id)
        if (!lesson){
            throw new NotFoundException("Lesson not found")
        }
        return await this.repo.delete(lesson)
    }


}