import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/entities/student';
import { StudentController } from 'src/controller/student.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Student])],
    controllers: [StudentController]
})
export class StudentModule { }
