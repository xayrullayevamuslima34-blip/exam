import {Injectable, NotFoundException} from "@nestjs/common";
import { BookReviewFilter } from '../../filters/book-review.filter';
import { BookReviewRepository } from '../../repositories/book-review.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BookReviewPublicService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: BookReviewRepository) {
    }

    async getAll(filter: BookReviewFilter) {
        return await this.repo.getAll(filter)
    }

    async getOne(id: number){
        const review = await this.repo.getOneById(id)
        if(!review){
            throw new NotFoundException("Book not found")
        }
        return review
    }
}