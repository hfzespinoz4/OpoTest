import { scales } from '../data/scales'
import ScaleCard from '../components/ScaleCard'

export default function ScalesIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900">Las 14 escalas del cuestionario</h1>
      <p className="mt-2 text-slate-600 max-w-2xl">
        Cada escala está construida a partir del análisis de ítems reales de simulacros de la prueba de
        personalidad de Policía Municipal de Madrid. Haz clic en una escala para ver su explicación
        completa y practicar con preguntas específicas.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {scales.map((s) => (
          <ScaleCard key={s.id} scale={s} />
        ))}
      </div>
    </div>
  )
}
