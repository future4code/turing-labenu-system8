import {Mission} from './Mission'
import { Teacher } from './Teacher'
import { Student } from './Student'

export class NightTimeMission extends Mission {
  constructor (
    id: string,
    nome: string,
    dataInicio: string,
    dataTermino: string,
    listaProfessores: Teacher[] = [],
    listaAlunos: Student[] = [],
    moduloAtual?: number
  ) {
    super(id, nome, dataInicio, dataTermino, listaProfessores, listaAlunos, moduloAtual)
  }

  public setListaAlunos(aluno: Student) {
    super.setListaAlunos(aluno)
  }

  public getListaAlunos(): Student[]{
    super.getListaAlunos()
    return this.listaAlunos
  }

  public setListaProfessores(professor: Teacher) {
    super.setListaProfessores(professor)
  }

  public getListaProfessores(): Teacher[]{
    super.getListaProfessores()
    return this.listaProfessores
  }

  public setName(name: string) {
    if (name.indexOf("-na-night") !== -1) {
      super.setName(name);
    } else {
      console.log("Erro")
    }
  }
}