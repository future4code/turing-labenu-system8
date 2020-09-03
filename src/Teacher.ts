import {User} from './User'

export enum TEACHER_SPECIALTY {
  REACT = "REACT",
  REDUX = "REDUX",
  CSS = "CSS",
  TESTES = "TESTES",
  TYPESCRIPT = "TYPESCRIPT",
  OOP = "OOP",
  BACKEND = "BACKEND",
}

export class Teacher implements User {
  constructor (
    public id: string,
    public nome: string,
    public email: string,
    public dataNascimento: string,
    public especialidades: TEACHER_SPECIALTY[]
  ) {}
}