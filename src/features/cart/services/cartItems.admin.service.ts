import { Injectable, NotFoundException } from '@nestjs/common';
import { CartItems } from '../entities/cart.entity';

@Injectable()
export class CartItemsAdminService {
  async getAll(){
    return await CartItems.find()
  }

  async getOne(id: number){
    const cart = CartItems.findOneBy({ id: id })
    if (!cart){
      throw new NotFoundException("Cart with the given id not found")
    }
    return cart
  }

}