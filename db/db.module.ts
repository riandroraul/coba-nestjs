import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './typeorm-config';
import dataSourceOption from './data-source';

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmAsyncConfig)],
  providers: [],
})
export class DbModule {}
