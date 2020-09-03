import {TEACHER_SPECIALTY} from './Teacher'
import {Student} from './Student'
import {Teacher} from './Teacher'
import {FullTimeMission} from './FullTimeMission'
import {NightTimeMission} from './NightTimeMission'
import {FileManager} from './FileManager'
import { Mission } from './Mission'

const testeStudent: Student = new Student("aluno teste1", "gui", "gui@gmail.com", "16/08/1991", "jogar videogame")
const testeStudent2: Student = new Student("aluno teste2", "leo estudante", "leo@gmail.com", "16/08/1991", "dormir")
const testeTeacher: Teacher = new Teacher("professor teste3", "leo", "leo@gmail.com", "01/01/2001", [TEACHER_SPECIALTY.REACT])
const testeTeacher2: Teacher = new Teacher("professor teste4", "gui", "gui@gmail.com", "16/08/1991", [TEACHER_SPECIALTY.TESTES])
const testeFullTime: FullTimeMission = new FullTimeMission("teste3", "turma teste", "05/05/2005", "06/06/2005", [testeTeacher], [testeStudent], )
const testeNightTime: NightTimeMission = new NightTimeMission("teste4", "turma teste noite", "07/07/2005", "08/08/2005", [testeTeacher], [testeStudent], 3)

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

console.log(estudantes)

console.log("------------------------------------------------------- Professores")
fm.setFilePath("../turing-labenu-system8/teachers.json");

const arrayProfessores: Teacher[] =[]
arrayProfessores.push(testeTeacher, testeTeacher2);

fm.writeFile({
  arrayProfessores
});

const professores = fm.readFile();

console.log(professores)

console.log("------------------------------------------------------- Criando turma")
fm.setFilePath("../turing-labenu-system8/missions.json");

const arrayTurmas: Mission[] = []
arrayTurmas.push(testeFullTime, testeNightTime);

fm.writeFile({
  arrayTurmas
});

const turmas = fm.readFile();

console.log(turmas)

console.log("------------------------------------------------------- Adicionando estudante na turma")

testeNightTime.setListaAlunos(testeStudent)

console.log(testeNightTime)