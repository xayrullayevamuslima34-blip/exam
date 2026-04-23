import {Column, Entity, OneToMany} from "typeorm";
import {Role} from "../../../core/enums/role.enum";
import {LoginType} from "../../../core/enums/login-type.enum";
import {BaseModel} from "../../../core/base-module";
@Entity("users")
export class User extends BaseModel {
    @Column({type: "enum", enum: Role, default: Role.User,})
    role!: Role;

    @Column({type: "varchar", length: 64})
    fullName!: string;

    @Column({type: "varchar", length: 128, nullable: true})
    profileImage?: string;

    @Column({type: "varchar", length: 64, unique: true})
    login!: string;

    @Column({type: "enum", enum: LoginType,})
    loginType!: LoginType;

    @Column({type: "varchar", length: 128, nullable: true})
    password?: string;

    @Column({type: "date", nullable: true})
    birthDate?: string;

    @Column({default: false})
    isVerified!: boolean;

    @Column({default: false})
    isActive!: boolean;
}