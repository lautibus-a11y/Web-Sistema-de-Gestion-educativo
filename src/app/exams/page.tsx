import { prisma } from '@/lib/prisma'
import { Navbar } from '@/components/layout/Navbar'
import { GraduationCap, Award, Calendar, MoreVertical, Search, Plus } from 'lucide-react'

export default async function ExamsPage() {
  const exams = await prisma.exam.findMany({
    include: { student: true },
    orderBy: { date: 'desc' }
  })

  return (
    <>
      <Navbar />
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight italic uppercase">Calificaciones y Exámenes</h1>
            <p className="text-slate-500">Resultados académicos, certificaciones internacionales y evaluaciones.</p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 uppercase tracking-widest italic">
            <Plus size={18} />
            Subir Resultados
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
           {[
             { label: 'Exámenes realizados', value: exams.length, icon: Calendar, color: 'text-blue-500' },
             { label: 'Promedio General', value: '8.4', icon: Award, color: 'text-amber-500' },
             { label: 'Certificaciones Pend.', value: '12', icon: GraduationCap, color: 'text-emerald-500' },
             { label: 'Recuperatorios', value: '3', icon: Award, color: 'text-red-500' },
           ].map((stat, i) => (
             <div key={i} className="bg-white p-6 rounded-[2rem] border shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                   <div className={`h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center ${stat.color}`}>
                      <stat.icon size={24} />
                   </div>
                   <div className="flex-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                      <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                   </div>
                </div>
             </div>
           ))}
        </div>

        <div className="bg-white rounded-[2.5rem] border shadow-sm overflow-hidden">
           <table className="w-full text-left">
              <thead>
                 <tr className="bg-slate-50/50 border-b">
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Alumno</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Materia / Examen</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Fecha</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Nota</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                 {exams.length > 0 ? exams.map((exam) => (
                    <tr key={exam.id} className="hover:bg-slate-50 transition-colors group">
                       <td className="px-8 py-6">
                          <p className="font-bold text-slate-900">{exam.student.name}</p>
                          <p className="text-xs text-slate-400 uppercase font-bold tracking-tighter">{exam.student.level}</p>
                       </td>
                       <td className="px-8 py-6 font-medium text-slate-700">{exam.subject}</td>
                       <td className="px-8 py-6 text-slate-500 text-sm">
                          {new Date(exam.date).toLocaleDateString()}
                       </td>
                       <td className="px-8 py-6">
                          <div className={`inline-flex items-center justify-center h-8 w-12 rounded-lg font-black text-sm italic ${
                             exam.score >= 7 ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                          }`}>
                            {exam.score}
                          </div>
                       </td>
                    </tr>
                 )) : (
                   <tr>
                      <td colSpan={4} className="px-8 py-20 text-center text-slate-400 italic font-medium bg-slate-50/20">
                         No hay registros de calificaciones recientes.
                      </td>
                   </tr>
                 )}
              </tbody>
           </table>
        </div>
      </div>
    </>
  )
}
