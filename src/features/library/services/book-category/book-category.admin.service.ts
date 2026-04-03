import {Body, Injectable, NotFoundException, Param} from "@nestjs/common";
import {BookCategory} from "../../entities/book-category.entity";
import {BookCategoryCreateAdminDto} from "../../dtos/book-category/admin/book-category.create.admin.dto";
import {BookCategoryUpdateAdminDto} from "../../dtos/book-category/admin/book-category.update.admin.dto";

@Injectable()
export class BookCategoryAdminService{
    async getAll(){
        return await BookCategory.find()
    }

    async getOne(@Param("id") id: string){
        const category = await BookCategory.findOneBy({id: +id})
        if(!category){
            throw new NotFoundException("Category not found")
        }
        return category
    }

    async create(@Body() payload: BookCategoryCreateAdminDto){
        const category = BookCategory.create(payload as BookCategory)
        await BookCategory.save(category)
        return category
    }

    async update(@Param("id") id: string, @Body() payload: BookCategoryUpdateAdminDto){
        const category = await BookCategory.findOneBy({id: +id})
        if(!category){
            throw new NotFoundException("Category not found")
        }
        Object.assign(category, payload)
        await BookCategory.save(category)
        return category
    }

    async delete(@Param("id") id: string){
        const category = await BookCategory.findOneBy({id: +id})
        if(!category){
            throw new NotFoundException("Category not found")
        }
        await BookCategory.remove(category)
        return {message: "Deleted successfully"}
    }
}