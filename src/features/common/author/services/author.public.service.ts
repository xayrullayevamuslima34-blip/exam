import { Injectable } from "@nestjs/common";
import {Author} from "../entities/author.entity";

@Injectable()
export class AuthorsPublicService {
    async getAll() {
        return await Author.find();
    }
}