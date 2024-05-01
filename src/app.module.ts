import { Module } from '@nestjs/common';
import { DbModule } from './modules/db/db.module';
import { ConfigModule } from '@nestjs/config';
import { AppConfig, DatabaseConfig } from './config';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [AppConfig, DatabaseConfig],
    }),
    DbModule,
    AuthModule,
  ],
})
export class AppModule {}
