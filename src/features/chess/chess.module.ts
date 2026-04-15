import { Module } from '@nestjs/common';
import { PlayerAdminController } from './players/controllers/player.admin.controller';
import { PlayerPublicController } from './players/controllers/player.public.controller';
import { PlayerAdminService } from './players/service/player.admin.service';
import { PlayerPublicService } from './players/service/player.public.service';
import { MatchAdminController } from './matches/controllers/match.admin.controller';
import { MatchPublicController } from './matches/controllers/match.public.controller';
import { MatchAdminService } from './matches/service/match.admin.service';
import { MatchPublicService } from './matches/service/match.public.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { jwtConfig } from '../../config/jwt.config';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: jwtConfig,
    }),
  ],
  controllers: [PlayerAdminController, PlayerPublicController,
    MatchAdminController, MatchPublicController],

  providers: [PlayerAdminService, PlayerPublicService,
    MatchAdminService, MatchPublicService],
})
export class ChessModule {
}