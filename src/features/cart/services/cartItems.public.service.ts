import { Injectable, NotFoundException } from '@nestjs/common';
import { CartItems } from '../entities/cart.entity';
import { CartItemCreatePublicDto } from '../dtos/cart/public/cart-item.create.public.dto';
import { CartItemUpdatePublicDto } from '../dtos/cart/public/cart-item.update.public.dto';
import { CartFilter } from '../filters/cart.filter';
import { CartItemsRepository} from '../repositories/cart.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CartItemsPublicService {

  constructor(protected readonly config: ConfigService,
              protected readonly repo: CartItemsRepository) {
  }

  async getAll(filter: CartFilter){
    return await this.repo.getAll(filter)
  }

  async getOne(id: number){
    const cart = await this.repo.getOneById(id)
    if (!cart){
      throw new NotFoundException("Cart with the given id not found")
    }
    return cart
  }

  async create(payload: CartItemCreatePublicDto){
    const cart = CartItems.create(payload as CartItems)
    return await this.repo.save(cart)
  }

  async update(id: number, payload: CartItemUpdatePublicDto){
    const cart = await this.repo.getOneById(id)
    if (!cart){
      throw  new NotFoundException("Cart with the given id not found")
    }
    Object.assign(cart ,payload)
    return  await this.repo.save(cart)
  }

  async delete(id: number){
    const cart = await this.repo.getOneById(id)
    if (!cart){
      throw new NotFoundException("Cart with the given id not found")
    }
    return await this.repo.delete(cart)
  }

}