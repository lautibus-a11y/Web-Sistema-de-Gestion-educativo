import { prisma } from '@/lib/prisma'
import { Navbar } from '@/components/layout/Navbar'
import { Calendar, Clock, BookOpen, Plus, MoreVertical } from 'lucide-react'

export default async function ClassesPage() {
  const classes = await prisma.class.findMany({
    include: { course: true },
    orderBy: { date: 'asc' }
  })

  return (
    <>
      <Navbar />
      <div className="p-8 pb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight italic uppercase">Calendario de Clases</h1>
            <p className="text-slate-500">Horarios, temas del día y asistencia por curso.</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-slate-100 px-6 py-3 text-sm font-bold text-slate-600 hover:bg-slate-200 transition-all">
                Hoy
            </button>
            <button className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
              <Plus size={18} />
              Programar Clase
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {classes.length > 0 ? classes.map((cls: any) => (
            <div key={cls.id} className="bg-white rounded-[2rem] border p-6 hover:shadow-lg transition-all flex items-center gap-8 group">
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-slate-50 text-slate-900 font-bold group-hover:bg-emerald-500 group-hover:text-white transition-all transform group-hover:scale-110 duration-500">
                <span className="text-xs uppercase opacity-60">
                   {cls.date.toLocaleDateString('es-AR', { weekday: 'short' })}
                </span>
                <span className="text-xl">
                   {cls.date.getDate()}
                </span>
              </div>
              
              <div className="flex-1">
                 <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">{cls.course.name}</span>
                    <span className="h-1 w-1 bg-slate-300 rounded-full"></span>
                    <span className="text-xs font-medium text-slate-400">
                       {cls.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} hs
                    </span>
                 </div>
                 <h3 className="text-xl font-black text-slate-900 tracking-tight">{cls.topic}</h3>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-10 w-[1px] bg-slate-100"></div>
                <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>
          )) : (
            <div className="bg-white rounded-[3rem] border border-dashed p-32 text-center">
               <Calendar size={64} className="mx-auto text-slate-200 mb-6" />
               <p className="text-slate-400 font-medium text-lg italic">No hay clases programadas próximamente.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
