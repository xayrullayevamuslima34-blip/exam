import {BaseModel} from "../../../../core/base-module";
import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {OtpType} from "../../../../core/enums/otp-type.enum";
import {Users} from "../../../common/users/entities/user.entity";

@Entity("OtpCodes")
export class OtpCode extends BaseModel{
    @Column()
    userId!: number;

    @ManyToOne(() => Users, (user) => user.otpCodes)
    @JoinColumn({name: "userId"})
    user?: Users;

    @Column({type: "varchar", length: 6})
    code!: string;

    @Column({type: "timestamp"})
    date!: string;

    @Column({type: 'enum', enum: OtpType})
    type!: OtpType;
}