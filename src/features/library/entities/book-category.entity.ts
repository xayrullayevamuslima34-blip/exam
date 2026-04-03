import {BaseModel} from "../../../core/base-module";
import {Column, Entity, OneToMany} from "typeorm";
import {Book} from "./book.entity";

@Entity("book_category")
export class BookCategory extends BaseModel{
    @Column({type: "varchar",length: 64, unique: true})
    title!: string;

    @OneToMany(() => Book, (book) => book.category)
    book?: Book[]
}