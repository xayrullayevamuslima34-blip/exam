import {BaseModel} from "../../../core/base-module";
import {Column, Entity, OneToMany} from "typeorm";
import {Course} from "./course.entity";

@Entity("course-categories")
export class CourseCategories extends BaseModel{
    @Column({type: "varchar", length: 64, unique: true})
    title!: string;

    @OneToMany(() => Course, (Course) => Course.category)
    course!: Course[];
}