import { Length } from "class-validator";

export class CreateStudentDto {
  @Length(11, 255, {message: "Your NIM is wrong"})
  nim: string;
  @Length(5,255)
  nama_mahasiswa: string;
  @Length(5, 255)
  prodi: string;
}
