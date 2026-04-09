'use client'

import { useState, useEffect } from 'react'
import { 
  BookOpen, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Star,
  Globe,
  Share2,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  Search,
  Camera,
  Layers,
  Award
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 'ninos',
    title: 'Cursos para Niños',
    shortDescription: 'Métodos lúdicos y efectivos para que los más pequeños amen el idioma.',
    fullDescription: 'Nuestro programa "Kids Path" utiliza juegos, música y realidad aumentada para sumergir a los niños en el inglés de forma natural. Grupos reducidos para atención personalizada.',
    icon: Star,
    color: 'emerald'
  },
  {
    id: 'online',
    title: 'Clases Online',
    shortDescription: 'Flexibilidad total con nuestra plataforma virtual de última generación.',
    fullDescription: 'Accede a clases en vivo desde cualquier lugar. Plataforma interactiva con material digital exclusivo, foros de consulta y seguimiento de progreso en tiempo real.',
    icon: Globe,
    color: 'blue'
  },
  {
    id: 'examenes',
    title: 'Preparación Exámenes',
    shortDescription: 'Expertos en certificaciones internacionales de alto nivel.',
    fullDescription: 'Entrenamiento intensivo para First Certificate, Advanced, TOEFL e IELTS. Simulacros mensuales y técnicas de examen para garantizar tu éxito académico.',
    icon: CheckCircle2,
    color: 'amber'
  },
  {
    id: 'negocios',
    title: 'Inglés de Negocios',
    shortDescription: 'Programas corporativos diseñados para el éxito global.',
    fullDescription: 'Mejora tu comunicación profesional. Vocabulario técnico, presentaciones efectivas, negociación y comunicación intercultural para el mercado laboral actual.',
    icon: BookOpen,
    color: 'indigo'
  }
]

const galleryImages = [
  { src: '/fotos-galeria/photo1.jpg', alt: 'Fachada Institucional', span: 'col-span-2 row-span-2' },
  { src: '/fotos-galeria/photo2.webp', alt: 'Aulas de Vanguardia', span: 'col-span-1 row-span-1' },
  { src: '/fotos-galeria/photo3.jpg', alt: 'Nuestros Estudiantes', span: 'col-span-1 row-span-1' },
  { src: '/fotos-galeria/photo4.jpg', alt: 'Espacios Comunes', span: 'col-span-1 row-span-2' },
  { src: '/fotos-galeria/1.png', alt: 'Laboratorio de Idiomas', span: 'col-span-1 row-span-1' },
]

export default function LandingPage() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => observer.observe(reveal));
    return () => observer.disconnect();
  }, []);

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <div className="bg-slate-900 pb-10 min-h-screen font-sans selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/541145678900" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] group flex items-center gap-3 active:scale-95 transition-transform animate-float"
      >
        <div className="hidden sm:block bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-2xl text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 shadow-2xl">
           ¿Dudas? Escríbenos
        </div>
        <div className="h-14 w-14 sm:h-16 sm:w-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300 ring-4 ring-white/10">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="sm:w-8 sm:h-8">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.405 0 0 5.403 0 12.05c0 2.125.553 4.198 1.604 6.01L0 24l6.16-1.615A11.776 11.776 0 0012.043 24h.005c6.642 0 12.046-5.403 12.046-12.05a11.82 11.82 0 00-3.418-8.415z"/>
          </svg>
        </div>
      </a>

      {/* Hero Section */}
      <section className="relative min-h-[100vh] sm:min-h-[110vh] w-full z-0 pt-10">
        <div className="absolute inset-0 overflow-hidden rounded-b-[2.5rem] sm:rounded-b-[4rem]">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90 z-10"></div>
          <div className="absolute inset-0 animate-slow-zoom">
            <Image 
              src="/kids-hero.png" 
              alt="Academy Background" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Top Navigation - MacOS Dock Style Static inside Hero */}
        <nav className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 z-[100] w-[95%] sm:w-fit max-w-2xl">
           <div className="bg-white/10 backdrop-blur-2xl border border-white/20 px-6 sm:px-10 py-3 rounded-full flex items-center justify-between gap-6 sm:gap-12 shadow-[0_20px_50px_rgba(0,0,0,0.4)] ring-1 ring-white/10">
                <div className="hidden xs:flex items-center gap-2">
                   <Sparkles size={14} className="text-emerald-400 animate-pulse" />
                   <span className="text-white/60 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">Panel Administrativo</span>
                </div>
                
                <div className="flex items-center gap-4 sm:gap-6">
                    <ArrowRight size={18} className="text-emerald-400 animate-slide-right hidden sm:block" />
                    <Link href="/dashboard" className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2.5 rounded-full text-white text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
                        Acceso al Panel
                    </Link>
                </div>
           </div>
        </nav>

        <div className="relative z-20 flex flex-col items-center justify-center px-6 sm:px-10 text-center pt-48 sm:pt-64 pb-48 sm:pb-64">
          <div className="animate-fade-in-up space-y-8 sm:space-y-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs font-bold text-emerald-400 border border-emerald-500/30 uppercase tracking-widest mx-auto relative z-30">
              <Star size={12} className="fill-emerald-400" />
              <span>Inscripciones 2026 Abiertas</span>
            </div>
            
            <div className="space-y-6 sm:space-y-8 relative z-30">
              <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-9xl font-black text-white tracking-tighter max-w-5xl leading-[0.9] sm:leading-[0.85] uppercase italic transition-all drop-shadow-2xl">
                El futuro <br className="sm:hidden" /> de tus hijos <br/> <span className="text-emerald-400">empieza aquí</span>
              </h1>
              
              <p className="max-w-xl mx-auto text-base sm:text-xl text-slate-200 font-medium drop-shadow-xl leading-relaxed px-4 opacity-90">
                Formamos ciudadanos del mundo a través del dominio del inglés. 
                Metodología diseñada para resultados reales.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-8 sm:pt-10 relative z-40">
              <a 
                href="https://wa.me/541145678900" 
                target="_blank"
                className="rounded-2xl bg-emerald-500 px-10 sm:px-14 py-5 sm:py-7 text-xs sm:text-sm font-black text-white hover:bg-emerald-600 transition-all active:scale-95 shadow-2xl shadow-emerald-500/40 uppercase italic tracking-widest group"
              >
                Consultar Ahora
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </a>
              <a 
                href="#servicios" 
                className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 px-10 sm:px-14 py-5 sm:py-7 text-xs sm:text-sm font-black text-white hover:bg-white/20 transition-all uppercase italic tracking-widest"
              >
                Ver Carreras
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="relative z-50 -mt-24 sm:-mt-32 px-4 sm:px-10 reveal">
        <div className="bg-white rounded-[3rem] sm:rounded-[4rem] shadow-2xl p-8 sm:p-24 border-b-8 border-emerald-500">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-24 gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Metodología Elite</p>
              <h2 className="text-5xl sm:text-8xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.9]">
                Nuestra <br className="sm:hidden" /> <span className="text-emerald-500">oferta</span> académica
              </h2>
            </div>
            <p className="text-slate-500 text-sm sm:text-lg max-w-sm font-medium border-l-2 border-emerald-500 pl-6 leading-relaxed">
              Programas diseñados por especialistas internacionales para cada nivel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const isExpanded = expandedCard === service.id
              return (
                <div 
                  key={service.id} 
                  onClick={() => toggleCard(service.id)}
                  className={`relative overflow-hidden group p-8 sm:p-10 rounded-[2.5rem] border-t-[8px] transition-all duration-700 cursor-pointer ${
                    isExpanded 
                      ? 'bg-slate-900 border-emerald-500 shadow-2xl scale-105 z-10' 
                      : 'bg-slate-50 border-slate-900 hover:border-slate-900 hover:bg-white hover:-translate-y-2'
                  }`}
                >
                  <div className={`h-14 w-14 sm:h-16 sm:w-16 rounded-2xl flex items-center justify-center mb-8 sm:mb-10 transition-all duration-500 ${
                    isExpanded ? 'bg-emerald-500 text-white rotate-12' : 'bg-white shadow-sm text-emerald-600 group-hover:rotate-12'
                  }`}>
                    <service.icon size={28} className="sm:size-[32px]" />
                  </div>
                  
                  <h3 className={`text-2xl sm:text-3xl font-black mb-4 tracking-tight leading-8 transition-colors duration-500 ${
                    isExpanded ? 'text-white' : 'text-slate-900'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed mb-6 transition-colors duration-500 ${
                    isExpanded ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    {service.shortDescription}
                  </p>
                  
                  <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    isExpanded ? 'max-h-64 opacity-100 mb-8' : 'max-h-0 opacity-0'
                  }`}>
                     <p className="text-slate-400 text-xs leading-relaxed italic border-t border-white/10 pt-6">
                        {service.fullDescription}
                     </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all duration-500 ${
                      isExpanded ? 'text-emerald-400' : 'text-emerald-600'
                    }`}>
                       {isExpanded ? 'Ocultar' : 'Info'}
                       {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Nuestra Institución & Galería */}
      <section id="institucion" className="relative z-40 py-24 sm:py-32 px-4 sm:px-10 reveal">
          <div className="container mx-auto">
             <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                <div className="lg:w-1/2">
                   <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Sobre nosotros</p>
                   <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.9] mb-8">
                     Nuestra <br/> <span className="text-emerald-500">Institución</span>
                   </h2>
                   <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-12">
                      Con más de 15 años de trayectoria, IPI se ha consolidado como el centro de idiomas líder en excelencia académica. 
                      Nuestra misión es empoderar a nuestros alumnos con las herramientas necesarias para triunfar en un contexto global.
                   </p>
                   <div className="grid grid-cols-2 gap-6">
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                         <Camera size={24} className="text-emerald-400 mb-4" />
                         <p className="text-white font-black uppercase text-xs tracking-wider">Instalaciones Modernas</p>
                      </div>
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                         <Layers size={24} className="text-emerald-400 mb-4" />
                         <p className="text-white font-black uppercase text-xs tracking-wider">Soporte Digital</p>
                      </div>
                   </div>
                </div>
                
                <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px] sm:auto-rows-[200px]">
                   {galleryImages.map((img, i) => (
                      <div key={i} className={`relative group overflow-hidden rounded-[2rem] border-2 border-white/10 hover:border-emerald-500 transition-all duration-700 ${img.span}`}>
                         <Image 
                           src={img.src} 
                           alt={img.alt} 
                           fill 
                           className="object-cover group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                            <span className="text-white text-[10px] font-black uppercase tracking-widest">{img.alt}</span>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
      </section>

      {/* Stats Section */}
      <section id="nosotros" className="relative z-20 -mt-12 sm:-mt-16 px-4 sm:px-16 reveal">
        <div className="bg-emerald-500 rounded-[3rem] shadow-xl py-24 sm:py-32 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:scale-125 transition-transform duration-1000"></div>
          
          <div className="container mx-auto px-6 sm:px-10 relative z-10 text-center">
            <h2 className="text-4xl sm:text-7xl font-black italic tracking-tighter uppercase leading-[0.9] mb-16 sm:mb-20">
              Excelencia <br className="sm:hidden" /> comprobada
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
              {[
                { label: 'Alumnos', value: '500+' },
                { label: 'Aprobados', value: '100%' },
                { label: 'Programas', value: '12+' },
                { label: 'Trayectoria', value: '15+' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center hover:scale-110 transition-transform cursor-default">
                  <p className="text-5xl sm:text-8xl font-black mb-2 tracking-tighter">{stat.value}</p>
                  <p className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.3em] opacity-80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="relative z-30 -mt-12 sm:-mt-16 px-4 sm:px-24 reveal">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border-t-8 border-slate-900">
          <div className="flex-1 p-12 sm:p-24">
            <h2 className="text-5xl sm:text-7xl font-black text-slate-900 mb-12 sm:mb-16 uppercase tracking-tighter italic leading-[0.85]">
              Vení a <span className="text-emerald-500">conocernos</span>
            </h2>
            
            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl bg-slate-50 text-emerald-600 flex items-center justify-center shadow-inner border border-slate-100 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="font-black text-2xl text-slate-900 uppercase tracking-tighter mb-1">Sede Central</p>
                  <p className="text-slate-500 text-lg font-medium">Av. Principal 123, Centro Histórico</p>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl bg-slate-50 text-emerald-600 flex items-center justify-center shadow-inner border border-slate-100 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="font-black text-2xl text-slate-900 uppercase tracking-tighter mb-1">Llámanos</p>
                  <p className="text-slate-500 text-lg font-medium">+54 11 4567-8900</p>
                </div>
              </div>
            </div>

            <div className="mt-20 flex gap-6">
              {[Share2, Globe, Mail].map((Icon, i) => (
                <Link key={i} href="#" className="h-16 w-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-emerald-500 hover:text-white transition-all shadow-sm border border-slate-100 hover:rotate-12">
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-[0.8] bg-slate-200 relative min-h-[500px] overflow-hidden">
             <div className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 scale-110 hover:scale-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.23944583247!2d-58.503338382346!3d-34.61582377317208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90af3%3A0x1087eb2ca1234900!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses!2sar!4v1712662000000!5m2!1ses!2sar" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                ></iframe>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center pt-24 pb-12">
        <p className="text-slate-500 text-[9px] sm:text-[11px] uppercase font-black tracking-[0.4em] px-6">
          © 2026 Instituto Profesional de Inglés • Educando para el Futuro
        </p>
      </footer>
    </div>
  )
}
