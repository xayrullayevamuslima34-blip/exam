
import {Column, Entity} from 'typeorm'
import {BaseModel} from "../../../core/base-module";


@Entity('news')
export class News extends BaseModel{
    @Column({length: 256})
    title!: string;

    @Column({type: 'timestamp'})
    date!: string;

    @Column({length: 128})
    image: string;

    @Column({type: 'text'})
    content!: string;
}