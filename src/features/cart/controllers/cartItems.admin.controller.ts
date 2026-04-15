import { Body, Controller, Delete, Get, Param, ParseIntPipe} from '@nestjs/common';
import { CartItemsAdminService } from '../services/cartItems.admin.service';

@Controller()
export class CartItemsAdminController {

  constructor(private readonly cartService: CartItemsAdminService) {
  }

  @Get()
  async getAll() {
    return this.cartService.getAll();
  }

  @Get('id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return this.cartService.getOne(id);
  }

}