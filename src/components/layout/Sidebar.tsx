'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Calendar, 
  GraduationCap, 
  CreditCard, 
  BarChart3,
  Settings,
  LogOut,
  Globe
} from 'lucide-react'
import { cn } from '@/lib/utils'

const menuItems = [
  { icon: Globe, label: 'Nuestra Institución', href: '/' },
  { icon: LayoutDashboard, label: 'Panel Principal', href: '/dashboard' },
  { icon: Users, label: 'Alumnos', href: '/students' },
  { icon: BookOpen, label: 'Cursos', href: '/courses' },
  { icon: Calendar, label: 'Clases', href: '/classes' },
  { icon: GraduationCap, label: 'Exámenes', href: '/exams' },
  { icon: CreditCard, label: 'Pagos', href: '/payments' },
  { icon: BarChart3, label: 'Reportes', href: '/reports' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/20">
            <GraduationCap size={20} className="drop-shadow-sm" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-black text-emerald-600 uppercase tracking-widest leading-none">Instituto</span>
            <span className="text-[13px] font-bold text-slate-800 leading-tight">Profesional de Inglés</span>
          </div>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive 
                    ? 'bg-emerald-50 text-emerald-600' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                )}
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="border-t p-4">
        <div className="flex flex-col gap-1">
          <Link
            href="/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          >
            <Settings size={18} />
            Configuración
          </Link>
          <button
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
            onClick={() => alert('Demo de cierre de sesión')}
          >
            <LogOut size={18} />
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  )
}
