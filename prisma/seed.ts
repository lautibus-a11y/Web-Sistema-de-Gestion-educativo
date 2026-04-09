import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const levels = ['A1', 'A2', 'B1', 'B2', 'C1']
const firstNames = ['Juan', 'Maria', 'Roberto', 'Patricia', 'Jose', 'Jennifer', 'Miguel', 'Linda', 'Guillermo', 'Isabel', 'David', 'Barbara', 'Ricardo', 'Susana', 'Jose', 'Jessica', 'Tomas', 'Sara', 'Carlos', 'Karen']
const lastNames = ['Garcia', 'Rodriguez', 'Lopez', 'Martinez', 'Gonzalez', 'Hernandez', 'Perez', 'Sanchez', 'Ramirez', 'Torres', 'Flores', 'Morales', 'Vazquez', 'Jimenez', 'Iglesias', 'Diaz', 'Reyes', 'Cano', 'Jackson', 'Martin']

const courseData = [
  { name: 'Fundamentos de Inglés', level: 'A1', description: 'Gramática básica y vocabulario cotidiano' },
  { name: 'Inglés Elemental', level: 'A2', description: 'Comunicación en tareas simples y rutinarias' },
  { name: 'Inglés Intermedio', level: 'B1', description: 'Nivel umbral para uso general' },
  { name: 'Inglés Intermedio Alto', level: 'B2', description: 'Uso seguro en discusiones complejas' },
  { name: 'Inglés Avanzado', level: 'C1', description: 'Competencia profesional y académica' },
]

const grammarTopics = [
  'Presente Simple', 'Pasado Simple', 'Futuro con Will', 'Presente Continuo', 
  'Condicionales', 'Voz Pasiva', 'Cláusulas Relativas', 'Verbos Modales',
  'Vocabulario: Viajes', 'Vocabulario: Trabajo', 'Vocabulario: Salud', 'Inglés de Negocios'
]

async function main() {
  console.log('Limpiando base de datos...')
  await prisma.payment.deleteMany()
  await prisma.exam.deleteMany()
  await prisma.skill.deleteMany()
  await prisma.class.deleteMany()
  await prisma.course.deleteMany()
  await prisma.student.deleteMany()

  console.log('Sembrando cursos...')
  const courses = []
  for (const c of courseData) {
    const course = await prisma.course.create({
      data: c
    })
    courses.push(course)
  }

  console.log('Sembrando clases...')
  for (const course of courses) {
    for (let i = 1; i <= 6; i++) {
        const date = new Date();
        date.setDate(date.getDate() + (i - 3)); // Some past, some future
        date.setHours(9 + i, 0, 0, 0);

      await prisma.class.create({
        data: {
          date,
          topic: grammarTopics[Math.floor(Math.random() * grammarTopics.length)],
          courseId: course.id
        }
      })
    }
  }

  console.log('Sembrando alumnos...')
  for (let i = 0; i < 50; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@academia.com`
    const level = levels[Math.floor(Math.random() * levels.length)]
    const progress = Math.floor(Math.random() * 100)
    
    const student = await prisma.student.create({
      data: {
        name: `${firstName} ${lastName}`,
        email,
        level,
        progress,
        status: Math.random() > 0.1 ? 'Active' : 'Inactive',
        skills: {
          create: {
            reading: Math.floor(Math.random() * 40) + 60,
            writing: Math.floor(Math.random() * 40) + 60,
            listening: Math.floor(Math.random() * 40) + 60,
            speaking: Math.floor(Math.random() * 40) + 60,
          }
        },
        exams: {
          create: [
            { subject: 'Examen de Mitad de Curso', score: Math.floor(Math.random() * 30) + 70, date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
            { subject: 'Prueba de Vocabulario', score: Math.floor(Math.random() * 30) + 70, date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000) }
          ]
        },
        payments: {
          create: [
            { amount: 150, status: 'Paid', date: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000) },
            { amount: 150, status: Math.random() > 0.3 ? 'Paid' : 'Pending', date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000) }
          ]
        }
      }
    })

    const matchingCourse = courses.find(c => c.level === level)
    if (matchingCourse) {
      await prisma.course.update({
        where: { id: matchingCourse.id },
        data: { students: { connect: { id: student.id } } }
      })
    }
  }

  console.log('¡Sembrado completado!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
