import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { DbModule } from '../db/db.module';
import { ConfigModule } from '@nestjs/config';
import { AppConfig, DatabaseConfig } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [AppConfig, DatabaseConfig],
    }),
    BooksModule,
    DbModule,
  ],
})
export class AppModule {}
