import { Module } from '@nestjs/common';
import { CartItemsAdminController } from './controllers/cartItems.admin.controller';
import { CartItemsPublicController } from './controllers/cartItems.public.controller';
import { CartItemsAdminService } from './services/cartItems.admin.service';
import { CartItemsPublicService } from './services/cartItems.public.service';

@Module({
  imports: [],
  controllers: [CartItemsAdminController, CartItemsPublicController],
  providers: [CartItemsAdminService, CartItemsPublicService],
})
export class CartModule {
}