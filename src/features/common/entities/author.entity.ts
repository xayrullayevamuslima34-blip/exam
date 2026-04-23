import {BaseModel} from "../../../core/base-module";
import {Column, Entity, OneToMany} from "typeorm";
import {Book} from "../../library/entities/book.entity";
import {Course} from "../../courses/entities/course.entity";

@Entity("authors")
export class Author extends BaseModel{
    @Column({type: "varchar", length: 64})
    fullName!: string;

    @OneToMany(() => Book, (book) => book.author)
    book?: Book[];

    @OneToMany(() => Course, (course) => course.author)
    course?: Course[];
}