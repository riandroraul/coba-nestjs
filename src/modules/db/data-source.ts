import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

config();

const configService = new ConfigService();
const datasourceOption: DataSourceOptions = {
  type: 'mysql',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USER'),
  password: configService.get<string>('DB_PASS'),
  database: configService.get<string>('DB_NAME'),
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  // synchronize: configService.get<boolean>('DB_SYNC'),
  logging: configService.get<boolean>('NODE_ENV'),
  migrations: [`${__dirname}/../db/migrations/*{.ts,.js}`],
  migrationsTableName: 'typeorm_migration',
};

const dataSourceOption = new DataSource(datasourceOption);
export default dataSourceOption;
