import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {BaseModel} from "../../../core/base-module";
import {ReportType} from "../../../core/enums/report-type.enum";
import {ReportCategories} from "./report-categories.entity";

@Entity("reports")
export class Reports extends BaseModel{
    @Column()
    userId!: number

    @Column()
    reportCategoryId!: number;

    @ManyToOne(() => ReportCategories, (reportCategories) => reportCategories.reports)
    @JoinColumn({name: "reportCategoryId"})
    reportCategory!: ReportCategories;

    @Column({type: "enum", enum: ReportType})
    target!: ReportType;

    @Column()
    targetId!: number;

    @Column({type: "varchar", length: 256, nullable: true})
    description?: string;
}
