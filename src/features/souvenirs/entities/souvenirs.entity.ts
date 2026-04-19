import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../../../core/base-module';
import { SouvenirImages } from './souvenirImages.entity';
import { SouvenirColors } from './souvenirColors.entity';
import { SouvenirLikes } from './souvenirLikes.entity';
import { SouvenirReviews } from './souvenirReviews.entity';

@Entity('souvenirs')
export class Souvenirs extends BaseModel{
  @Column({length: 128})
  title!: string;

  @Column({type: 'text'})
  description!: string;

  @Column({type: 'decimal', precision: 12, scale: 2})
  price!: number;

  @OneToMany(() => SouvenirImages, (souvenirImage) => souvenirImage.souvenir)
  souvenirImage?: SouvenirImages[];

  @OneToMany(() => SouvenirColors, (souvenirColor) => souvenirColor.souvenir)
  souvenirColor?: SouvenirColors[];

  @OneToMany(() => SouvenirLikes, (souvenirLikes) => souvenirLikes.souvenir)
  souvenirLikes?: SouvenirLikes[];

  @OneToMany(() => SouvenirReviews, (souvenirReview) => souvenirReview.souvenir)
  souvenirReview?: SouvenirReviews[];

}