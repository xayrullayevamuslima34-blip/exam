import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CartItemsPublicService } from '../services/cartItems.public.service';
import { CartItemCreatePublicDto } from '../dtos/cart/public/cart-item.create.public.dto';
import { CartItemUpdatePublicDto } from '../dtos/cart/public/cart-item.update.public.dto';

@Controller()
export class CartItemsPublicController{

  constructor(private readonly cartService: CartItemsPublicService) {
  }

  @Get()
  async getAll() {
    return this.cartService.getAll();
  }

  @Get('id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return this.cartService.getOne(id);
  }

  @Post('create')
  async create(@Body() payload: CartItemCreatePublicDto) {
    return this.cartService.create(payload);
  }

  @Patch('update/:id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() payload: CartItemUpdatePublicDto) {
    return this.cartService.update(id, payload);
  }

  @Delete("delete/:id")
  async delete(@Param("id", ParseIntPipe) id: number){
    return this.cartService.delete(id)
  }

}