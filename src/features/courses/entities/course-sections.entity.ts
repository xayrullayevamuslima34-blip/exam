import {BaseModel} from "../../../core/base-module";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import {CourseLessons} from "./course-lessons.entity";
import {Course} from "./course.entity";

@Entity("course-sections")
export class CourseSections extends BaseModel{
    @Column()
    courseId!: number;

    @ManyToOne(() => Course, (Course) => Course.courseSection, {onDelete: "RESTRICT"})
    @JoinColumn({name: "courseId"})
    course!: Course[];

    @Column({type: "varchar", length: 256})
    title!: string;

    @Column({nullable: true})
    order!: number;

    @Column({type: "timestamp", })
    date!: string;

    @OneToMany(() => CourseLessons, (CourseLessons) => CourseLessons.courseSection)
    courseLessons?: CourseLessons[];
}