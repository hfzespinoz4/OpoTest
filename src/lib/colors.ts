// Static Tailwind class map — required because Tailwind's JIT scanner
// cannot see dynamically-constructed class names like `bg-${color}-500`.
export const colorClasses: Record<
  string,
  { chip: string; ring: string; solid: string; text: string; softBg: string; softText: string; border: string }
> = {
  blue: {
    chip: 'bg-blue-100 text-blue-800',
    ring: 'ring-blue-500',
    solid: 'bg-blue-600',
    text: 'text-blue-600',
    softBg: 'bg-blue-50',
    softText: 'text-blue-700',
    border: 'border-blue-200',
  },
  indigo: {
    chip: 'bg-indigo-100 text-indigo-800',
    ring: 'ring-indigo-500',
    solid: 'bg-indigo-600',
    text: 'text-indigo-600',
    softBg: 'bg-indigo-50',
    softText: 'text-indigo-700',
    border: 'border-indigo-200',
  },
  rose: {
    chip: 'bg-rose-100 text-rose-800',
    ring: 'ring-rose-500',
    solid: 'bg-rose-600',
    text: 'text-rose-600',
    softBg: 'bg-rose-50',
    softText: 'text-rose-700',
    border: 'border-rose-200',
  },
  slate: {
    chip: 'bg-slate-200 text-slate-800',
    ring: 'ring-slate-500',
    solid: 'bg-slate-600',
    text: 'text-slate-600',
    softBg: 'bg-slate-50',
    softText: 'text-slate-700',
    border: 'border-slate-200',
  },
  orange: {
    chip: 'bg-orange-100 text-orange-800',
    ring: 'ring-orange-500',
    solid: 'bg-orange-600',
    text: 'text-orange-600',
    softBg: 'bg-orange-50',
    softText: 'text-orange-700',
    border: 'border-orange-200',
  },
  teal: {
    chip: 'bg-teal-100 text-teal-800',
    ring: 'ring-teal-500',
    solid: 'bg-teal-600',
    text: 'text-teal-600',
    softBg: 'bg-teal-50',
    softText: 'text-teal-700',
    border: 'border-teal-200',
  },
  cyan: {
    chip: 'bg-cyan-100 text-cyan-800',
    ring: 'ring-cyan-500',
    solid: 'bg-cyan-600',
    text: 'text-cyan-600',
    softBg: 'bg-cyan-50',
    softText: 'text-cyan-700',
    border: 'border-cyan-200',
  },
  violet: {
    chip: 'bg-violet-100 text-violet-800',
    ring: 'ring-violet-500',
    solid: 'bg-violet-600',
    text: 'text-violet-600',
    softBg: 'bg-violet-50',
    softText: 'text-violet-700',
    border: 'border-violet-200',
  },
  emerald: {
    chip: 'bg-emerald-100 text-emerald-800',
    ring: 'ring-emerald-500',
    solid: 'bg-emerald-600',
    text: 'text-emerald-600',
    softBg: 'bg-emerald-50',
    softText: 'text-emerald-700',
    border: 'border-emerald-200',
  },
  green: {
    chip: 'bg-green-100 text-green-800',
    ring: 'ring-green-500',
    solid: 'bg-green-600',
    text: 'text-green-600',
    softBg: 'bg-green-50',
    softText: 'text-green-700',
    border: 'border-green-200',
  },
  amber: {
    chip: 'bg-amber-100 text-amber-800',
    ring: 'ring-amber-500',
    solid: 'bg-amber-600',
    text: 'text-amber-600',
    softBg: 'bg-amber-50',
    softText: 'text-amber-700',
    border: 'border-amber-200',
  },
  lime: {
    chip: 'bg-lime-100 text-lime-800',
    ring: 'ring-lime-500',
    solid: 'bg-lime-600',
    text: 'text-lime-600',
    softBg: 'bg-lime-50',
    softText: 'text-lime-700',
    border: 'border-lime-200',
  },
  fuchsia: {
    chip: 'bg-fuchsia-100 text-fuchsia-800',
    ring: 'ring-fuchsia-500',
    solid: 'bg-fuchsia-600',
    text: 'text-fuchsia-600',
    softBg: 'bg-fuchsia-50',
    softText: 'text-fuchsia-700',
    border: 'border-fuchsia-200',
  },
  pink: {
    chip: 'bg-pink-100 text-pink-800',
    ring: 'ring-pink-500',
    solid: 'bg-pink-600',
    text: 'text-pink-600',
    softBg: 'bg-pink-50',
    softText: 'text-pink-700',
    border: 'border-pink-200',
  },
}

export function getColor(color: string) {
  return colorClasses[color] ?? colorClasses.blue
}

export const difficultyLabels: Record<string, string> = {
  facil: 'Fácil',
  intermedio: 'Intermedio',
  dificil: 'Difícil',
}

export const difficultyClasses: Record<string, string> = {
  facil: 'bg-green-100 text-green-800',
  intermedio: 'bg-amber-100 text-amber-800',
  dificil: 'bg-red-100 text-red-800',
}
