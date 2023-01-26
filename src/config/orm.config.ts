import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Student } from 'src/entities/student';

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    name: 'default',
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Student],
    synchronize: true, //automatically updates the schema
  }),
);
