import {TEACHER_SPECIALTY} from './Teacher'
import {Student} from './Student'
import {Teacher} from './Teacher'
import {FullTimeMission} from './FullTimeMission'
import {NightTimeMission} from './NightTimeMission'

const testeStudent: Student = new Student("teste1", "gui", "gui@gmail.com", "16/08/1991", "jogar videogame")
const testeTeacher: Teacher = new Teacher("teste2", "leo", "leo@gmail.com", "01/01/2001", [TEACHER_SPECIALTY.REACT])
const testeFullTime: FullTimeMission = new FullTimeMission("teste3", "turma teste", "05/05/2005", "06/06/2005", [testeTeacher], [testeStudent], )
const testeNightTime: NightTimeMission = new NightTimeMission("teste4", "turma teste noite", "07/07/2005", "08/08/2005", [testeTeacher], [testeStudent], 3)

console.log(testeStudent, testeTeacher, testeFullTime, testeNightTime)