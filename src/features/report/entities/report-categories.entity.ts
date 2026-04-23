import {Column, Entity, OneToMany} from "typeorm";
import {Reports} from "./reports.entity";
import {BaseModel} from "../../../core/base-module";

@Entity("report-categories")
export class ReportCategories extends BaseModel{
    @Column({length: 64, unique: true})
    title!: string;

    @Column({nullable: true})
    order!: number;

    @OneToMany(() => Reports, (reports) => reports.reportCategory)
    reports?: Reports;
}