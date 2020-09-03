import {Teacher} from './Teacher'
import {Student} from './Student'

export abstract class Mission {
  constructor (
    private id: string,
    private nome: string,
    private dataInicio: string,
    private dataTermino: string,
    private listaProfessores: Teacher[] = [],
    private listaAlunos: Student[] = [],
    private moduloAtual?: number
  ) {}

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
}