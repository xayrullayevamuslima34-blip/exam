import {Injectable, NotFoundException} from "@nestjs/common";
import { BookCategoryFilter } from '../../filters/book-category.filter';
import { BookCategoryRepository } from '../../repositories/book-category.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BookCategoryPublicService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: BookCategoryRepository) {
    }

    async getAll(filter: BookCategoryFilter){
        return await this.repo.getAll(filter)
    }

    async getOne(id: number){
        const category = await this.repo.getOneById(id)
        if(!category){
            throw new NotFoundException("Book not found")
        }
        return category
    }
}