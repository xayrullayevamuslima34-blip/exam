import { ConfigService } from '@nestjs/config';
import { BaseRepository } from '../../../core/repositories/base.repository';
import { FindOptionsWhere, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CartItems } from '../entities/cart.entity';
import { CartFilter } from '../filters/cart.filter';

export class CartItemsRepository extends BaseRepository<CartItems>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(CartItems)
    protected readonly repo: Repository<CartItems>
  ) {
    super();
  }

  async getAll(filters : CartFilter){
    const whereOptions: FindOptionsWhere<CartItems> = {}

    if(filters.userId){
      whereOptions.userId = filters.userId
    }
    return await super.getAll(filters, whereOptions)
  }

}