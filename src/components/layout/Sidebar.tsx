'use client'

import { useState } from 'react'
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
  Globe,
  Menu,
  X
} from 'lucide-react'
import { cn } from '@/lib/utils'

const menuItems = [
  { icon: Globe, label: 'Institución', href: '/' },
  { icon: LayoutDashboard, label: 'Panel', href: '/dashboard' },
  { icon: Users, label: 'Alumnos', href: '/students' },
  { icon: BookOpen, label: 'Cursos', href: '/courses' },
  { icon: Calendar, label: 'Clases', href: '/classes' },
  { icon: GraduationCap, label: 'Exámenes', href: '/exams' },
  { icon: CreditCard, label: 'Pagos', href: '/payments' },
  { icon: BarChart3, label: 'Reportes', href: '/reports' },
]

export function Sidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const NavContent = () => (
    <>
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-4 sm:px-6 shrink-0">
        <Link href="/dashboard" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/20">
            <GraduationCap size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest leading-none">Instituto</span>
            <span className="text-[12px] font-bold text-slate-800 leading-tight">Profesional de Inglés</span>
          </div>
        </Link>
      </div>

      {/* Nav items */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-2 sm:px-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-all',
                  isActive 
                    ? 'bg-emerald-50 text-emerald-700 shadow-sm' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                )}
              >
                <item.icon size={18} className="shrink-0" />
                <span className="truncate">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Bottom */}
      <div className="border-t p-3">
        <div className="flex flex-col gap-1">
          <Link
            href="/settings"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          >
            <Settings size={18} className="shrink-0" />
            <span>Configuración</span>
          </Link>
          <button
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-red-500 hover:bg-red-50"
            onClick={() => alert('Demo de cierre de sesión')}
          >
            <LogOut size={18} className="shrink-0" />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden md:flex h-screen w-60 lg:w-64 flex-col border-r bg-white shrink-0">
        <NavContent />
      </div>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-14 bg-white border-b px-4 shadow-sm">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 text-white">
            <GraduationCap size={16} />
          </div>
          <span className="text-sm font-black text-slate-800 uppercase tracking-tight">IPI Panel</span>
        </Link>
        <button 
          onClick={() => setMobileOpen(true)}
          className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div className={cn(
        'md:hidden fixed top-0 left-0 z-50 h-full w-72 bg-white flex flex-col transition-transform duration-300 shadow-2xl',
        mobileOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="absolute top-4 right-4">
          <button 
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-xl bg-slate-100 text-slate-700"
          >
            <X size={18} />
          </button>
        </div>
        <NavContent />
      </div>
    </>
  )
}
