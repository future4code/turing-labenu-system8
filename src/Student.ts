import {User} from './User'
import moment from 'moment'

export class Student implements User {
  constructor (
    public id: string,
    public nome: string,
    public email: string,
    public dataNascimento: string,
    public hobbies: string
  ) {}

}