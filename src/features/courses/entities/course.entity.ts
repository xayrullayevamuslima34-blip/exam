import {BaseModel} from "../../../core/base-module";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import {CourseCategories} from "./course-categories.entity";
import {Language} from "../../common/entities/language.entity";
import {CourseLessons} from "./course-lessons.entity";
import {CourseLikes} from "./course-likes.entity";
import {CourseReviews} from "./course-reviews.entity";
import {CourseSections} from "./course-sections.entity";
import {PurchasedCourses} from "./purchased-courses.entity";
import {Difficulty} from "../../common/entities/difficulty.entity";
import {Author} from "../../common/entities/author.entity";

@Entity("courses")
export class Course extends BaseModel{
    @Column()
    authorId!: number;

    @ManyToOne(() => Author, author => author.course, {onDelete: "RESTRICT"})
    @JoinColumn({name: "authorId"})
    author!: Author[];

    @Column()
    categoryId!: number;

    @ManyToOne(() => CourseCategories, CourseCategories => CourseCategories.course, {onDelete: "RESTRICT"})
    @JoinColumn({name: "categoryId"})
    category!: CourseCategories[];

    @Column()
    languageId!: number;

    @ManyToOne(() => Language, (Language) => Language.course, {onDelete: "RESTRICT"})
    @JoinColumn({name: 'languageId'})
    language!: Language[];

    @Column()
    difficultyId!: number;

    @ManyToOne(() => Difficulty, (Difficult) => Difficult.course, {onDelete: "RESTRICT"})
    @JoinColumn({name: "difficultId"})
    difficulty!: Difficulty[];

    @Column({type: "varchar", length: 128})
    title!: string;

    @Column({type: "varchar", length: 128})
    image!: string;

    @Column({type: "decimal"})
    price!: number;

    @Column({type: "decimal", nullable: true})
    newPrice?: number;

    @Column({default: 0})
    reviewsCount!: number;

    @Column({type: "decimal", nullable: true})
    rating?: number;

    @Column({default: 0})
    sectionsCount!: number;

    @Column({default: 0})
    lessonsCount!: number;

    @OneToMany(() => CourseLessons, (CourseLessons) => CourseLessons.course)
    courseLessons!: CourseLessons[];

    @OneToMany(() => CourseLikes, (CourseLikes) => CourseLikes.course)
    courseLikes!: CourseLikes[];

    @OneToMany(() => CourseReviews, (CourseReviews) => CourseReviews.course)
    courseReview?: CourseReviews[];

    @OneToMany(() => CourseSections, (CourseSections) => CourseSections.course)
    courseSection?: CourseSections[];

    @OneToMany(() => PurchasedCourses, (PurchasedCourses) => PurchasedCourses.course)
    purchasedCourse?: PurchasedCourses[];
}