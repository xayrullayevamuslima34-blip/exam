import { Injectable, NotFoundException } from '@nestjs/common';
import { CartFilter } from '../filters/cart.filter';
import { ConfigService } from '@nestjs/config';
import { CartItemsRepository} from '../repositories/cart.repository';

@Injectable()
export class CartItemsAdminService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: CartItemsRepository) {
  }

  async getAll(filter: CartFilter) {
    return await this.repo.getAll(filter);
  }

  async getOne(id: number) {
    const cart = await this.repo.getOneById(id);
    if (!cart) {
      throw new NotFoundException('Cart with the given id not found');
    }
    return cart;
  }

}