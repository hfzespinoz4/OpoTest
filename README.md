# OpoTest

Sitio web de preparación para la **prueba psicotécnica de personalidad** del proceso selectivo de
**Policía Municipal de Madrid**.

El contenido está construido a partir del análisis de ítems reales extraídos de varios cuestionarios y
simulacros de personalidad (más de 700 ítems), clasificados en las **14 escalas** habituales de este
tipo de pruebas:

- Tolerancia y flexibilidad
- Manipulación de la imagen
- Sinceridad
- Autoconfianza
- Integración social
- Tolerancia al estrés
- Autoexigencia profesional
- Estabilidad emocional
- Disponibilidad
- Habilidades interpersonales
- Trabajo en equipo
- Ansiedad
- Responsabilidad
- Depresión

## Qué incluye

- **Explicación de cada escala**: qué mide, indicadores en nivel alto y bajo, ejemplos de ítems reales y
  consejos para responder con coherencia.
- **Banco de preguntas de práctica** (84 preguntas): casos de la vida real tipo test de opción múltiple
  (una sola respuesta correcta), clasificados en **fácil / intermedio / difícil**, para cada una de las
  14 escalas.
- **Simulacros configurables**: elige una escala concreta o todas mezcladas, el nivel de dificultad y el
  número de preguntas.
- **Corrección detallada**: al terminar el test se muestra la respuesta correcta, la respuesta
  seleccionada y una explicación de por qué cada opción es correcta o incorrecta (estilo examen de
  certificación).

## Stack técnico

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

Todo el contenido (escalas y preguntas) vive en `src/data/` como datos tipados en TypeScript, sin
necesidad de backend ni base de datos.

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción (tsc + vite build)
npm run preview  # previsualizar el build
```

---

Material de preparación no oficial, con fines formativos.
