import { Link, NavLink, Outlet } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
    isActive ? 'bg-brand-600 text-white' : 'text-slate-600 hover:text-brand-700 hover:bg-brand-50'
  }`

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm">
              OT
            </span>
            <span>
              Opo<span className="text-brand-600">Test</span>
            </span>
          </Link>
          <nav className="flex items-center gap-1">
            <NavLink to="/" end className={navLinkClass}>
              Inicio
            </NavLink>
            <NavLink to="/escalas" className={navLinkClass}>
              Escalas
            </NavLink>
            <NavLink to="/practicar" className={navLinkClass}>
              Practicar
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            OpoTest — Material de preparación no oficial para la prueba psicotécnica de personalidad de
            Policía Municipal de Madrid.
          </p>
          <p className="text-slate-400">Contenido con fines formativos.</p>
        </div>
      </footer>
    </div>
  )
}
