import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-module';
import { Souvenirs } from './souvenirs.entity';
import { Color } from '../../common/colors/entities/color.entity';

@Entity('souvenir_colors')
export class SouvenirColors extends BaseModel{
  @Column()
  souvenirId!: number;

  @ManyToOne(() => Souvenirs, (souvenirs) => souvenirs.souvenirColor)
  @JoinColumn({name: 'souvenirId'})
  souvenir!: Souvenirs;

  @Column()
  colorId!: number;

  @ManyToOne(() => Color, (color) => color.souvenirColor)
  @JoinColumn({name: 'colorId'})
  color!: Color;

}