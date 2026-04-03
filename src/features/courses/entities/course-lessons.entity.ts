import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import {BaseModel} from "../../../core/base-module";
import {Course} from "./course.entity";
import {CourseSections} from "./course-sections.entity";
import {CourseUserLessons} from "./course-user-lessons.entity";

@Entity("course-lessons")
export class CourseLessons extends BaseModel{
    @Column()
    courseId!: number;

    @ManyToOne(() => Course, (Course) => Course.courseLessons, {onDelete: "RESTRICT"})
    @JoinColumn({name: "courseId"})
    course!: Course;

    @Column()
    courseSectionId!: number;

    @ManyToOne(() => CourseSections, (CourseSections) => CourseSections.courseLessons, {onDelete: "RESTRICT"})
    @JoinColumn({name: "courseSectionId"})
    courseSection!: CourseSections;

    @Column({type: "varchar", length: 128})
    title!: string;

    @Column({type: "text", nullable: true})
    content!: string;

    @Column({type: "varchar", length: 128})
    thumbnail!: string;

    @Column({type: "varchar", length: 256})
    video!: string;

    @Column({nullable: true})
    order!: number;

    @Column({type: "timestamp"})
    date!: string;

    @Column({default: false})
    isFree!: boolean;

    @OneToMany(() => CourseUserLessons, (CourseUserLessons) => CourseUserLessons.courseLesson)
    courseUserLesson?: CourseUserLessons[];
}