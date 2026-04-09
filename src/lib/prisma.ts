// Mock Prisma implementation for static deployment
export const prisma = {
  student: {
    findMany: async (args?: any) => [
      { id: '1', name: 'Juan Perez', email: 'juan@example.com', level: 'B1', progress: 75, createdAt: new Date() },
      { id: '2', name: 'Maria Garcia', email: 'maria@example.com', level: 'A2', progress: 90, createdAt: new Date() },
      { id: '3', name: 'Carlos Rodriguez', email: 'carlos@example.com', level: 'C1', progress: 45, createdAt: new Date() },
      { id: '4', name: 'Elena White', email: 'elena@example.com', level: 'B2', progress: 85, createdAt: new Date() },
      { id: '5', name: 'Robert Smith', email: 'robert@example.com', level: 'C2', progress: 95, createdAt: new Date() },
    ],
    findUnique: async ({ where }: any) => ({
      id: where.id,
      name: 'Alumno Demo',
      email: 'demo@example.com',
      level: 'B2',
      progress: 85,
      createdAt: new Date(),
      exams: [],
      courses: [{ id: '1', name: 'Inglés B2 Upper Intermediate' }],
      payments: [],
      skills: []
    }),
    count: async () => 450,
  },
  course: {
    findMany: async () => [
      { id: '1', name: 'Full English - Kids', level: 'Beginner', schedule: 'Lun/Mie 14:00', price: 15000, students: [] },
      { id: '2', name: 'Advanced Conversation', level: 'C1', schedule: 'Mar/Jue 18:00', price: 20000, students: [] },
      { id: '3', name: 'Business English', level: 'B2', schedule: 'Sab 09:00', price: 25000, students: [] },
    ],
    count: async () => 12,
  },
  class: {
    findMany: async () => [
      { id: '1', topic: 'Present Perfect', date: new Date(), course: { name: 'Teens 1' } },
      { id: '2', topic: 'Speaking Lab', date: new Date(), course: { name: 'Adults B1' } },
      { id: '3', topic: 'Listening Skills', date: new Date(), course: { name: 'Kids - Starters' } },
      { id: '4', topic: 'Vocabulary Quiz', date: new Date(), course: { name: 'Advanced C1' } },
    ],
  },
  exam: {
    findMany: async () => [
      { id: '1', subject: 'Midterm Test', score: 8.5, date: new Date(), student: { name: 'Juan Perez', level: 'B1' } },
      { id: '2', subject: 'Final Exam', score: 9.0, date: new Date(), student: { name: 'Maria Garcia', level: 'A2' } },
    ],
  },
  payment: {
    findMany: async () => [],
    aggregate: async () => ({
      _sum: { amount: 1250000 }
    }),
  }
} as any;
