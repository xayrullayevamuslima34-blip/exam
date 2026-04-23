import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-module';
import { Users } from '../../common/entities/user.entity';
import { CartItemType} from '../../../core/enums/cartItem-type.enum';

@Entity('cartItems')
export class CartItems extends BaseModel{
  @Column()
  userId!: number;

  @ManyToOne(() => Users, (user) => user.carts)
  @JoinColumn({name: 'user_id'})
  user!: Users;

  @Column({type: 'enum', enum: CartItemType})
  target!: CartItemType;

  @Column()
  targetId!: number; // souvenir, book

  @Column({default: 1})
  quantity!: number;

}