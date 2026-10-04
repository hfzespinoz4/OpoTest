import { questions } from '../data/questions'
import { scales } from '../data/scales'
import type { Question } from '../data/types'

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
}

const scaleNameList = scales.map((s) => normalize(s.name))

/**
 * A scenario is only usable for the "guess the scale" exercise if its text
 * doesn't name any of the 14 scales — otherwise the answer would be given away.
 * (The question's own `prompt`/`options` are never shown before the reveal,
 * since those almost always name the scale explicitly.)
 */
export function isBlindEligible(question: Question): boolean {
  const text = normalize(question.scenario)
  return !scaleNameList.some((name) => text.includes(name))
}

export const classificationPool: Question[] = questions.filter(isBlindEligible)
