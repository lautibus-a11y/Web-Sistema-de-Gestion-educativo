import { prisma } from '@/lib/prisma'
import { Navbar } from '@/components/layout/Navbar'
import { 
  Users, 
  Plus, 
  MoreVertical,
} from 'lucide-react'
import Link from 'next/link'

export default async function StudentsPage() {
  const students = await prisma.student.findMany({
    orderBy: { name: 'asc' }
  })

  return (
    <>
      <Navbar />
      <div className="p-4 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <h1 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight italic uppercase">Alumnos</h1>
            <p className="text-slate-500 text-xs sm:text-sm hidden sm:block">Administra la base de datos de estudiantes.</p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 shrink-0">
            <Plus size={16} />
            <span className="hidden xs:block">Nuevo</span>
          </button>
        </div>

        {/* Mobile: Card list */}
        <div className="sm:hidden space-y-3">
          {students.map((student: any) => (
            <div key={student.id} className="bg-white rounded-2xl border p-4 flex items-center gap-4 shadow-sm">
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-black text-sm shrink-0">
                {student.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-slate-900 text-sm truncate">{student.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 rounded-full px-2 py-0.5 uppercase">{student.level}</span>
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${student.progress}%` }}></div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">{student.progress}%</span>
                </div>
              </div>
              <button className="p-1.5 text-slate-400 shrink-0">
                <MoreVertical size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Desktop: Table */}
        <div className="hidden sm:block bg-white rounded-[2rem] border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b">
                  <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Alumno</th>
                  <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Nivel</th>
                  <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Progreso</th>
                  <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Estado</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {students.map((student: any) => (
                  <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{student.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-bold uppercase">{student.level}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-24 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${student.progress}%` }}></div>
                        </div>
                        <span className="text-xs font-bold text-slate-500">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-600 border border-emerald-100 uppercase italic">Activo</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-slate-400 hover:text-slate-600">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
