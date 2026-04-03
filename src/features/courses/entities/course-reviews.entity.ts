import {BaseModel} from "../../../core/base-module";
import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {Course} from "./course.entity";
import {User} from "../../authorization/auth/entities/authentication.entity";
import {Users} from "../../common/users/entities/user.entity";

@Entity("course-reviews")
export class CourseReviews extends BaseModel{
    @Column()
    userId!: number;

    @ManyToOne(() => Users, (user) => user.courseReview, {onDelete: "RESTRICT"})
    @JoinColumn({name: "userId"})
    user!: Users;

    @Column()
    courseId!: number;

    @ManyToOne(() => Course, (Course) => Course.courseReview, {onDelete: "RESTRICT"})
    @JoinColumn({name: "courseId"})
    course!: Course;

    @Column()
    rating!: number;

    @Column({type: "varchar", length: 512, nullable: true})
    comment!: string;

    @Column({type: "timestamp"})
    date!: string;
}