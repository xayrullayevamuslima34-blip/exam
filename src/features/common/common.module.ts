import { Module } from '@nestjs/common';
import { LanguageAdminController } from './controllers/languages/language.admin.controller';
import { LanguagePublicController } from './controllers/languages/language.public.controller';
import { UsersAdminController } from './controllers/users/user.admin.controller';
import { UsersPublicController } from './controllers/users/user.public.controller';
import { LanguageAdminService } from './services/languages/language.admin.service';
import { LanguagePublicService } from './services/languages/language.public.service';
import { UsersAdminService } from './services/users/user.admin.service';
import { UsersPublicService } from './services/users/user.public.service';
import { DifficultyAdminService } from './services/difficulties/difficult.admin.service';
import { DifficultyPublicService } from './services/difficulties/difficult.public.service';
import { DifficultyAdminController } from './controllers/difficulties/difficult.admin.controller';
import { DifficultyPublicController } from './controllers/difficulties/difficult.public.controller';
import { CountriesAdminController } from './controllers/countries/countries.admin.controller';
import { CountriesAdminService } from './services/countries/countries.admin.service';
import { CountriesPublicService } from './services/countries/countries.public.service';
import { CountriesPublicController } from './controllers/countries/countries.public.controller';
import { TermsAdminController } from './controllers/terms/terms.admin.controller';
import { TermsPublicController } from './controllers/terms/terms.public.controller';
import { TermsAdminService } from './services/terms/terms.admin.service';
import { TermsPublicService } from './services/terms/terms.public.service';
import { AuthorsAdminController } from './controllers/author/author.admin.controller';
import { AuthorsPublicController } from './controllers/author/author.public.controller';
import { AuthorsAdminService } from './services/author/author.admin.service';
import { AuthorsPublicService } from './services/author/author.public.service';
import { ColorAdminController } from './controllers/colors/color.admin.controller';
import { ColorPublicController } from './controllers/colors/color.public.controller';
import { ColorAdminService } from './services/colors/color.admin.servic';
import { ColorPublicService } from './services/colors/color.public.servic';
import { Author } from './entities/author.entity';
import { Color } from './entities/color.entity';
import { Countries } from './entities/countries.entity';
import { Difficulty } from './entities/difficulty.entity';
import { Language } from './entities/language.entity';
import { Terms } from './entities/terms.entity';
import { Users } from './entities/user.entity';
import { AuthorRepository } from './repositories/author.repository';
import { ColorRepository } from './repositories/color.repository';
import { CountriesRepository } from './repositories/countries.repository';
import { DifficultyRepository } from './repositories/difficulty.repository';
import { LanguageRepository } from './repositories/language.repository';
import { TermsRepository } from './repositories/terms.repository';
import { UserRepository } from './repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Author, Color,
    Countries, Difficulty,
    Language, Terms, Users])],

  controllers: [AuthorsAdminController, AuthorsPublicController,
    CountriesAdminController, CountriesPublicController,
    DifficultyAdminController, DifficultyPublicController,
    LanguageAdminController, LanguagePublicController,
    TermsAdminController, TermsPublicController,
    UsersAdminController, UsersPublicController,
    ColorAdminController, ColorPublicController,
  ],


  providers: [AuthorsAdminService, AuthorsPublicService,
    CountriesAdminService, CountriesPublicService,
    DifficultyAdminService, DifficultyPublicService,
    LanguageAdminService, LanguagePublicService,
    TermsAdminService, TermsPublicService,
    UsersAdminService, UsersPublicService,
    ColorAdminService, ColorPublicService,
    AuthorRepository, ColorRepository,
    CountriesRepository, DifficultyRepository,
    LanguageRepository, TermsRepository,
    UserRepository
  ],
})

export class CommonModule {
}