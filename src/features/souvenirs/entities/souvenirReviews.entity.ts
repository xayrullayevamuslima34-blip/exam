import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-module';
import { Users } from '../../common/entities/user.entity';
import { Souvenirs } from './souvenirs.entity';

@Entity('souvenirReviews')
export class SouvenirReviews extends BaseModel{
  @Column()
  userId!: number;

  @ManyToOne(() => Users, (users) => users.souvenirReview)
  @JoinColumn({name: 'userId'})
  user!: Users;

  @Column()
  souvenirId!: number;

  @ManyToOne(() => Souvenirs, (souvenir ) => souvenir.souvenirReview)
  @JoinColumn({name: 'souvenirId'})
  souvenir!: Souvenirs;

  @Column()
  rating!: number;

  @Column({length: 512, nullable: true})
  comment!: string;

}