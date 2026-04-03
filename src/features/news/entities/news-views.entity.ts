import {Column, Entity} from "typeorm";
import {BaseModel} from "../../../core/base-module";

@Entity("news-views")
export class NewsViews extends BaseModel{
    @Column()
    userId!: number;

    @Column()
    newsId!: number;

    @Column({type: "timestamp"})
    firstDate!: string;

    @Column({type: "timestamp"})
    lastDate!: string;

    @Column({default: 1})
    count!: number;
}