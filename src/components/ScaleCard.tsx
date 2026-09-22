import { Link } from 'react-router-dom'
import type { Scale } from '../data/types'
import { getColor } from '../lib/colors'

export default function ScaleCard({ scale }: { scale: Scale }) {
  const c = getColor(scale.color)
  return (
    <Link
      to={`/escalas/${scale.id}`}
      className={`group flex flex-col rounded-2xl border ${c.border} ${c.softBg} p-5 transition-all hover:shadow-md hover:-translate-y-0.5`}
    >
      <span className={`inline-block w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${c.chip}`}>
        Escala de personalidad
      </span>
      <h3 className="mt-3 text-lg font-bold text-slate-900">{scale.name}</h3>
      <p className="mt-1.5 text-sm text-slate-600 line-clamp-3">{scale.summary}</p>
      <span className={`mt-4 text-sm font-semibold ${c.text} group-hover:underline`}>
        Ver escala y practicar →
      </span>
    </Link>
  )
}
