import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-module';
import { Souvenirs } from './souvenirs.entity';
import { Users } from '../../common/users/entities/user.entity';

@Entity('souvenirLikes')
export class SouvenirLikes extends BaseModel{
  @Column()
  userId!: number;

  @ManyToOne(() => Users, (user) => user.souvenirLikes)
  @JoinColumn({name: 'userId'})
  user!: Users;

  @Column()
  souvenirId!: number;

  @ManyToOne(() => Souvenirs, (souvenirs) => souvenirs.souvenirLikes)
  @JoinColumn({name: 'souvenirId'})
  souvenir!: Souvenirs;
}