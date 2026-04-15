import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class BaseModel extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @CreateDateColumn({type: 'timestamp'})
    createdAt!: string;

    @UpdateDateColumn({type: 'timestamp', nullable: true})
    updatedAt?: string;
}
