import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-module';
import { Souvenirs } from './souvenirs.entity';

@Entity('souvenirImages')
export class SouvenirImages extends BaseModel{
  @Column()
  souvenirId!: number;

  @ManyToOne(() => Souvenirs, (souvenirs) => souvenirs.souvenirImage)
  @JoinColumn({name: 'souvenirId'})
  souvenir!: Souvenirs;

  @Column({length: 128})
  image: string;

}