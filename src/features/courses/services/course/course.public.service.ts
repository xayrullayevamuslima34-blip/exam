import { Injectable, NotFoundException } from "@nestjs/common";
import { Course } from "../../entities/course.entity";
import { CourseFilter } from '../../filters/course.filter';
import { ConfigService } from '@nestjs/config';
import { CourseRepository } from '../../repositories/course.repository';

@Injectable()
export class CoursePublicService {

    constructor(protected readonly config: ConfigService,
                protected readonly repo: CourseRepository) {}

    async getAll(filter: CourseFilter, userId?: number) {
        const courses = await Course.createQueryBuilder("courses")
            .leftJoinAndSelect(
                "courses.likes",
                "likes",
                userId ? "likes.userId = :userId" : undefined,
                userId ? { userId } : undefined
            )
            .leftJoinAndSelect("courses.author", "author")
            .leftJoinAndSelect("courses.category", "category")
            .leftJoinAndSelect("courses.language", "language")
            .leftJoinAndSelect("courses.difficulty", "difficulty")
            .getMany();

        if (userId) {
            for (const course of courses) {
                //@ts-ignore
                course.isLiked = Boolean(course.likes?.length);
            }
        }
        return this.repo.getAll(filter)
    }

    async getOne(id: number, userId?: number) {
        const course = await Course.createQueryBuilder("courses")
            .leftJoinAndSelect(
                "courses.likes",
                "likes",
                userId ? "likes.userId = :userId" : undefined,
                userId ? { userId } : undefined
            )
            .leftJoinAndSelect("courses.author", "author")
            .leftJoinAndSelect("courses.category", "category")
            .leftJoinAndSelect("courses.language", "language")
            .leftJoinAndSelect("courses.difficulty", "difficulty")
            .where("courses.id = :id", { id })
            .getOne();

        if (!course) {
            throw new NotFoundException("Course not found");
        }

        if (userId) {
            //@ts-ignore
            course.isLiked = Boolean(course.likes?.length);
        }

        return course;
    }
}