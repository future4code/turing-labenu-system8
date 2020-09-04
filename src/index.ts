import {TEACHER_SPECIALTY} from './Teacher'
import {Student} from './Student'
import {Teacher} from './Teacher'
import {FullTimeMission} from './FullTimeMission'
import {NightTimeMission} from './NightTimeMission'
import {FileManager} from './FileManager'
import { Mission } from './Mission'
import moment from 'moment'

const testeStudent: Student = new Student("aluno teste1", "gui", "gui@gmail.com", "16/08/1991", "jogar videogame")
const testeStudent2: Student = new Student("aluno teste2", "leo estudante", "leo@gmail.com", "25/01/1984", "dormir")
const testeTeacher: Teacher = new Teacher("professor teste3", "leo", "leo@gmail.com", "01/01/2001", [TEACHER_SPECIALTY.REACT])
const testeTeacher2: Teacher = new Teacher("professor teste4", "gui", "gui@gmail.com", "16/08/1991", [TEACHER_SPECIALTY.TESTES])
const testeTeacher3: Teacher = new Teacher("professor teste1", "leo2", "leo2@gmail.com", "01/01/2002", [TEACHER_SPECIALTY.BACKEND])
const testeTeacher4: Teacher = new Teacher("professor teste2", "gui2", "gui2@gmail.com", "16/08/1992", [TEACHER_SPECIALTY.OOP])
const testeFullTime: FullTimeMission = new FullTimeMission("teste3", "", "05/05/2005", "06/06/2005", [], [], )
const testeNightTime: NightTimeMission = new NightTimeMission("teste4", "", "07/07/2005", "08/08/2005", [], [], 3)

// console.log(testeStudent, testeTeacher, testeFullTime, testeNightTime)

console.log("------------------------------------------------------- Estudantes")
const fm = new FileManager("");
fm.setFilePath("../turing-labenu-system8/students.json");

const arrayEstudantes: Student[] =[]
arrayEstudantes.push(testeStudent, testeStudent2);

fm.writeFile({
  arrayEstudantes
});

const estudantes = fm.readFile();

console.log("------------------------------------------------------- Professores")
fm.setFilePath("../turing-labenu-system8/teachers.json");

const arrayProfessores: Teacher[] =[]
arrayProfessores.push(testeTeacher, testeTeacher2, testeTeacher3, testeTeacher4);

fm.writeFile({
  arrayProfessores
});

const professores = fm.readFile();

console.log("------------------------------------------------------- Turmas")
fm.setFilePath("../turing-labenu-system8/missions.json");

testeNightTime.setName("nao-na-night")

console.log(testeNightTime)

const arrayTurmas: Mission[] = []
arrayTurmas.push(testeFullTime, testeNightTime);

fm.writeFile({
  arrayTurmas
});

const turmas = fm.readFile();

console.log("------------------------------------------------------- Adicionando estudante na turma")

const alunosNoite = testeNightTime.getListaAlunos()

alunosNoite.push(testeStudent)

fm.writeFile({
  arrayTurmas
})

alunosNoite.push(testeStudent2)

fm.writeFile({
  arrayTurmas
})

console.log("------------------------------------------------------- Adicionando professor na turma")

const professoresFull = testeFullTime.getListaProfessores()

professoresFull.push(testeTeacher, testeTeacher4)

fm.writeFile({
  arrayTurmas
})

const professoresNoite = testeNightTime.getListaProfessores()

professoresNoite.push(testeTeacher2, testeTeacher3)

fm.writeFile({
  arrayTurmas
})

console.log("------------------------------------------------------- Pegando idade do estudante pelo id")

const alunoEncontrado = arrayEstudantes.find((aluno) => {
  return aluno.id === "aluno teste2"
})

const data1 = moment(`${alunoEncontrado?.dataNascimento}`, "DD/MM/YYYY")
const data2 = moment()

const diff = data2.diff(data1, "years")

console.log("O estudante tem", diff, "anos")
