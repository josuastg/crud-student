import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './config/orm.config';
import { StudentModule } from './module/student.module';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [ormConfig],
    expandVariables: true //able use string back tick on .env ${variable}
  }),
  TypeOrmModule.forRootAsync({
    useFactory: ormConfig
  }),
    StudentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
