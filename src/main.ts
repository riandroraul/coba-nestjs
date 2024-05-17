import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.setGlobalPrefix('api');
  // app.useGlobalPipes(new ValidationPipe());

  const apiDocs = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, apiDocs);
  const port = configService.get('PORT');
  await app.listen(port);
}
bootstrap();
