import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {MatchType} from "../../../core/enums/match-type.enum";
import {Player} from "./player.entity";
import {WinnerType} from "../../../core/enums/winner-type.enum";
import {BaseModel} from "../../../core/base-module";

@Entity("matches")
export class Match extends BaseModel{
    @Column()
    firstPlayer!: number;

    @ManyToOne(() => Player, (player) => player.firstMatch)
    @JoinColumn({name: "firstPlayer"})
    fPlayer!: Player;

    @Column()
    firstPlayerResult!: number;

    @Column()
    secondPlayer!: number;

    @ManyToOne(() => Player, (player) => player.secondMatch)
    @JoinColumn({name: "secondPlayer"})
    sPlayer!: Player;

    @Column()
    secondPlayerResult!: number;

    @Column({type: "enum", enum: MatchType})
    type!: MatchType;

    @Column()
    moves!: number;

    @Column({type: "timestamp"})
    date!: number;

    @Column({type: "enum", enum: WinnerType})
    winner!: WinnerType;
}