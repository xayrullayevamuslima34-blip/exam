import {Injectable, NotFoundException} from "@nestjs/common";
import { CourseUserLessonsFilter } from '../../filters/course-user-lessons.filter';
import { CourseUserLessonsRepository } from '../../repositories/course-user-lessons.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CourseUserLessonsPublicService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: CourseUserLessonsRepository) {
    }

    async getAll(filter: CourseUserLessonsFilter){
        return await this.repo.getAll(filter)
    }

    async getOne(id: number){
        const userLesson = await this.repo.getOneById(id)
        if (!userLesson){
            throw new NotFoundException("Not found")
        }
        return userLesson
    }

}