import {Injectable, NotFoundException} from "@nestjs/common";
import { CourseLessonsFilter } from '../../filters/course-lessons.filter';
import { CourseLessonsRepository } from '../../repositories/course-lessons.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CourseLessonsPublicService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: CourseLessonsRepository) {}

    async getAll(filter: CourseLessonsFilter){
        return await this.repo.getAll(filter)
    }

    async getOne(id: number){
        const lesson = await this.repo.getOneById(id)
        if (!lesson){
            throw new NotFoundException("Course not found")
        }
        return lesson
    }

}