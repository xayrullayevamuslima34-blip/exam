import { BaseModel } from '../../../core/base-module';
import { Column, Entity, OneToMany } from 'typeorm';
import { SouvenirColors } from '../../souvenirs/entities/souvenirColors.entity';

@Entity('colors')
export class Color extends BaseModel {
  @Column({ length: 28, unique: true })
  title!: string;

  @Column({ length: 10, unique: true })
  color!: string;

  @OneToMany(() => SouvenirColors, (souvenirColor) => souvenirColor.color)
  souvenirColor?: SouvenirColors[];

}