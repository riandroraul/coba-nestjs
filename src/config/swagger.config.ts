import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Api Documentation')
  .setDescription('Api Description')
  .setVersion('1.0')
  .addTag("Api's")
  .build();
