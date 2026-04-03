import {Column, Entity, OneToMany} from "typeorm";
import {BaseModel} from "../../../../core/base-module";
import {Book} from "../../../library/entities/book.entity";
import {Course} from "../../../courses/entities/course.entity";

@Entity("languages")
export class Language extends BaseModel{
    @Column({type: "varchar", length: 32, unique: true})
    title!: string;

    @Column({type: "varchar", length: 2, unique: true})
    code!: string;

    @OneToMany(() => Book, (book) => book.language)
    book?: Book[];

    @OneToMany(() => Course, (Course) => Course.language)
    course!: Course[];
}