import {Injectable, NotFoundException} from "@nestjs/common";
import {BookCategory} from "../../entities/book-category.entity";
import {BookCategoryCreateAdminDto} from "../../dtos/book-category/admin/book-category.create.admin.dto";
import {BookCategoryUpdateAdminDto} from "../../dtos/book-category/admin/book-category.update.admin.dto";
import { BookCategoryFilter } from '../../filters/book-category.filter';
import { ConfigService } from '@nestjs/config';
import { BookCategoryRepository } from '../../repositories/book-category.repository';

@Injectable()
export class BookCategoryAdminService{

    constructor(protected readonly config: ConfigService,
                protected readonly repo: BookCategoryRepository) {
    }

    async getAll(filter: BookCategoryFilter){
        return await this.repo.getAll(filter)
    }

    async getOne(id: number){
        const category = await this.repo.getOneById(id)
        if(!category){
            throw new NotFoundException("Category not found")
        }
        return category
    }

    async create(payload: BookCategoryCreateAdminDto){
        const category = BookCategory.create(payload as BookCategory)
        return await this.repo.save(category)
    }

    async update(id: number, payload: BookCategoryUpdateAdminDto){
        const category = await this.repo.getOneById(id)
        if(!category){
            throw new NotFoundException("Category not found")
        }
        Object.assign(category, payload)
        return await this.repo.save(category)
    }

    async delete(id: number){
        const category = await this.repo.getOneById(id)
        if(!category){
            throw new NotFoundException("Category not found")
        }
        await this.repo.delete(category)
        return {message: "Deleted successfully"}
    }
}