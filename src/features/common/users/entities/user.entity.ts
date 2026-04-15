import {Column, Entity, OneToMany} from "typeorm";
import {Role} from "../../../../core/enums/role.enum";
import {LoginType} from "../../../../core/enums/login-type.enum";
import {BaseModel} from "../../../../core/base-module";
import {BookReview} from "../../../library/entities/book-review.entity";
import {CourseLikes} from "../../../courses/entities/course-likes.entity";
import {CourseReviews} from "../../../courses/entities/course-reviews.entity";
import {PurchasedCourses} from "../../../courses/entities/purchased-courses.entity";
import {CourseUserLessons} from "../../../courses/entities/course-user-lessons.entity";
import {OtpCode} from "../../../authorization/otp-codes/entities/otp-codes.entity";
import { SouvenirLikes } from '../../../souvenirs/entities/souvenirLikes.entity';
import { SouvenirReviews } from '../../../souvenirs/entities/souvenirReviews.entity';
import { CartItems } from '../../../cart/entities/cart.entity';

@Entity("users")
export class Users extends BaseModel {
    @Column({default: "user"})
    role!: Role;

    @Column({type: "varchar", length: 64})
    fullName!: string;

    @Column({type: "varchar", length: 128, nullable: true})
    profileImage?: string;

    @Column({type: "varchar", length: 64, unique: true})
    login!: string;

    @Column()
    loginType!: LoginType;

    @Column({type: "varchar", length: 128, nullable: true})
    password?: string;

    @Column({type: "date", nullable: true})
    birthDate?: string;

    @Column({default: false})
    isVerified!: boolean;

    @Column({default: false})
    isActive!: boolean;

    @OneToMany(() => BookReview, (review) => review.user)
    bookReviews?: BookReview[];

    @OneToMany(() => CourseLikes, (CourseLikes) => CourseLikes.user)
    courseLike?: CourseLikes[];

    @OneToMany(() => CourseReviews, (CourseReviews) => CourseReviews.user)
    courseReview?: CourseReviews[];

    @OneToMany(() => PurchasedCourses, (PurchasedCourses) => PurchasedCourses.user)
    purchasedCourse?: PurchasedCourses[];

    @OneToMany(() => CourseUserLessons, (CourseUserLessons) => CourseUserLessons.user)
    courseUserLesson?: CourseUserLessons[];

    @OneToMany(() => OtpCode, (otpCode) => otpCode.user)
    otpCodes?: OtpCode[];

    @OneToMany(() => CartItems , (cart) => cart.user)
    carts?: CartItems[];

    @OneToMany(() => SouvenirLikes, (souvenirLikes) => souvenirLikes.user)
    souvenirLikes?: SouvenirLikes[];

    @OneToMany(() => SouvenirReviews , (souvenirReview ) => souvenirReview.user)
    souvenirReview?: SouvenirReviews[];

}