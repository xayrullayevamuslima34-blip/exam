import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { JwtModule } from '@nestjs/jwt';

import { jwtConfig } from './config/jwt.config';
import { typeOrmConfig } from './config/typeorm.config';

import { LibraryModule } from './features/library/library.module';
import { NewsModule } from './features/news/news.module';
import { CourseModule } from './features/courses/course.module';
import { CommonModule } from './features/common/common.module';
import { AuthorizationModule } from './features/authorization/authorization.module';
import { ReportModule } from './features/report/report.module';
import { ChessModule } from './features/chess/chess.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        PORT: Joi.number().required(),
        DB_URL: Joi.string().required(),
        DEFAULT_DB_URL: Joi.string().required(),
        TEST_DB_URL: Joi.string().required(),
        JWT_EXPIRES_IN: Joi.string().required(),
        OTP_EXPIRE: Joi.number().required(),
        OTP_RESEND: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        DEFAULT_SIZE: Joi.number().required(),
        DEFAULT_PAGE: Joi.number().required(),
        BASE_URL: Joi.string().required(),
      }),
    }),

    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: jwtConfig,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: typeOrmConfig,
    }),

    AuthorizationModule,
    ChessModule,
    CommonModule,
    CourseModule,
    LibraryModule,
    NewsModule,
    ReportModule,
  ],
})
export class AppModule {
}
