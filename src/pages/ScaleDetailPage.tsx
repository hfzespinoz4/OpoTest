import { Link, Navigate, useParams } from 'react-router-dom'
import { getScale, scales } from '../data/scales'
import { getColor } from '../lib/colors'
import { getQuestionsByScale } from '../data/questions'

export default function ScaleDetailPage() {
  const { scaleId } = useParams()
  const scale = getScale(scaleId ?? '')

  if (!scale) return <Navigate to="/escalas" replace />

  const c = getColor(scale.color)
  const total = getQuestionsByScale(scale.id).length
  const idx = scales.findIndex((s) => s.id === scale.id)
  const prev = scales[(idx - 1 + scales.length) % scales.length]
  const next = scales[(idx + 1) % scales.length]

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
      <Link to="/escalas" className="text-sm font-medium text-slate-500 hover:text-brand-700">
        ← Todas las escalas
      </Link>

      <div className="mt-4 flex items-center gap-3 flex-wrap">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${c.chip}`}>
          Escala de personalidad
        </span>
        <span className="text-xs text-slate-400">{total} preguntas de práctica disponibles</span>
      </div>

      <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">{scale.name}</h1>
      <p className="mt-3 text-lg text-slate-600">{scale.summary}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to={`/practicar?escala=${scale.id}`}
          className={`rounded-xl px-5 py-3 font-semibold text-white shadow-sm ${c.solid} hover:opacity-90 transition-opacity`}
        >
          Practicar esta escala
        </Link>
      </div>

      <section className="mt-10 space-y-4 prose-scale">
        <h2 className="text-xl font-bold text-slate-900">¿Qué mide esta escala?</h2>
        {scale.definition.map((p, i) => (
          <p key={i} className="text-slate-700 leading-relaxed">
            {p}
          </p>
        ))}
      </section>

      <section className="mt-10 grid sm:grid-cols-2 gap-6">
        <div className={`rounded-2xl border ${c.border} ${c.softBg} p-5`}>
          <h3 className="font-bold text-slate-900">Indicadores de un nivel alto</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {scale.highIndicators.map((it, i) => (
              <li key={i} className="flex gap-2">
                <span className={`mt-0.5 ${c.text}`}>✓</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="font-bold text-slate-900">Indicadores de un nivel bajo</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {scale.lowIndicators.map((it, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-0.5 text-slate-400">–</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h3 className="font-bold text-slate-900">Ejemplos de ítems habituales</h3>
        <ul className="mt-3 space-y-2">
          {scale.sampleItems.map((it, i) => (
            <li key={i} className="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-700 italic">
              {it}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h3 className="font-bold text-slate-900">Consejos para responder</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
          {scale.tips.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </section>

      <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-6 text-sm">
        <Link to={`/escalas/${prev.id}`} className="text-slate-500 hover:text-brand-700 font-medium">
          ← {prev.name}
        </Link>
        <Link to={`/escalas/${next.id}`} className="text-slate-500 hover:text-brand-700 font-medium">
          {next.name} →
        </Link>
      </div>
    </div>
  )
}
