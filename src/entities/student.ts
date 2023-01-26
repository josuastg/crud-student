import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('mahasiswa')
export class Student {
    @PrimaryColumn()
    nim: string;

    @Column()
    nama_mahasiswa: string;

    @Column()
    prodi: string;
}
