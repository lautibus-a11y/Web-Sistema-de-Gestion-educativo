'use client'

import { Search, Bell, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function Navbar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8 z-10">
      <form onSubmit={handleSearch} className="flex w-96 items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-slate-500 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:bg-white transition-all">
        <button type="submit">
          <Search size={18} />
        </button>
        <input 
          type="text" 
          placeholder="Buscar alumnos, cursos..." 
          className="bg-transparent text-sm outline-none w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <div className="flex items-center gap-4">
        <button className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100 transition-colors">
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
        </button>
        
        <div className="h-8 w-[1px] bg-slate-200"></div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-800">Admin Demo</p>
            <p className="text-xs text-slate-500">Gestor Académico</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200">
            <User size={20} className="text-slate-600" />
          </div>
        </div>
      </div>
    </header>
  )
}
