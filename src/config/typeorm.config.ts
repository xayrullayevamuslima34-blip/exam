import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const typeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  url: configService.getOrThrow<string>('DB_URL'),
  synchronize: false,
  entities: ['dist/**/*.entity.js'],
});