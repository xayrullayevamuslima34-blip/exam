import {BaseModel} from "../../../core/base-module";
import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {Course} from "./course.entity";
import {Users} from "../../common/entities/user.entity";

@Entity("course-likes")
export class CourseLikes extends BaseModel{
    @Column()
    userId!: number;

    @ManyToOne(() => Users, (user) => user.courseLike, {onDelete: "RESTRICT"})
    @JoinColumn({name: "userId"})
    user!: Users[];

    @Column()
    courseId!: number;

    @ManyToOne(() => Course, (Course) => Course.courseLikes, {onDelete: "RESTRICT"})
    @JoinColumn({name: "courseId"})
    course!: Course[];

    @Column({type: "timestamp"})
    date!: string;
}