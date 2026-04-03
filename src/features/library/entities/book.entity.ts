import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import {BaseModel} from "../../../core/base-module";
import {Author} from "../../common/author/entities/author.entity";
import {Language} from "../../common/languages/entities/language.entity";
import {Difficulty} from "../../common/difficulties/entities/difficulty.entity";
import {BookCategory} from "./book-category.entity";
import {BookReview} from "./book-review.entity";
import {BookLike} from "./book-like.entity";

@Entity('books')
export class Book extends BaseModel {
    @Column()
    authorId!: number;

    @ManyToOne(() => Author, (author) => author.book, { onDelete: 'RESTRICT'})
    @JoinColumn({name: 'authorId'})
    author?: Author;

    @Column()
    categoryId!: number;

    @ManyToOne(() => BookCategory, (bookCategory) => bookCategory.book, {onDelete: 'RESTRICT'})
    @JoinColumn({name: 'categoryId'})
    category!: BookCategory;

    @Column()
    languageId!: number;

    @ManyToOne(() => Language, (language) => language.book, {onDelete: 'RESTRICT'})
    @JoinColumn({name: 'languageId'})
    language?: Language;

    @Column()
    difficultyId!: number;

    @ManyToOne(() => Difficulty, (Difficulty) => Difficulty.book, {onDelete: 'RESTRICT'})
    @JoinColumn({name: 'difficultyId'})
    difficulty?: Difficulty;

    @Column({length: 120})
    title!: string;

    @Column({length: 128, nullable: true})
    image?: string;

    @Column({type: 'text'})
    description!: string;

    @Column({type: 'decimal', precision: 12, scale: 2})
    price!: number;

    @Column({type: 'decimal', precision: 12, scale: 2, nullable: true})
    newPrice!: number;

    @Column({type: 'decimal', precision: 12, scale: 2, nullable: true})
    rating?: number;

    @Column({default: 0})
    reviewsCount!: number;

    @Column()
    pages!: number;

    @Column({type: 'date'})
    pubDate!: Date;

    @OneToMany(() => BookLike, (like) => like.book)
    likes?: BookLike[]

    @OneToMany(() => BookReview, (review) => review.book)
    review?: BookReview[];
}