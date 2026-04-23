import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CartItemsPublicService } from '../services/cartItems.public.service';
import { CartItemCreatePublicDto } from '../dtos/cart/public/cart-item.create.public.dto';
import { CartItemUpdatePublicDto } from '../dtos/cart/public/cart-item.update.public.dto';
import { CartFilter } from '../filters/cart.filter';
import { PaginatedResult } from '../../../core/paginatedResult.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller("public/cartItems")
export class CartItemsPublicController{

  constructor(private readonly cartService: CartItemsPublicService) {
  }

  @ApiOkResponse({type: [PaginatedResult]})
  @Get()
  async getAll(@Query() filter: CartFilter) {
    return this.cartService.getAll(filter);
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