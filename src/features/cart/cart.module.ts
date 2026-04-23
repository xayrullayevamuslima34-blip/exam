import { Module } from '@nestjs/common';
import { CartItemsAdminController } from './controllers/cartItems.admin.controller';
import { CartItemsPublicController } from './controllers/cartItems.public.controller';
import { CartItemsAdminService } from './services/cartItems.admin.service';
import { CartItemsPublicService } from './services/cartItems.public.service';
import { CartItems } from './entities/cart.entity';
import { CartItemsRepository } from './repositories/cart.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CartItems])],
  controllers: [CartItemsAdminController, CartItemsPublicController],
  providers: [CartItemsAdminService, CartItemsPublicService, CartItemsRepository],
})
export class CartModule {
}