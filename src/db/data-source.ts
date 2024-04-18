import { ConfigService } from '@nestjs/config';
import { Book } from 'src/books/entity/book.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

const configService = new ConfigService();
const datasourceOption: DataSourceOptions = {
  type: 'mysql',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USER'),
  password: configService.get<string>('DB_PASS'),
  database: configService.get<string>('DB_NAME'),
  migrations: ['./migrations/**'],
  entities: [Book],
};

export default new DataSource(datasourceOption);
