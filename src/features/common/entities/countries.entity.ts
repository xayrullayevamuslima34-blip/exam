import {BaseModel} from "../../../core/base-module";
import {Column, Entity, OneToMany} from "typeorm";
import {Player} from "../../chess/entities/player.entity";

@Entity("countries")
export class Countries extends BaseModel{
    @Column({type: "varchar", length: 64})
    title!: string;

    @Column({type: "varchar", length: 128})
    flag!: string;

    @OneToMany(() => Player, (player) => player.country)
    player?: Player[];
}