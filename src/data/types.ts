export type ScaleId =
  | 'tolerancia-flexibilidad'
  | 'manipulacion-imagen'
  | 'sinceridad'
  | 'autoconfianza'
  | 'integracion-social'
  | 'tolerancia-estres'
  | 'autoexigencia-profesional'
  | 'estabilidad-emocional'
  | 'disponibilidad'
  | 'habilidades-interpersonales'
  | 'trabajo-equipo'
  | 'ansiedad'
  | 'responsabilidad'
  | 'depresion'

export interface Scale {
  id: ScaleId
  name: string
  color: string
  summary: string
  definition: string[]
  highIndicators: string[]
  lowIndicators: string[]
  sampleItems: string[]
  tips: string[]
}

export type Difficulty = 'facil' | 'intermedio' | 'dificil'

export interface QuestionOption {
  id: 'a' | 'b' | 'c' | 'd'
  text: string
  explanation: string
}

export interface Question {
  id: string
  scaleId: ScaleId
  difficulty: Difficulty
  scenario: string
  prompt: string
  options: QuestionOption[]
  correctOptionId: QuestionOption['id']
}
