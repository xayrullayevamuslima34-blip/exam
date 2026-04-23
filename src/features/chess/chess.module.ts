import { Module } from '@nestjs/common';
import { PlayerAdminController } from './controllers/players/player.admin.controller';
import { PlayerPublicController } from './controllers/players/player.public.controller';
import { PlayerAdminService } from './services/players/player.admin.service';
import { PlayerPublicService } from './services/players/player.public.service';
import { MatchAdminController } from './controllers/matches/match.admin.controller';
import { MatchPublicController } from './controllers/matches/match.public.controller';
import { MatchAdminService } from './services/matches/match.admin.service';
import { MatchPublicService } from './services/matches/match.public.service';
import { Match } from './entities/match.entity';
import { Player } from './entities/player.entity';
import { MatchRepository } from './repositories/match.repository';
import { PlayerRepository } from './repositories/player.repository';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Match, Player])],

  controllers: [PlayerAdminController, PlayerPublicController,
    MatchAdminController, MatchPublicController],

  providers: [PlayerAdminService, PlayerPublicService,
    MatchAdminService, MatchPublicService,
    MatchRepository, PlayerRepository
  ],
})
export class ChessModule {
}