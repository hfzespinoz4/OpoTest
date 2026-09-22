import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { scales } from '../data/scales'
import { questions } from '../data/questions'
import type { Difficulty, Question } from '../data/types'
import { getColor, difficultyLabels, difficultyClasses } from '../lib/colors'
import { shuffle } from '../lib/shuffle'

type Phase = 'setup' | 'quiz' | 'results'
type ScaleFilter = 'todas' | (typeof scales)[number]['id']
type DifficultyFilter = 'todas' | Difficulty

const COUNT_OPTIONS = [5, 10, 15, 20, 30]

export default function PracticePage() {
  const [searchParams] = useSearchParams()
  const preScale = searchParams.get('escala') as ScaleFilter | null

  const [phase, setPhase] = useState<Phase>('setup')
  const [scaleFilter, setScaleFilter] = useState<ScaleFilter>(preScale ?? 'todas')
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('todas')
  const [count, setCount] = useState<number>(10)

  const [pool, setPool] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  useEffect(() => {
    if (preScale) setScaleFilter(preScale)
  }, [preScale])

  const available = useMemo(() => {
    return questions.filter(
      (q) =>
        (scaleFilter === 'todas' || q.scaleId === scaleFilter) &&
        (difficultyFilter === 'todas' || q.difficulty === difficultyFilter),
    )
  }, [scaleFilter, difficultyFilter])

  function startQuiz() {
    const n = Math.min(count, available.length)
    const selected = shuffle(available).slice(0, n)
    setPool(selected)
    setAnswers({})
    setIndex(0)
    setPhase('quiz')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function selectAnswer(optionId: string) {
    const q = pool[index]
    setAnswers((prev) => ({ ...prev, [q.id]: optionId }))
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
        scaleFilter={scaleFilter}
        setScaleFilter={setScaleFilter}
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
  scaleFilter: ScaleFilter
  setScaleFilter: (v: ScaleFilter) => void
  difficultyFilter: DifficultyFilter
  setDifficultyFilter: (v: DifficultyFilter) => void
  count: number
  setCount: (v: number) => void
  available: number
  onStart: () => void
}) {
  const { scaleFilter, setScaleFilter, difficultyFilter, setDifficultyFilter, count, setCount, available, onStart } =
    props

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900">Configura tu simulacro</h1>
      <p className="mt-2 text-slate-600">
        Elige una escala concreta o practica con todas mezcladas, el nivel de dificultad y el número de
        preguntas.
      </p>

      <div className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-2">Escala</label>
          <select
            value={scaleFilter}
            onChange={(e) => setScaleFilter(e.target.value as ScaleFilter)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none"
          >
            <option value="todas">Todas las escalas (simulacro general)</option>
            {scales.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-2">Dificultad</label>
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
  selected: string | undefined
  onSelect: (optionId: string) => void
  onFinish: () => void
  answeredCount: number
}) {
  const { pool, index, setIndex, question, selected, onSelect, onFinish, answeredCount } = props
  const scale = scales.find((s) => s.id === question.scaleId)!
  const c = getColor(scale.color)
  const isLast = index === pool.length - 1
  const progress = ((index + 1) / pool.length) * 100

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
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${c.chip}`}>{scale.name}</span>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${difficultyClasses[question.difficulty]}`}>
          {difficultyLabels[question.difficulty]}
        </span>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-slate-600 italic leading-relaxed">{question.scenario}</p>
        <p className="mt-4 font-bold text-slate-900 text-lg leading-snug">{question.prompt}</p>

        <div className="mt-5 space-y-3">
          {question.options.map((opt) => {
            const isSelected = selected === opt.id
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onSelect(opt.id)}
                className={`w-full text-left rounded-xl border px-4 py-3 flex gap-3 transition-colors ${
                  isSelected
                    ? 'border-brand-500 bg-brand-50 ring-2 ring-brand-200'
                    : 'border-slate-200 hover:border-brand-300 hover:bg-slate-50'
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    isSelected ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {opt.id.toUpperCase()}
                </span>
                <span className="text-slate-800">{opt.text}</span>
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
  answers: Record<string, string>
  onRetry: () => void
  onNewConfig: () => void
}) {
  const { pool, answers, onRetry, onNewConfig } = props

  const correctCount = pool.filter((q) => answers[q.id] === q.correctOptionId).length
  const total = pool.length
  const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0

  const scoreColor = pct >= 80 ? 'text-emerald-600' : pct >= 50 ? 'text-amber-600' : 'text-red-600'

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Resultado</p>
        <p className={`mt-2 text-5xl font-extrabold ${scoreColor}`}>{pct}%</p>
        <p className="mt-2 text-slate-600">
          {correctCount} de {total} respuestas correctas
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
  selected: string | undefined
}) {
  const scale = scales.find((s) => s.id === question.scaleId)!
  const c = getColor(scale.color)
  const isCorrect = selected === question.correctOptionId

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
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${c.chip}`}>{scale.name}</span>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${difficultyClasses[question.difficulty]}`}>
          {difficultyLabels[question.difficulty]}
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-600 italic">{question.scenario}</p>
      <p className="mt-2 font-bold text-slate-900">
        {index + 1}. {question.prompt}
      </p>

      <div className="mt-4 space-y-2.5">
        {question.options.map((opt) => {
          const isTheCorrectOne = opt.id === question.correctOptionId
          const isTheSelectedOne = opt.id === selected

          let style = 'border-slate-200 bg-white'
          if (isTheCorrectOne) style = 'border-emerald-400 bg-emerald-50'
          else if (isTheSelectedOne && !isCorrect) style = 'border-red-400 bg-red-50'

          return (
            <div key={opt.id} className={`rounded-xl border px-4 py-3 ${style}`}>
              <div className="flex items-start gap-2">
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    isTheCorrectOne
                      ? 'bg-emerald-600 text-white'
                      : isTheSelectedOne
                        ? 'bg-red-500 text-white'
                        : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {opt.id.toUpperCase()}
                </span>
                <div className="flex-1">
                  <p className="font-medium text-slate-900 flex items-center gap-2 flex-wrap">
                    {opt.text}
                    {isTheCorrectOne && <span className="text-emerald-700 text-xs font-bold">✓ Respuesta correcta</span>}
                    {isTheSelectedOne && !isTheCorrectOne && (
                      <span className="text-red-600 text-xs font-bold">✗ Tu respuesta</span>
                    )}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{opt.explanation}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
