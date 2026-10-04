import { Link } from 'react-router-dom'
import { scales } from '../data/scales'
import { questions } from '../data/questions'
import ScaleCard from '../components/ScaleCard'

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-brand-950 to-brand-800 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide uppercase text-brand-100">
            Policía Municipal de Madrid · Prueba de personalidad
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight max-w-3xl">
            Domina las 14 escalas del cuestionario de personalidad
          </h1>
          <p className="mt-4 max-w-2xl text-brand-100 text-base sm:text-lg">
            Aprende qué mide cada escala y después ponte a prueba de verdad: te presentamos una situación
            real, sin decirte de qué escala se trata, y tienes que adivinarlo tú — igual que tendrás que
            hacerlo el día del examen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/practicar"
              className="rounded-xl bg-accent-500 px-5 py-3 font-semibold text-brand-950 shadow-sm hover:bg-accent-400 transition-colors"
            >
              Adivinar la escala
            </Link>
            <Link
              to="/escalas"
              className="rounded-xl bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Explorar las 14 escalas
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <Stat label="Escalas" value={scales.length} />
            <Stat label="Preguntas" value={questions.length} />
            <Stat label="Niveles" value={3} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Las 14 escalas de personalidad</h2>
            <p className="text-slate-600 mt-1">
              Cada escala explica qué evalúa, cómo se refleja en la vida real y qué errores evitar al
              responder.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {scales.map((s) => (
            <ScaleCard key={s.id} scale={s} />
          ))}
        </div>
      </section>

      <section className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid md:grid-cols-3 gap-8">
          <HowStep
            n={1}
            title="Aprende cada escala"
            text="Definición, indicadores en alto y en bajo, ejemplos reales de ítems y consejos para responder con coherencia."
          />
          <HowStep
            n={2}
            title="Adivina la escala"
            text="Te mostramos una situación real, sin decirte a qué escala pertenece. Tú eliges entre las 14, como en el examen."
          />
          <HowStep
            n={3}
            title="Corrige y entiende el porqué"
            text="Al terminar verás la escala correcta frente a la tuya, por qué lo es y, además, cuál habría sido la mejor actitud dentro de ella."
          />
        </div>
      </section>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl bg-white/10 px-3 py-3 text-center">
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="text-xs text-brand-100 mt-0.5">{label}</div>
    </div>
  )
}

function HowStep({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
        {n}
      </div>
      <h3 className="mt-3 font-bold text-slate-900">{title}</h3>
      <p className="mt-1.5 text-sm text-slate-600">{text}</p>
    </div>
  )
}
