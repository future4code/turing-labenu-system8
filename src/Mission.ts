import {Teacher} from './Teacher'
import {Student} from './Student'

export abstract class Mission {
  
  constructor (
    protected id: string,
    protected nome: string,
    protected dataInicio: string,
    protected dataTermino: string,
    protected listaProfessores: Teacher[] = [],
    protected listaAlunos: Student[] = [],
    protected moduloAtual?: number
  ) {}

  public setListaAlunos(aluno: Student) {
    this.listaAlunos.push(aluno)
  }

  public getListaAlunos(): Student[]{
    return this.listaAlunos
  }

  public setListaProfessores(professor: Teacher) {
    this.listaProfessores.push(professor)
  }

  public getListaProfessores(): Teacher[]{
    return this.listaProfessores
  }

  public getId(): string {
    return this.id
  }

  public getNome(): string {
    return this.nome
  }

  public getDataInicio(): string {
    return this.dataInicio
  }

  public getDataTermino(): string {
    return this.dataTermino
  }

  public getModuloAtual(): number | undefined {
    return this.moduloAtual
  }

  public setName(name: string) {
    this.nome = name;
  }
}