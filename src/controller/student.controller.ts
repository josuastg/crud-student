import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    ValidationPipe,
    Put,
    Delete,
    HttpCode,
    NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entities/student';
import { Repository } from 'typeorm';
import { CreateStudentDto } from "src/entities/create-student.dto"
import { UpdateStudentDto } from "src/entities/update-student.dto"


@Controller('/students')
export class StudentController {
    constructor(
        @InjectRepository(Student)
        private readonly repository: Repository<Student>,
    ) { }


    @Get()
    async findAll() {
        return await this.repository.find();
    }

    @Get(':id')
    async findOne(@Param('id') nim) {
        const student = await this.repository.findOneBy({ nim });
        if (!student) {
            throw new NotFoundException();
        }
        return student;
    }


    @Post()
    async create(@Body(ValidationPipe) payload: CreateStudentDto) {
        return await this.repository.save({
            ...payload
        });
    }

    @Put(':id')
    async update(@Param('id') nim, @Body() input: UpdateStudentDto) {
        const student = await this.repository.findOneBy({ nim });
        if (!student) {
            throw new NotFoundException();
        }
        return await this.repository.save({
            ...student,
            ...input
        });
    }
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id') nim) {
        const student = await this.repository.findOneBy({ nim });
        if (!student) {
            throw new NotFoundException();
        }
        await this.repository.remove(student);
    }
}
