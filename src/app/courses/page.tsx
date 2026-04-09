import { prisma } from '@/lib/prisma'
import { Navbar } from '@/components/layout/Navbar'
import { BookOpen, Plus, MoreVertical, Clock, Users } from 'lucide-react'

export default async function CoursesPage() {
  const courses = await prisma.course.findMany({
    include: {
      _count: {
        select: { students: true, classes: true }
      }
    }
  })

  return (
    <>
      <Navbar />
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight italic uppercase">Oferta Académica</h1>
            <p className="text-slate-500">Gestión de cursos, programas y niveles.</p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
            <Plus size={18} />
            Crear Curso
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-[2rem] border p-8 hover:border-emerald-500 transition-all hover:shadow-xl group">
              <div className="h-14 w-14 rounded-2xl bg-slate-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all transform group-hover:rotate-6">
                <BookOpen size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{course.name}</h3>
              <p className="text-slate-500 text-sm mb-6 line-clamp-2">{course.description}</p>
              
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-50">
                <div className="flex items-center gap-2 text-slate-400">
                  <Users size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">{course._count.students} Alumnos</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">{course._count.classes} Diarias</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
