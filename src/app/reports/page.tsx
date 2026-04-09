import { prisma } from '@/lib/prisma'
import { Navbar } from '@/components/layout/Navbar'
import { BarChart3, PieChart, TrendingUp, Download, Calendar, Filter } from 'lucide-react'
import { ActivityChart } from '@/components/dashboard/ActivityChart'

export default async function ReportsPage() {
  return (
    <>
      <Navbar />
      <div className="p-8 pb-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight italic uppercase">Reportes e Inteligencia</h1>
            <p className="text-slate-500">Análisis detallado de rendimiento, finanzas y crecimiento institucional.</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 rounded-xl border-2 border-slate-100 bg-white px-6 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
                <Filter size={18} />
                Filtros Avanzados
            </button>
            <button className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
                <Download size={18} />
                Exportar (PDF/CSV)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {/* Chart 1 */}
           <div className="bg-white rounded-[2.5rem] border p-10 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div>
                   <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none mb-1">Tendencia</p>
                   <h3 className="text-2xl font-black text-slate-900 tracking-tight">Crecimiento de Matrícula</h3>
                </div>
                <TrendingUp size={24} className="text-emerald-500" />
              </div>
              <ActivityChart />
           </div>

           {/* Chart 2 Placeholder - Distribution */}
           <div className="bg-white rounded-[2.5rem] border p-10 shadow-sm flex flex-col justify-center">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-2xl font-black text-slate-900 tracking-tight">Distribución por Niveles</h3>
                 <PieChart size={24} className="text-slate-400" />
              </div>
              <div className="flex-1 min-h-[300px] flex items-center justify-center relative">
                 <div className="absolute inset-0 flex items-center justify-center opacity-5">
                    <BarChart3 size={200} />
                 </div>
                 <div className="space-y-4 w-full">
                    {[
                      { l: 'Kids', v: 35, c: 'bg-emerald-500' },
                      { l: 'Teens', v: 45, c: 'bg-blue-500' },
                      { l: 'Adults', v: 20, c: 'bg-amber-500' }
                    ].map((item, i) => (
                       <div key={i} className="flex items-center gap-4">
                          <span className="w-12 text-xs font-bold text-slate-400">{item.l}</span>
                          <div className="flex-1 h-8 bg-slate-50 rounded-xl overflow-hidden">
                             <div className={`h-full ${item.c} rounded-xl`} style={{ width: `${item.v}%` }}></div>
                          </div>
                          <span className="w-10 text-xs font-black text-slate-900">{item.v}%</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        <div className="mt-8 bg-slate-900 rounded-[2.5rem] p-12 text-white flex items-center justify-between">
            <div className="flex items-center gap-6">
                <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center">
                    <TrendingUp size={32} className="text-emerald-400" />
                </div>
                <div>
                    <h4 className="text-xl font-black italic tracking-tighter">EFICIENCIA ACADÉMICA +15%</h4>
                    <p className="text-white/60 text-sm">Este mes se alcanzó un pico histórico en el cumplimiento de asistencias.</p>
                </div>
            </div>
            <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold text-sm uppercase italic tracking-widest hover:bg-emerald-400 transition-all">Ver detalle</button>
        </div>
      </div>
    </>
  )
}
