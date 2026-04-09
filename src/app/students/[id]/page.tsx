import { prisma } from '@/lib/prisma'
import { Navbar } from '@/components/layout/Navbar'
import { User, Mail, BookOpen, GraduationCap, Calendar, TrendingUp } from 'lucide-react'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default async function StudentDetailPage({ params }: { params: { id: string } }) {
  const student = await prisma.student.findUnique({
    where: { id: params.id },
    include: {
      exams: true,
      courses: true,
      payments: true,
      skills: true
    }
  })

  if (!student) notFound()

  return (
    <>
      <Navbar />
      <div className="p-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Profile Card */}
          <div className="w-full lg:w-96 bg-white rounded-[2.5rem] border p-8 shadow-sm">
             <div className="h-24 w-24 rounded-3xl bg-slate-100 flex items-center justify-center text-slate-400 mb-6 mx-auto">
                <User size={48} />
             </div>
             <h1 className="text-2xl font-black text-slate-900 text-center tracking-tight mb-1">{student.name}</h1>
             <p className="text-sm font-bold text-center text-emerald-600 bg-emerald-50 rounded-full px-4 py-1 w-fit mx-auto uppercase italic mb-8">Nivel {student.level}</p>
             
             <div className="space-y-4 pt-8 border-t border-slate-50">
                <div className="flex items-center gap-3 text-slate-500">
                    <Mail size={16} />
                    <span className="text-sm">{student.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                    <Calendar size={16} />
                    <span className="text-sm italic">Miembro desde {new Date(student.createdAt).toLocaleDateString()}</span>
                </div>
             </div>
          </div>

          <div className="flex-1 space-y-8 w-full">
             {/* Progress Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-[2rem] border p-8 shadow-sm">
                   <div className="flex justify-between items-center mb-6">
                      <h3 className="font-black italic uppercase text-slate-900">Progreso Académico</h3>
                      <TrendingUp size={20} className="text-emerald-500" />
                   </div>
                   <div className="flex items-end gap-2 mb-2">
                       <span className="text-4xl font-black">{student.progress}%</span>
                       <span className="text-xs font-bold text-slate-400 mb-2 uppercase italic">Completado</span>
                   </div>
                   <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${student.progress}%` }}></div>
                   </div>
                </div>

                <div className="bg-slate-900 rounded-[2rem] p-8 text-white">
                   <h3 className="font-black italic uppercase text-white/60 mb-6">Cursos Activos</h3>
                   <div className="space-y-4">
                      {student.courses.map(course => (
                        <div key={course.id} className="flex items-center gap-3">
                           <BookOpen size={16} className="text-emerald-400" />
                           <span className="font-bold">{course.name}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
             
             {/* History Placeholder */}
             <div className="bg-white rounded-[2.5rem] border p-10 shadow-sm opacity-50 italic text-slate-400 text-center">
                Historial de exámenes y pagos (Vista recuperada)
             </div>
          </div>
        </div>
      </div>
    </>
  )
}
