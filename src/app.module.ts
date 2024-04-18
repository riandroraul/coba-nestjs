import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { typeOrmConfig } from './config/typeorm.config';
import { DbModule } from './db/db.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), BooksModule, DbModule],
})
export class AppModule {}
