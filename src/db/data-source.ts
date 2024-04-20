import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const configService = new ConfigService();
const datasourceOption: DataSourceOptions = {
  type: 'mysql',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USER'),
  password: configService.get<string>('DB_PASS'),
  database: configService.get<string>('DB_NAME'),
  migrations: ['src/migrations/**'],
  entities: ['src/**/entity/*{.ts, .js}'],
  synchronize: false,
  migrationsTableName: 'migrations_table',
};

export default new DataSource(datasourceOption);
