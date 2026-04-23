import { Module } from '@nestjs/common';
import { SouvenirColorsAdminController } from './controller/souvenirColors/souvenirColors.admin.controller';
import { SouvenirColorsPublicController } from './controller/souvenirColors/souvenirColors.public.controller';
import { SouvenirImagesAdminController } from './controller/souvenirImages/souvenirImages.admin.controller';
import { SouvenirImagesPublicController } from './controller/souvenirImages/souvenirImages.public.controller';
import { SouvenirLikesAdminController } from './controller/souvenirLikes/souvenirLikes.admin.controller';
import { SouvenirReviewsAdminController } from './controller/souvenirReviews/souvenirReviews.admin.controller';
import { SouvenirReviewsPublicController } from './controller/souvenirReviews/souvenirReviews.public.controller';
import { SouvenirsAdminController } from './controller/souvenirs/souvenirs.admin.controller';
import { SouvenirsPublicController } from './controller/souvenirs/souvenirs.public.controller';
import { SouvenirColorsAdminService } from './services/souvenirColors/souvenirColors.admin.service';
import { SouvenirColorsPublicService } from './services/souvenirColors/souvenirColors.public.service';
import { SouvenirImagesAdminService } from './services/souvenirImages/souvenirImages.admin.service';
import { SouvenirImagesPublicService } from './services/souvenirImages/souvenirImages.public.service';
import { SouvenirLikesAdminService } from './services/souvenirLikes/souvenirLikes.admin.service';
import { SouvenirLikesPublicService } from './services/souvenirLikes/souvenirLikes.public.service';
import { SouvenirLikesPublicController } from './controller/souvenirLikes/souvenirLikes.public.controller';
import { SouvenirReviewsAdminService } from './services/ souvenirReviews/souvenirReviews.admin.service';
import { SouvenirReviewsPublicService } from './services/ souvenirReviews/souvenirReviews.public.service';
import { SouvenirAdminService } from './services/souvenirs/souvenir.admin.service';
import { SouvenirPublicService } from './services/souvenirs/souvenir.public.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Souvenirs } from './entities/souvenirs.entity';
import { SouvenirReviews } from './entities/souvenirReviews.entity';
import { SouvenirLikes } from './entities/souvenirLikes.entity';
import { SouvenirImages } from './entities/souvenirImages.entity';
import { SouvenirColors } from './entities/souvenirColors.entity';
import { SouvenirsRepository } from './repositories/souvenirs.repository';
import { SouvenirReviewsRepository } from './repositories/souvenirReviews.repository';
import { SouvenirLikesRepository } from './repositories/souvenirLikes.repository';
import { SouvenirImagesRepository } from './repositories/souvenirImages.repository';
import { SouvenirColorsRepository } from './repositories/souvenirColors.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Souvenirs, SouvenirReviews, SouvenirLikes, SouvenirImages, SouvenirColors])],

  controllers: [SouvenirColorsAdminController, SouvenirColorsPublicController,
    SouvenirImagesAdminController, SouvenirImagesPublicController,
    SouvenirLikesAdminController, SouvenirLikesPublicController,
    SouvenirReviewsAdminController, SouvenirReviewsPublicController,
    SouvenirsAdminController, SouvenirsPublicController],

  providers: [SouvenirColorsAdminService, SouvenirColorsPublicService,
    SouvenirImagesAdminService, SouvenirImagesPublicService,
    SouvenirLikesAdminService, SouvenirLikesPublicService,
    SouvenirReviewsAdminService, SouvenirReviewsPublicService,
    SouvenirAdminService, SouvenirPublicService,
    SouvenirsRepository, SouvenirReviewsRepository,
    SouvenirLikesRepository, SouvenirImagesRepository,
    SouvenirColorsRepository,
  ],
})
export class SouvenirsModule {
}