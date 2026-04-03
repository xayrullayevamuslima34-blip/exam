import {BaseModel} from "../../../core/base-module";
import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {Book} from "./book.entity";
import {Users} from "../../common/users/entities/user.entity";

@Entity("book-reviews")
export class BookReview extends BaseModel{
    @Column()
    userId!: number;

    @ManyToOne(() => Users, (user) => user.bookReviews)
    @JoinColumn({name: "userId"})
    user!: Users;

    @Column()
    bookId!: number;

    @ManyToOne(() => Book, (book) => book.review)
    @JoinColumn({name: "bookId"})
    book!: Book;

    @Column()
    rating!: number;

    @Column({type: "varchar", length: 512, nullable: true})
    comment?: string;

    @Column({type: "timestamp"})
    date!: string;
}