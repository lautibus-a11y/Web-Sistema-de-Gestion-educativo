'use client'

import { Search, Bell, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function Navbar() {
  const [query, setQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
      setSearchOpen(false)
    }
  }

  return (
    <header className="flex h-14 sm:h-16 items-center justify-between border-b bg-white px-4 sm:px-8 z-10 sticky top-0">
      
      {/* Search — full on desktop, icon-only on mobile */}
      {searchOpen ? (
        /* Mobile expanded search */
        <form onSubmit={handleSearch} className="flex flex-1 items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-slate-500 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:bg-white transition-all mr-3">
          <Search size={16} />
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="bg-transparent text-sm outline-none w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button type="button" onClick={() => setSearchOpen(false)} className="text-xs text-slate-400 font-bold">✕</button>
        </form>
      ) : (
        <>
          {/* Desktop search bar */}
          <form onSubmit={handleSearch} className="hidden sm:flex w-80 lg:w-96 items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-slate-500 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:bg-white transition-all">
            <button type="submit"><Search size={18} /></button>
            <input 
              type="text" 
              placeholder="Buscar alumnos, cursos..." 
              className="bg-transparent text-sm outline-none w-full"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>

          {/* Mobile search button */}
          <button 
            onClick={() => setSearchOpen(true)}
            className="sm:hidden p-2 rounded-xl bg-slate-100 text-slate-600"
          >
            <Search size={18} />
          </button>
        </>
      )}

      <div className="flex items-center gap-2 sm:gap-4">
        <button className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100 transition-colors">
          <Bell size={18} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
        </button>
        
        <div className="hidden sm:block h-8 w-[1px] bg-slate-200"></div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Name — hidden on mobile */}
          <div className="hidden sm:block text-right">
            <p className="text-sm font-semibold text-slate-800">Admin Demo</p>
            <p className="text-xs text-slate-500">Gestor Académico</p>
          </div>
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-emerald-100 border-2 border-emerald-200">
            <User size={16} className="text-emerald-700 sm:size-[18px]" />
          </div>
        </div>
      </div>
    </header>
  )
}
