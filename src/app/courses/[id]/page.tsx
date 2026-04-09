import { prisma } from '@/lib/prisma'
import { Navbar } from '@/components/layout/Navbar'
import { BookOpen, Clock, Users, Bookmark, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default async function CourseDetailPage({ params }: { params: { id: string } }) {
  const courses = await prisma.course.findMany()
  const course = courses.find((c: any) => c.id === params.id) || courses[0]

  return (
    <>
      <Navbar />
      <div className="p-8 pb-20">
        <Link href="/courses" className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors mb-8 group">
           <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
           <span className="font-bold uppercase text-xs tracking-widest">Volver a Cursos</span>
        </Link>

        <div className="bg-white rounded-[3rem] border shadow-sm p-12 overflow-hidden relative">
           <div className="absolute top-0 right-0 p-12 opacity-5 scale-150">
              <BookOpen size={200} />
           </div>
           
           <div className="relative z-10 max-w-3xl">
              <span className="text-emerald-500 font-bold uppercase text-xs tracking-[0.2em] mb-4 block">Detalle del Programa</span>
              <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase italic mb-8">{course.name}</h1>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                 <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                       <Clock size={24} />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-slate-400 uppercase">Horarios</p>
                       <p className="font-bold text-slate-800">{course.schedule}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                       <Users size={24} />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-slate-400 uppercase">Estado</p>
                       <p className="font-bold text-emerald-500 italic uppercase">Cupos Disponibles</p>
                    </div>
                 </div>
              </div>

              <div className="space-y-6">
                 <h3 className="font-black italic uppercase text-slate-900 tracking-tight">Descripción del Curso</h3>
                 <p className="text-slate-500 leading-relaxed text-lg">
                    Este programa de {course.name} está diseñado para potenciar las habilidades comunicativas de forma integral. 
                    Enfocado en resultados prácticos y certificación de nivel {course.level}.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </>
  )
}
