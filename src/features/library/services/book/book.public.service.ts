import {Injectable, NotFoundException} from "@nestjs/common";
import { BookFilter } from '../../filters/book.filter';
import { BookRepository } from '../../repositories/book.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BookPublicService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: BookRepository) {}


    async getAll(filter: BookFilter){
        return await this.repo.getAll(filter);
    }

    async getOne(id: number){
        const book = await this.repo.getOneById(id)

        if(!book){
            throw new NotFoundException("Book not found")
        }

        return book
    }
}