import { prisma } from '@/lib/prisma'
import { Navbar } from '@/components/layout/Navbar'
import { 
  Users, 
  Search, 
  Plus, 
  MoreVertical,
  GraduationCap
} from 'lucide-react'
import Link from 'next/link'

export default async function StudentsPage() {
  const students = await prisma.student.findMany({
    orderBy: { name: 'asc' }
  })

  return (
    <>
      <Navbar />
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight italic uppercase">Gestión de Alumnos</h1>
            <p className="text-slate-500">Administra la base de datos de estudiantes y su progreso.</p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
            <Plus size={18} />
            Nuevo Alumno
          </button>
        </div>

        <div className="bg-white rounded-[2rem] border shadow-sm overflow-hidden">
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
                {students.map((student) => (
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
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-600 border border-emerald-100 uppercase italic">
                        Activo
                      </span>
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
