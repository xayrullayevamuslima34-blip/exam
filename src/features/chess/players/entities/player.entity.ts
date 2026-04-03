import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import {BaseModel} from "../../../../core/base-module";
import {Countries} from "../../../common/countries/entities/countries.entity";
import {Match} from "../../matches/entities/match.entity";

@Entity("players")
export class Player extends BaseModel{
    @Column()
    countryId!: number;

    @ManyToOne(() => Countries, (country) => country.player)
    @JoinColumn({name: "countryId"})
    country!: Countries;

    @Column({length: 64})
    fullName!: string;

    @Column({length: 128, nullable: true})
    image?: string;

    @Column({nullable: true})
    classic?: number;

    @Column({nullable: true})
    rapid?: number;

    @Column({nullable: true})
    blitz?: number;

    @OneToMany(() => Match, (match) => match.fPlayer)
    firstMatch?: Match[];

    @OneToMany(() => Match, (match) => match.sPlayer)
    secondMatch: Match[];
}