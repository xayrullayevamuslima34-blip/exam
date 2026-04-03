import { Injectable, NotFoundException } from "@nestjs/common";
import {AuthorsCreateAdminDto} from "../dtos/admin/author.create.admin.dto";
import {AuthorsUpdateAdminDto} from "../dtos/admin/author.update.admin.dto";
import {Author} from "../entities/author.entity";

@Injectable()
export class AuthorsAdminService {

    async getAll() {
        return await Author.find();
    }

    async getOne(id: number) {
        const author = await Author.findOneBy({ id });
        if (!author) {
            throw new NotFoundException('Author not found');
        }
        return author;
    }

    async create(payload: AuthorsCreateAdminDto) {
        const author = Author.create(payload as Author);
        await Author.save(author);
        return author;
    }

    async update(id: number, payload: AuthorsUpdateAdminDto) {
        const author = await Author.findOneBy({ id });
        if (!author) {
            throw new NotFoundException('Author not found');
        }

        Object.assign(
            author,
            Object.fromEntries(Object.entries(payload).filter(([_, value]) => value !== undefined))
        );

        await Author.save(author);
        return author;
    }

    async delete(id: number) {
        const author = await Author.findOneBy({ id });
        if (!author) {
            throw new NotFoundException('Author not found');
        }

        await Author.remove(author);
        return { message: 'Author deleted successfully' };
    }
}