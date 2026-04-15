import { Module } from '@nestjs/common';
import { LanguageAdminController } from './languages/controllers/language.admin.controller';
import { LanguagePublicController } from './languages/controllers/language.public.controller';
import { UsersAdminController } from './users/controllers/user.admin.controller';
import { UsersPublicController } from './users/controllers/user.public.controller';
import { LanguageAdminService } from './languages/services/language.admin.service';
import { LanguagePublicService } from './languages/services/language.public.service';
import { UsersAdminService } from './users/services/user.admin.service';
import { UsersPublicService } from './users/services/user.public.service';
import { DifficultyAdminService } from './difficulties/services/difficult.admin.service';
import { DifficultyPublicService } from './difficulties/services/difficult.public.service';
import { DifficultyAdminController } from './difficulties/controllers/difficult.admin.controller';
import { DifficultyPublicController } from './difficulties/controllers/difficult.public.controller';
import { CountriesAdminController } from './countries/controllers/countries.admin.controller';
import { CountriesAdminService } from './countries/services/countries.admin.service';
import { CountriesPublicService } from './countries/services/countries.public.service';
import { CountriesPublicController } from './countries/controllers/countries.public.controller';
import { TermsAdminController } from './terms/controllers/terms.admin.controller';
import { TermsPublicController } from './terms/controllers/terms.public.controller';
import { TermsAdminService } from './terms/services/terms.admin.service';
import { TermsPublicService } from './terms/services/terms.public.service';
import { AuthorsAdminController } from './author/controllers/author.admin.controller';
import { AuthorsPublicController } from './author/controllers/author.public.controller';
import { AuthorsAdminService } from './author/services/author.admin.service';
import { AuthorsPublicService } from './author/services/author.public.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { jwtConfig } from '../../config/jwt.config';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: jwtConfig,
    }),
  ],

  controllers: [AuthorsAdminController, AuthorsPublicController,
    CountriesAdminController, CountriesPublicController,
    DifficultyAdminController, DifficultyPublicController,
    LanguageAdminController, LanguagePublicController,
    TermsAdminController, TermsPublicController,
    UsersAdminController, UsersPublicController],


  providers: [AuthorsAdminService, AuthorsPublicService,
    CountriesAdminService, CountriesPublicService,
    DifficultyAdminService, DifficultyPublicService,
    LanguageAdminService, LanguagePublicService,
    TermsAdminService, TermsPublicService,
    UsersAdminService, UsersPublicService],
})

export class CommonModule {
}