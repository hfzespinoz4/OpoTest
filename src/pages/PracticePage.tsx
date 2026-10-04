import { useMemo, useState } from 'react'
import { scales } from '../data/scales'
import type { Difficulty, Question, ScaleId } from '../data/types'
import { classificationPool } from '../lib/classify'
import { getColor, difficultyLabels, difficultyClasses } from '../lib/colors'
import { shuffle } from '../lib/shuffle'

type Phase = 'setup' | 'quiz' | 'results'
type DifficultyFilter = 'todas' | Difficulty

const COUNT_OPTIONS = [5, 10, 15, 20, 30]

export default function PracticePage() {
  const [phase, setPhase] = useState<Phase>('setup')
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('todas')
  const [count, setCount] = useState<number>(10)

  const [pool, setPool] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, ScaleId>>({})

  const available = useMemo(() => {
    return classificationPool.filter((q) => difficultyFilter === 'todas' || q.difficulty === difficultyFilter)
  }, [difficultyFilter])

  function startQuiz() {
    const n = Math.min(count, available.length)
    const selected = shuffle(available).slice(0, n)
    setPool(selected)
    setAnswers({})
    setIndex(0)
    setPhase('quiz')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function selectAnswer(scaleId: ScaleId) {
    const q = pool[index]
    setAnswers((prev) => ({ ...prev, [q.id]: scaleId }))
  }

  function finishQuiz() {
    setPhase('results')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function restartSameConfig() {
    startQuiz()
  }

  function newConfig() {
    setPhase('setup')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (phase === 'setup') {
    return (
      <SetupView
        difficultyFilter={difficultyFilter}
        setDifficultyFilter={setDifficultyFilter}
        count={count}
        setCount={setCount}
        available={available.length}
        onStart={startQuiz}
      />
    )
  }

  if (phase === 'quiz') {
    const q = pool[index]
    return (
      <QuizView
        pool={pool}
        index={index}
        setIndex={setIndex}
        question={q}
        selected={answers[q.id]}
        onSelect={selectAnswer}
        onFinish={finishQuiz}
        answeredCount={Object.keys(answers).length}
      />
    )
  }

  return <ResultsView pool={pool} answers={answers} onRetry={restartSameConfig} onNewConfig={newConfig} />
}

// ---------------------------------------------------------------------------

function SetupView(props: {
  difficultyFilter: DifficultyFilter
  setDifficultyFilter: (v: DifficultyFilter) => void
  count: number
  setCount: (v: number) => void
  available: number
  onStart: () => void
}) {
  const { difficultyFilter, setDifficultyFilter, count, setCount, available, onStart } = props

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900">Adivina la escala</h1>
      <p className="mt-2 text-slate-600">
        No eliges la escala de antemano: te mostramos una situación real y tú decides a cuál de las 14
        escalas de personalidad pertenece. Elige el nivel de complejidad y el número de preguntas.
      </p>

      <div className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-2">Nivel de complejidad</label>
          <div className="flex gap-2 flex-wrap">
            {(['todas', 'facil', 'intermedio', 'dificil'] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDifficultyFilter(d)}
                className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${
                  difficultyFilter === d
                    ? 'bg-brand-600 text-white border-brand-600'
                    : 'bg-white text-slate-600 border-slate-300 hover:border-brand-400'
                }`}
              >
                {d === 'todas' ? 'Todas' : difficultyLabels[d]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-2">Número de preguntas</label>
          <div className="flex gap-2 flex-wrap">
            {COUNT_OPTIONS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setCount(n)}
                className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${
                  count === n
                    ? 'bg-brand-600 text-white border-brand-600'
                    : 'bg-white text-slate-600 border-slate-300 hover:border-brand-400'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <p className="text-sm text-slate-500">
            {available === 0
              ? 'No hay preguntas para esta combinación.'
              : `${Math.min(count, available)} de ${available} preguntas disponibles`}
          </p>
          <button
            type="button"
            disabled={available === 0}
            onClick={onStart}
            className="rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Comenzar test
          </button>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------

function QuizView(props: {
  pool: Question[]
  index: number
  setIndex: (i: number) => void
  question: Question
  selected: ScaleId | undefined
  onSelect: (scaleId: ScaleId) => void
  onFinish: () => void
  answeredCount: number
}) {
  const { pool, index, setIndex, question, selected, onSelect, onFinish, answeredCount } = props
  const isLast = index === pool.length - 1
  const progress = ((index + 1) / pool.length) * 100

  // Stable per-question shuffle of the 14 scale options, so the order doesn't
  // telegraph anything and doesn't reshuffle on every re-render.
  const scaleOptions = useMemo(() => shuffle(scales), [question.id])

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
        <span>
          Pregunta {index + 1} de {pool.length}
        </span>
        <span>{answeredCount} respondidas</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full bg-brand-600 transition-all" style={{ width: `${progress}%` }} />
      </div>

      <div className="mt-6 flex items-center gap-2 flex-wrap">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${difficultyClasses[question.difficulty]}`}>
          {difficultyLabels[question.difficulty]}
        </span>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-slate-600 italic leading-relaxed">{question.scenario}</p>
        <p className="mt-4 font-bold text-slate-900 text-lg leading-snug">
          ¿A qué escala de personalidad pertenece mejor esta situación?
        </p>

        <div className="mt-5 grid sm:grid-cols-2 gap-2.5">
          {scaleOptions.map((s) => {
            const isSelected = selected === s.id
            const c = getColor(s.color)
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => onSelect(s.id)}
                className={`text-left rounded-xl border px-4 py-3 transition-colors ${
                  isSelected
                    ? `border-brand-500 ring-2 ring-brand-200 ${c.softBg}`
                    : 'border-slate-200 hover:border-brand-300 hover:bg-slate-50'
                }`}
              >
                <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${c.chip}`}>
                  {s.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          disabled={index === 0}
          onClick={() => setIndex(index - 1)}
          className="rounded-xl px-5 py-2.5 font-semibold text-slate-600 border border-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50"
        >
          ← Anterior
        </button>

        {isLast ? (
          <button
            type="button"
            onClick={onFinish}
            className="rounded-xl bg-emerald-600 px-6 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-700"
          >
            Finalizar y corregir
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIndex(index + 1)}
            className="rounded-xl bg-brand-600 px-6 py-2.5 font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Siguiente →
          </button>
        )}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------

function ResultsView(props: {
  pool: Question[]
  answers: Record<string, ScaleId>
  onRetry: () => void
  onNewConfig: () => void
}) {
  const { pool, answers, onRetry, onNewConfig } = props

  const correctCount = pool.filter((q) => answers[q.id] === q.scaleId).length
  const total = pool.length
  const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0

  const scoreColor = pct >= 80 ? 'text-emerald-600' : pct >= 50 ? 'text-amber-600' : 'text-red-600'

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Resultado</p>
        <p className={`mt-2 text-5xl font-extrabold ${scoreColor}`}>{pct}%</p>
        <p className="mt-2 text-slate-600">
          {correctCount} de {total} escalas acertadas
        </p>
        <div className="mt-6 flex justify-center gap-3 flex-wrap">
          <button
            type="button"
            onClick={onRetry}
            className="rounded-xl bg-brand-600 px-5 py-2.5 font-semibold text-white hover:bg-brand-700"
          >
            Repetir con la misma configuración
          </button>
          <button
            type="button"
            onClick={onNewConfig}
            className="rounded-xl border border-slate-300 px-5 py-2.5 font-semibold text-slate-700 hover:bg-slate-50"
          >
            Nueva configuración
          </button>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <h2 className="text-xl font-bold text-slate-900">Corrección detallada</h2>
        {pool.map((q, i) => (
          <QuestionReview key={q.id} question={q} index={i} selected={answers[q.id]} />
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-3 flex-wrap pb-6">
        <button
          type="button"
          onClick={onRetry}
          className="rounded-xl bg-brand-600 px-5 py-2.5 font-semibold text-white hover:bg-brand-700"
        >
          Repetir con la misma configuración
        </button>
        <button
          type="button"
          onClick={onNewConfig}
          className="rounded-xl border border-slate-300 px-5 py-2.5 font-semibold text-slate-700 hover:bg-slate-50"
        >
          Nueva configuración
        </button>
      </div>
    </div>
  )
}

function QuestionReview({
  question,
  index,
  selected,
}: {
  question: Question
  index: number
  selected: ScaleId | undefined
}) {
  const correctScale = scales.find((s) => s.id === question.scaleId)!
  const selectedScale = selected ? scales.find((s) => s.id === selected) : undefined
  const cCorrect = getColor(correctScale.color)
  const isCorrect = selected === question.scaleId

  const correctOption = question.options.find((o) => o.id === question.correctOptionId)!

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 flex-wrap">
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
            isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {isCorrect ? 'Correcta' : selected ? 'Incorrecta' : 'Sin responder'}
        </span>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${difficultyClasses[question.difficulty]}`}>
          {difficultyLabels[question.difficulty]}
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-600 italic">{question.scenario}</p>
      <p className="mt-2 font-bold text-slate-900">
        {index + 1}. ¿A qué escala de personalidad pertenece mejor esta situación?
      </p>

      <div className="mt-4 space-y-2.5">
        {!isCorrect && selectedScale && (
          <div className="rounded-xl border border-red-400 bg-red-50 px-4 py-3">
            <p className="font-medium text-slate-900 flex items-center gap-2 flex-wrap">
              <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${getColor(selectedScale.color).chip}`}>
                {selectedScale.name}
              </span>
              <span className="text-red-600 text-xs font-bold">✗ Tu respuesta</span>
            </p>
          </div>
        )}
        <div className="rounded-xl border border-emerald-400 bg-emerald-50 px-4 py-3">
          <p className="font-medium text-slate-900 flex items-center gap-2 flex-wrap">
            <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${cCorrect.chip}`}>
              {correctScale.name}
            </span>
            <span className="text-emerald-700 text-xs font-bold">✓ Escala correcta</span>
          </p>
          <p className="mt-1 text-sm text-slate-600">{correctScale.summary}</p>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Profundiza: dentro de esta escala
        </p>
        <p className="mt-1.5 text-sm font-semibold text-slate-800">{question.prompt}</p>
        <p className="mt-1 text-sm text-slate-700">
          <span className="font-semibold text-emerald-700">Mejor actitud: </span>
          {correctOption.text}
        </p>
        <p className="mt-1 text-sm text-slate-600">{correctOption.explanation}</p>
      </div>
    </div>
  )
}
