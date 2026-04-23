import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import {User} from "../../../authorization/entities/authentication.entity";
import {ReportsCreatePublicDto} from "../../dtos/reports/public/reports.create.public.dto";
import {ReportCategories} from "../../entities/report-categories.entity";
import {BookReview} from "../../../library/entities/book-review.entity";
import {CourseReviews} from "../../../courses/entities/course-reviews.entity";
import {ReportType} from "../../../../core/enums/report-type.enum";
import {Reports} from "../../entities/reports.entity";
import { ConfigService } from '@nestjs/config';
import { ReportsRepository } from '../../repositories/report.repository';

@Injectable()
export class ReportsPublicService {

    constructor(protected readonly config: ConfigService,
                protected readonly repo: ReportsRepository) {
    }

    async create(userId: number, payload: ReportsCreatePublicDto) {
        const user = await User.findOneBy({ id: userId });
        if (!user) {
            throw new NotFoundException('User does not exist anymore');
        }

        const category = await ReportCategories.findOneBy({ id: payload.reportCategoryId });
        if (!category) {
            throw new NotFoundException('ReportCategory with given id not found');
        }

        let review: BookReview | CourseReviews | null;
        if (payload.target === ReportType.Book) {
            review = await BookReview.findOneBy({ id: payload.targetId });
        } else {
            review = await CourseReviews.findOneBy({ id: payload.targetId });
        }

        if (!review) {
            throw new NotFoundException('Review with given id not found');
        }

        const alreadyExists = await Reports.findOneBy({
            userId: userId,
            targetId: payload.targetId,
            reportCategoryId: payload.reportCategoryId,
        });

        if (alreadyExists) {
            throw new ConflictException('Report already exists');
        }

        const newReport = Reports.create({ ...payload, userId });
        return await this.repo.save(newReport);
    }
}