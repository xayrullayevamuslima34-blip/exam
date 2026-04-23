import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseLikes } from '../../entities/course-likes.entity';
import { User } from '../../../authorization/entities/authentication.entity';
import { Course } from '../../entities/course.entity';
import { CourseLikesFilter } from '../../filters/course-likes.filter';
import { CourseLikesRepository } from '../../repositories/course-likes.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CourseLikesPublicService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: CourseLikesRepository) {
  }

  async getAll(filter: CourseLikesFilter) {
    return await this.repo.getAll(filter);
  }

  async getOne(id: number) {
    const like = await this.repo.getOneById(id);
    if (!like) {
      throw new NotFoundException('Course not found');
    }
    return like;
  }

  async toggleLike(courseId: number, userId: number) {
    const user = await User.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const course = await Course.findOneBy({ id: courseId });
    if (!course) {
      throw new NotFoundException('Course not found');
    }

    const like = await CourseLikes.findOneBy({ userId, courseId });
    if (like) {
      await this.repo.delete(like);
      return { message: 'Removed' };
    } else {
      const newLike = CourseLikes.create({ userId: user.id, courseId: course.id });
      await this.repo.save(newLike);
      return { message: 'Liked' };
    }
  }
}