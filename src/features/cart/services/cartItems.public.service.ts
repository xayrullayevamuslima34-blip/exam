import { Injectable, NotFoundException } from '@nestjs/common';
import { CartItems } from '../entities/cart.entity';
import { CartItemCreatePublicDto } from '../dtos/cart/public/cart-item.create.public.dto';
import { CartItemUpdatePublicDto } from '../dtos/cart/public/cart-item.update.public.dto';

@Injectable()
export class CartItemsPublicService {
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

  async create(payload: CartItemCreatePublicDto){
    const cart = CartItems.create(payload as CartItems)
    await CartItems.save(cart)
    return cart
  }

  async update(id: number, payload: CartItemUpdatePublicDto){
    const cart = await CartItems.findOneBy({ id: id })
    if (!cart){
      throw  new NotFoundException("Cart with the given id not found")
    }
    Object.assign(cart ,payload)
    await CartItems.save(cart)
    return cart
  }

  async delete(id: number){
    const cart = await CartItems.findOneBy({ id: id })
    if (!cart){
      throw new NotFoundException("Cart with the given id not found")
    }
    await CartItems.remove(cart)
    return cart
  }

}