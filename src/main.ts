import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {join} from "path"
import {NestExpressApplication} from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }))

  app.useStaticAssets(join(__dirname, '..', 'uploads'), {prefix: '/fayllar/'})

  const swaggerConfig = new DocumentBuilder().setTitle("UzChess").addBearerAuth().setVersion("1.0.0").build()
  const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, swaggerDoc)

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
