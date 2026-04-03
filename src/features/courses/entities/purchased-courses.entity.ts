import {BaseModel} from "../../../core/base-module";
import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {Course} from "./course.entity";
import {Users} from "../../common/users/entities/user.entity";

@Entity("purchased-courses")
export class PurchasedCourses extends BaseModel{
    @Column()
    userId!: number;

    @ManyToOne(() => Users, (Users) => Users.purchasedCourse, {onDelete: "RESTRICT"})
    @JoinColumn({name: "userId"})
    user!: Users[];

    @Column()
    courseId!: number;

    @ManyToOne(() => Course, (Course) => Course.purchasedCourse, {onDelete: "RESTRICT"})
    @JoinColumn({name: "courseId"})
    course!: Course[];

    @Column({default: false})
    isCompleted!: boolean;

    @Column({type: "timestamp"})
    date!: string;
}