import { prisma } from '@/lib/prisma'
import { StatCard } from '@/components/dashboard/StatCard'
import { ActivityChart } from '@/components/dashboard/ActivityChart'
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  Calendar,
  ChevronRight,
  UserPlus,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/layout/Navbar'

export default async function DashboardPage() {
  const [studentCount, courseCount, paidPayments, classesToday] = await Promise.all([
    prisma.student.count(),
    prisma.course.count(),
    prisma.payment.aggregate({
      _sum: { amount: true },
      where: { status: 'Paid' }
    }),
    prisma.class.findMany({
      include: { course: true },
      take: 5,
      orderBy: { date: 'asc' }
    })
  ])

  const recentStudents = await prisma.student.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5
  })

  return (
    <>
      <Navbar />
      <div className="space-y-8 p-8 pb-12">
        {/* Hero Section */}
        <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-lg border">
          <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
          <div className="absolute inset-0 animate-zoom-in">
            <Image 
              src="/hero-bg.png" 
              alt="English Academy" 
              fill 
              className="object-cover opacity-80"
              priority
            />
          </div>
          <div className="relative z-20 flex h-full flex-col justify-center px-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 backdrop-blur-md px-3 py-1 text-xs font-bold text-emerald-100 border border-emerald-500/30 mb-4 w-fit">
              <Sparkles size={12} />
              <span>Gestión Administrativa</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tight">
              Dashboard <span className="text-emerald-400">Hub</span>
            </h1>
            <p className="mt-2 max-w-lg text-lg text-slate-100 font-medium">
              Panel de control del Instituto Profesional de Inglés.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Total Alumnos" 
            value={studentCount} 
            icon={Users} 
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard 
            title="Cursos Activos" 
            value={courseCount} 
            icon={BookOpen} 
          />
          <StatCard 
            title="Ingresos Totales" 
            value={`$${paidPayments._sum.amount?.toLocaleString() || 0}`} 
            icon={DollarSign} 
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard 
            title="Clases del Día" 
            value={classesToday.length} 
            icon={Calendar} 
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Crecimiento de Alumnos</h3>
              <select className="text-sm border-none bg-slate-50 rounded-md px-2 py-1 outline-none text-slate-500">
                <option>Últimos 7 días</option>
                <option>Últimos 30 días</option>
              </select>
            </div>
            <ActivityChart />
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Próximas Clases</h3>
              <div className="space-y-4">
                {classesToday.length > 0 ? classesToday.map((cls) => (
                  <div key={cls.id} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 font-bold text-xs text-center p-1">
                      {cls.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-sm font-medium text-slate-900 truncate">{cls.topic}</p>
                      <p className="text-xs text-slate-500">{cls.course.name}</p>
                    </div>
                  </div>
                )) : (
                  <p className="text-sm text-slate-500 italic">No hay clases programadas.</p>
                )}
              </div>
              <Link href="/classes" className="mt-4 block text-center text-sm font-medium text-emerald-600 hover:underline">
                Ver calendario completo
              </Link>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Alumnos Recientes</h3>
                <Link href="/students" className="text-xs text-emerald-600 font-medium flex items-center gap-1 hover:underline">
                  Ver todos <ChevronRight size={12} />
                </Link>
              </div>
              <div className="space-y-4">
                {recentStudents.map((student) => (
                  <div key={student.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                        <UserPlus size={14} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{student.name}</p>
                        <p className="text-xs text-slate-500">{student.level}</p>
                      </div>
                    </div>
                    <div className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                      {student.progress}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
