import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { CartItemsAdminService } from '../services/cartItems.admin.service';
import { Roles } from '../../../core/decorators/roles.decorator';
import { Role } from '../../../core/enums/role.enum';
import { CartFilter } from '../filters/cart.filter';
import { PaginatedResult } from '../../../core/paginatedResult.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller("admin/cartItems")
@Roles(Role.Admin, Role.SuperAdmin)
export class CartItemsAdminController {

  constructor(private readonly cartService: CartItemsAdminService) {
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

}