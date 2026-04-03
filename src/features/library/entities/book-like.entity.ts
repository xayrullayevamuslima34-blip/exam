import {BaseModel} from "../../../core/base-module";
import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {Book} from "./book.entity";
import {Users} from "../../common/users/entities/user.entity";

@Entity("book_like")
export class BookLike extends BaseModel{
    @Column()
    userId!: number;

    @ManyToOne(() => Users, (user) => user.bookReviews, {onDelete: "RESTRICT"})
    @JoinColumn({name: "userId"})
    user?: Users;

    @Column()
    bookId!: number;

    @ManyToOne(() => Book, (book) => book.likes)
    @JoinColumn({name: "bookId"})
    book!: Book;

    @Column({type: "timestamp"})
    date!: string;
}