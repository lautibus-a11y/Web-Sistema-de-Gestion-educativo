import { Navbar } from '@/components/layout/Navbar'
import { CreditCard, Plus, ArrowUpRight, TrendingUp } from 'lucide-react'

export default function PaymentsPage() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight italic uppercase">Finanzas</h1>
            <p className="text-slate-500">Seguimiento de cuotas, pagos y estados financieros.</p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-all transition-all shadow-lg shadow-slate-200">
            <Plus size={18} />
            Registrar Cobro
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: 'Efectivo', value: '$124,000', trend: '+12%', color: 'bg-emerald-500' },
            { label: 'Transferencias', value: '$85,200', trend: '+5%', color: 'bg-blue-500' },
            { label: 'Pendientes', value: '$12,400', trend: '-2%', color: 'bg-amber-500' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border shadow-sm">
               <div className="flex items-center justify-between mb-4">
                  <div className={`h-10 w-10 ${stat.color} rounded-xl flex items-center justify-center text-white`}>
                     <TrendingUp size={20} />
                  </div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{stat.trend}</span>
               </div>
               <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">{stat.label}</p>
               <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[2rem] border shadow-sm flex items-center justify-center p-20 grayscale opacity-40 italic font-medium text-slate-400">
           Historial de transacciones (Vista recuperada)
        </div>
      </div>
    </>
  )
}
