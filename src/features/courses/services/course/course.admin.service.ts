import {Injectable, NotFoundException} from "@nestjs/common";
import {Course} from "../../entities/course.entity";
import {CourseCreateAdminDto} from "../../dtos/courses/admin/course.create.admin.dto";
import {CourseUpdateAdminDto} from "../../dtos/courses/admin/course.update.admin.dto";
import { ConfigService } from '@nestjs/config';
import { CourseFilter } from '../../filters/course.filter';
import { CourseRepository } from '../../repositories/course.repository';

@Injectable()
export class CourseAdminService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: CourseRepository) {}

    async getAll(filters: CourseFilter, userId?: number) {
        const courses = await Course.createQueryBuilder("courses")
            .leftJoinAndSelect("courses.likes", "likes", "likes.userId = userId", [userId, userId])
            .leftJoinAndSelect("courses.author", "author")
            .leftJoinAndSelect("courses.category", "category")
            .leftJoinAndSelect("courses.difficulty", "difficulty")
            .leftJoinAndSelect("courses.language", "language")
            .getMany()

        const rawCourses = await this.repo.getAll(filters)
        for (let course of rawCourses.data){
            course.image = this.config.getOrThrow<string>('BASE_URL')
        }

        if (userId) {
            for (const course of courses) {
                //@ts-ignore
                course.isLiked = Boolean(course.likes?.length)
            }
        }
    }

    async getOne(id: number){
        const course = await this.repo.getOneById(id)
        if(!course){
            throw new NotFoundException("Course not found")
        }
        return course
    }

    async create(payload: CourseCreateAdminDto, image: Express.Multer.File){
        const course = Course.create({...payload, image: image.path})
        return await this.repo.save(course)
    }

    async update(id: number, payload: CourseUpdateAdminDto, image: Express.Multer.File){
        const course = await this.repo.getOneById(id)
        if(!course){
            throw new NotFoundException("Course not found")
        }
        Object.assign(course,
            Object.fromEntries(
                Object.entries(payload).filter(([key, value]) => value)
            ))
        return await this.repo.save(course)
    }

    async delete(id: number){
        const course = await this.repo.getOneById(id)
        if(!course){
            throw new NotFoundException("Course not found")
        }
        await this.repo.delete(course)
        return {message: "Deleted successfully"}
    }

}