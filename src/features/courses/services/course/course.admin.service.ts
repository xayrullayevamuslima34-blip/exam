import {Body, Injectable, NotFoundException, Param} from "@nestjs/common";
import {Course} from "../../entities/course.entity";
import {CourseCreateAdminDto} from "../../dtos/courses/admin/course.create.admin.dto";
import {CourseUpdateAdminDto} from "../../dtos/courses/admin/course.update.admin.dto";
import {plainToInstance} from "class-transformer";
import {CourseListAdminDto} from "../../dtos/courses/admin/course.list.admin.dto";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CourseAdminService{

    constructor(private readonly config: ConfigService) {}

    async getAll(userId?: number) {
        const courses = await Course.createQueryBuilder("courses")
            .leftJoinAndSelect("courses.likes", "likes", "likes.userId = userId", [userId, userId])
            .leftJoinAndSelect("courses.author", "author")
            .leftJoinAndSelect("courses.category", "category")
            .leftJoinAndSelect("courses.difficulty", "difficulty")
            .leftJoinAndSelect("courses.language", "language")
            .getMany()

        const rawCourses = await Course.find()
        for (let course of rawCourses){
            course.image = this.config.getOrThrow<string>('BASE_URL')
        }

        if (userId) {
            for (const course of courses) {
                //@ts-ignore
                course.isLiked = Boolean(course.likes?.length)
            }
        }
            return plainToInstance(CourseListAdminDto, courses, {excludeExtraneousValues: true})

    }

    async getOne(id: string){
        const course = await Course.findOneBy({id: +id})
        if(!course){
            throw new NotFoundException("Course not found")
        }
        return course
    }

    async create(payload: CourseCreateAdminDto, image: Express.Multer.File){
        const course = Course.create({...payload, image: image.path})
        await Course.save(course)
        return course
    }

    async update(id: string, payload: CourseUpdateAdminDto, image: Express.Multer.File){
        const course = await Course.findOneBy({id: +id})
        if(!course){
            throw new NotFoundException("Course not found")
        }
        Object.assign(course,
            Object.fromEntries(
                Object.entries(payload).filter(([key, value]) => value)
            ))
        await Course.save(course)
        return course
    }

    async delete(id: string){
        const course = await Course.findOneBy({id: +id})
        if(!course){
            throw new NotFoundException("Course not found")
        }
        await Course.remove(course)
        return {message: "Deleted successfully"}
    }

}