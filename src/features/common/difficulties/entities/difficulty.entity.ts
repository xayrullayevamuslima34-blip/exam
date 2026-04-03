import {Column, Entity, OneToMany} from "typeorm";
import {BaseModel} from "../../../../core/base-module";
import {Book} from "../../../library/entities/book.entity";
import {Course} from "../../../courses/entities/course.entity";

@Entity("difficulties")
export class Difficulty extends BaseModel{
    @Column({type: "varchar", length: 32, unique: true})
    title!: string;

    @Column({type: "varchar", length: 128})
    icon!: string;

    @OneToMany(() => Book, (book) => book.difficulty)
    book?: Book[]

    @OneToMany(() => Course, (Course) => Course.difficulty)
    course?: Course[];
}