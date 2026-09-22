import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-xl px-4 sm:px-6 py-24 text-center">
      <p className="text-6xl font-extrabold text-brand-600">404</p>
      <h1 className="mt-3 text-2xl font-bold text-slate-900">Página no encontrada</h1>
      <p className="mt-2 text-slate-600">La página que buscas no existe o se ha movido.</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-xl bg-brand-600 px-5 py-2.5 font-semibold text-white hover:bg-brand-700"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
