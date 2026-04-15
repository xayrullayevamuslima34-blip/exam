import { Injectable, NotFoundException } from "@nestjs/common";
import { Course } from "../../entities/course.entity";
import { CourseFilter } from '../../filters/course.filter';
import { FindOptionsWhere, ILike } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { PaginationResultCourseDto } from '../../filters/pagination-result.course.dto';
import { CourseListPublicDto } from '../../dtos/courses/public/course.list.public.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CoursePublicService {

    constructor(private readonly config: ConfigService) {}

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

        let whereOptions: FindOptionsWhere<Course> = {}
        const take = filter.size ?? this.config.getOrThrow<number>('DEFAULT_SIZE')
        const currentPage = filter.page ?? this.config.getOrThrow<number>('DEFAULT_PAGE')
        const skip = (currentPage - 1 ) * take

        if(filter.search){
            whereOptions.title = ILike(`%${filter.search}%`)
        }

        const totalCount = await Course.countBy(whereOptions)
        const totalPages = Math.ceil(totalCount / take)
        const nextPage = currentPage < totalPages ? currentPage + 1 : 1;

        const news = await Course.find({where: whereOptions, take: take, skip: skip})
        const data = plainToInstance(CourseListPublicDto, news, {excludeExtraneousValues: true})
        return {totalCount, totalPages, currentPage, nextPage, data} as PaginationResultCourseDto
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