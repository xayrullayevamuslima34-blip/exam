import {BaseModel} from "../../../core/base-module";
import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {CourseLessons} from "./course-lessons.entity";
import {Users} from "../../common/entities/user.entity";

@Entity("course-user-lessons")
export class CourseUserLessons extends BaseModel{
    @Column()
    userId!: number;

    @ManyToOne(() => Users, (User) => User.courseUserLesson, {onDelete: "RESTRICT"})
    @JoinColumn({name: "userId"})
    user!: Users[];

    @Column()
    courseLessonId!: number;

    @ManyToOne(() => CourseLessons, (CourseLessons) => CourseLessons.courseUserLesson, {onDelete: "RESTRICT"})
    @JoinColumn({name: "courseLessonId"})
    courseLesson!: CourseLessons[];

    @Column({nullable: true})
    stoppedAt!: number;

    @Column({default: false})
    isCompleted!: boolean;
}