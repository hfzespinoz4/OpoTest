import type { Scale } from './types'

export const scales: Scale[] = [
  {
    id: 'estabilidad-emocional',
    name: 'Estabilidad emocional',
    color: 'blue',
    summary:
      'Capacidad para mantener el control de las emociones y del estado de ánimo ante contratiempos, sin cambios bruscos de humor ni reacciones desproporcionadas.',
    definition: [
      'La estabilidad emocional mide el grado en que una persona mantiene un tono afectivo constante y controlado frente a las fricciones del día a día: enfados, malas noticias, contratiempos o críticas. Un agente de policía se enfrenta continuamente a situaciones de tensión (discusiones, agresividad verbal, quejas) y necesita responder desde la calma, no desde el impulso.',
      'No es lo mismo estabilidad emocional que ausencia de emociones: se trata de sentir, pero no dejar que el enfado, la irritación o el disgusto dirijan la conducta ni se traduzcan en gritos, portazos o respuestas desproporcionadas.',
      'En los cuestionarios de personalidad esta escala se detecta con ítems sobre cambios de humor, facilidad para enfadarse, alzar la voz al discutir, o necesidad de "explotar" para liberar tensión.',
    ],
    highIndicators: [
      'Mantiene la calma y la sonrisa aunque esté enfadado con alguien.',
      'No suele tener cambios de humor bruscos ni imprevisibles.',
      'Ante una mala noticia, reacciona con serenidad antes que con nerviosismo.',
      'Controla el tono de voz incluso en una discusión acalorada.',
      'Se considera a sí mismo una persona sensata, tranquila y "poco irritable".',
    ],
    lowIndicators: [
      'Alza la voz con facilidad cuando discute con alguien.',
      'Su estado de ánimo depende de cómo le vayan los acontecimientos del día.',
      'Cosas insignificantes le hacen perder el control.',
      'Expresa las emociones de forma explosiva.',
      'Tiene ganas de gritar cuando está muy enfadado.',
    ],
    sampleItems: [
      '"Hay veces que hasta cosas insignificantes me hacen perder el control y me alteran."',
      '"Tiendo a alzar la voz cuando discuto con alguien."',
      '"Mis estados de ánimo dependen de cómo se sucedan los acontecimientos del día."',
    ],
    tips: [
      'Responde pensando en tu conducta habitual, no en el episodio puntual más intenso que recuerdes.',
      'El evaluador busca coherencia entre esta escala y "Tolerancia al estrés": si contestas como alguien inalterable en absolutamente todo, puede levantar sospecha de "Manipulación de la imagen".',
    ],
  },
  {
    id: 'autoconfianza',
    name: 'Autoconfianza',
    color: 'indigo',
    summary:
      'Grado de seguridad en las propias capacidades, criterio y decisiones, incluso bajo presión o ante la oposición de otros.',
    definition: [
      'La autoconfianza evalúa hasta qué punto la persona confía en sus propios recursos para afrontar tareas difíciles, tomar decisiones bajo presión y sostener su criterio frente a la crítica o la discrepancia ajena. En el trabajo policial, la autoconfianza se traduce en tomar decisiones operativas rápidas, intervenir con autoridad natural y no bloquearse ante la incertidumbre.',
      'No debe confundirse con arrogancia: una autoconfianza sana reconoce también los propios errores y limitaciones, algo que estas pruebas valoran explícitamente junto a la seguridad en uno mismo.',
    ],
    highIndicators: [
      'Toma decisiones difíciles incluso bajo una gran presión.',
      'Defiende sus convicciones con firmeza aunque la mayoría opine distinto.',
      'Confía en reaccionar con rapidez y templanza ante una emergencia.',
      'Mantiene su autoridad sin necesidad de alzar la voz.',
      'Reconoce sus talentos con el mismo realismo con que acepta sus debilidades.',
    ],
    lowIndicators: [
      'Duda de su propio criterio al tomar una decisión importante.',
      'Necesita que otros le confirmen que está haciendo bien su trabajo.',
      'Le cuesta hablar con seguridad ante alguien desafiante o agresivo.',
      'Evita expresar su opinión por miedo a ser juzgado.',
    ],
    sampleItems: [
      '"Confío en mi capacidad para reaccionar de forma rápida y comedida ante una emergencia."',
      '"Tengo la capacidad de tomar decisiones difíciles incluso bajo una gran presión."',
      '"Con frecuencia necesito la confirmación de otras personas antes de sentirme seguro de una decisión que ya había tomado."',
    ],
    tips: [
      'Diferénciala de "Autoexigencia profesional": la autoconfianza habla de creer en tu capacidad, la autoexigencia de cuánto te exiges en el resultado.',
      'Contestar siempre "totalmente de acuerdo" en ítems extremos ("nunca dudo", "siempre acierto") puede leerse como deseabilidad social más que como confianza real.',
    ],
  },
  {
    id: 'ansiedad',
    name: 'Ansiedad',
    color: 'rose',
    summary:
      'Tendencia a experimentar nerviosismo, tensión física y preocupación anticipatoria ante situaciones cotidianas o inciertas.',
    definition: [
      'Esta escala explora la activación fisiológica y cognitiva de tipo ansioso: nerviosismo, dificultad para conciliar el sueño, sudoración, impaciencia, tensión interna o preocupación excesiva por posibles desgracias futuras. Se diferencia de la "Tolerancia al estrés" en que la ansiedad es un rasgo más de base (cómo de activado vive uno el día a día), mientras que la tolerancia al estrés mide la respuesta específica ante situaciones de presión puntual.',
      'Un nivel moderado de activación es normal y hasta adaptativo; lo que se penaliza es un patrón elevado y generalizado de nerviosismo que pueda interferir con la concentración, el descanso o la toma de decisiones en el puesto de trabajo.',
    ],
    highIndicators: [
      'Le preocupan bastante las cosas, incluso las de poca importancia.',
      'Le cuesta conciliar el sueño por las preocupaciones.',
      'Se pone muy nervioso si sabe que va a llegar tarde a una cita.',
      'Siente tensión interna con frecuencia.',
      'Suda o se acelera sin saber bien por qué.',
    ],
    lowIndicators: [
      'Es capaz de conciliar el sueño sin problemas.',
      'No le pone nervioso esperar en una cola.',
      'Rara vez piensa en desgracias futuras.',
      'Se considera una persona tranquila, no nerviosa.',
    ],
    sampleItems: [
      '"Algunas noches las preocupaciones no me dejan conciliar el sueño."',
      '"Me pone muy nervioso tener que esperar en una cola."',
      '"Frecuentemente siento una gran tensión interna."',
    ],
    tips: [
      'Cuidado con la sobre-corrección: negar cualquier nerviosismo en absolutamente todos los ítems (incluidos los de sentido común, como los nervios antes de un examen) resulta poco creíble y puede activar la escala de sinceridad.',
      'Un patrón realista combina baja ansiedad de base con reconocimiento puntual de nervios ante situaciones objetivamente exigentes.',
    ],
  },
  {
    id: 'depresion',
    name: 'Depresión',
    color: 'slate',
    summary:
      'Tendencia al ánimo bajo, la desesperanza, la falta de energía o la visión pesimista de uno mismo y del futuro.',
    definition: [
      'La escala de depresión no busca un diagnóstico clínico, sino un patrón de personalidad: visión general optimista frente a pesimista, sensación de control sobre la propia vida, energía vital, sentimientos de soledad o inutilidad, y satisfacción general con la propia existencia.',
      'En el contexto de un puesto con responsabilidad sobre la seguridad de terceros, interesa un perfil con buen ánimo de base, capacidad de disfrute y sensación de sentido, ya que sostiene la motivación y la resistencia ante jornadas duras.',
    ],
    highIndicators: [
      'Se siente frecuentemente triste o sin fuerzas.',
      'Cree que "si algo malo tiene que pasarle, seguro que le pasa".',
      'Se siente aislado o incomprendido últimamente.',
      'Piensa que nada le sale bien.',
    ],
    lowIndicators: [
      'Ve el vaso medio lleno.',
      'Se siente igual de feliz que la mayoría de la gente.',
      'Siente que tiene control sobre lo que sucede en su vida.',
      'En los momentos difíciles cuenta con el apoyo de su familia.',
    ],
    sampleItems: [
      '"Últimamente me siento sin fuerzas para continuar con mi vida."',
      '"Todo parece salir mal en mi vida."',
      '"Siempre veo el vaso medio lleno."',
    ],
    tips: [
      'Estos ítems suelen combinarse con preguntas "trampa" en sentido inverso (redactadas en negativo) para comprobar coherencia; léelas con atención, no vayas en piloto automático marcando siempre la misma columna.',
    ],
  },
  {
    id: 'tolerancia-estres',
    name: 'Tolerancia al estrés',
    color: 'orange',
    summary:
      'Capacidad de seguir pensando y actuando con eficacia cuando la presión, la urgencia o la gravedad de una situación aumentan.',
    definition: [
      'Mide la respuesta funcional ante situaciones de presión aguda: emergencias, acumulación de tareas, imprevistos graves o acontecimientos que "desbordan". A diferencia de la ansiedad (activación de base), aquí se evalúa específicamente si la persona mantiene el rendimiento y la claridad mental cuando la exigencia sube, algo central en el trabajo policial (accidentes, altercados, intervenciones urgentes).',
      'Se valoran tanto la reacción inmediata (no quedarse bloqueado, saber cómo actuar) como la recuperación posterior (no arrastrar el desgaste emocional del incidente).',
    ],
    highIndicators: [
      'Sabe cómo actuar cuando ocurre un accidente.',
      'Mantiene la calma en situaciones tensas.',
      'Cuando le llegan varios problemas a la vez, sabe priorizar.',
      'Suele superar los reveses de la vida con relativa facilidad.',
    ],
    lowIndicators: [
      'Ante una emergencia, "mira hacia otro lado" o se bloquea.',
      'Se abruma cuando ocurre algún acontecimiento importante.',
      'Los problemas demasiado difíciles le agobian y desaniman.',
      'Cuando las cosas se complican siente que es incapaz de hacerles frente.',
    ],
    sampleItems: [
      '"Cuando ocurre un accidente sé cómo actuar."',
      '"Si ocurre una emergencia miro hacia otro lado."',
      '"Los problemas demasiado difíciles me agobian y me desaniman."',
    ],
    tips: [
      'Piensa en ejemplos concretos de tu vida (estudios, trabajo, familia) en los que tuvieras que actuar bajo presión: te ayudará a responder con consistencia a lo largo de todo el cuestionario.',
    ],
  },
  {
    id: 'tolerancia-flexibilidad',
    name: 'Tolerancia y flexibilidad',
    color: 'teal',
    summary:
      'Apertura para aceptar personas, ideas y circunstancias distintas a las propias, y capacidad de adaptación cuando cambian las reglas del juego.',
    definition: [
      'Combina dos componentes relacionados: la tolerancia (aceptar sin juzgar a personas con formas de pensar, creer o comportarse distintas) y la flexibilidad (adaptarse cuando cambian los objetivos, el método de trabajo o las circunstancias, sin rigidez).',
      'Un agente de policía municipal trata a diario con perfiles sociales muy diversos; la escala penaliza el prejuicio, la crítica sistemática al que no cumple las normas "a mi manera" y la incapacidad de cambiar de plan cuando la situación lo exige.',
    ],
    highIndicators: [
      'Trata de aceptar a las personas como son, sin juzgar sus comportamientos.',
      'Se adapta con facilidad cuando cambian los objetivos de un trabajo.',
      'Es comprensivo con otras religiones o ideologías aunque no las comparta.',
      'Ante el error ajeno, busca una solución constructiva en vez de alterarse.',
    ],
    lowIndicators: [
      'Critica con frecuencia el modo de actuar y los errores de los demás.',
      'No soporta los errores o deficiencias de otros cuando trabaja en grupo.',
      'Es tajante al decidir y no contempla cambiar de opinión.',
      'Le desagrada la gente que llega tarde o no respeta ciertas normas.',
    ],
    sampleItems: [
      '"No hago juicios de valor sobre las cosas que hace la gente hasta que conozco los hechos."',
      '"Si los objetivos de un trabajo cambian por completo soy capaz de adaptarme a ellos."',
      '"Tiendo a hacer burlas y críticas de la gente que no me cae bien."',
    ],
    tips: [
      'Ojo con el matiz: tolerancia no equivale a permisividad ante conductas incívicas o ilegales, sino a no prejuzgar a las personas y saber adaptarte; la propia prueba también contiene ítems de "Responsabilidad" que valoran positivamente el cumplimiento estricto de las normas.',
    ],
  },
  {
    id: 'disponibilidad',
    name: 'Disponibilidad',
    color: 'cyan',
    summary:
      'Predisposición a estar accesible y a anteponer, cuando es necesario, las exigencias del servicio a la comodidad personal.',
    definition: [
      'Evalúa la actitud ante la disponibilidad horaria, la localización fuera de turno, la ayuda espontánea a compañeros o ciudadanos y la flexibilidad para cubrir necesidades del servicio (turnos, urgencias, guardias). Es una de las escalas más directamente ligadas a la naturaleza del puesto de policía municipal, con turnicidad y posibles imprevistos.',
      'No implica anular la vida personal, sino mostrar una actitud de servicio y compromiso cuando el trabajo lo requiere de forma razonable.',
    ],
    highIndicators: [
      'Está disponible cuando le llaman del trabajo.',
      'Si ve a alguien en apuros, hace todo lo posible por ayudarle.',
      'Intenta estar localizable.',
      'Podría posponer unas vacaciones planificadas si el trabajo lo exigiera de verdad.',
    ],
    lowIndicators: [
      'Da preferencia absoluta a su vida personal frente al trabajo.',
      '"Si estoy fuera de horario laboral, que me olviden."',
      'No estaría localizable si le llama un compañero.',
      'Le molesta que le pidan ayuda para algo que "podrían hacer solos".',
    ],
    sampleItems: [
      '"Intento estar localizable y disponible."',
      '"Si estoy fuera de horario laboral, que me olviden."',
      '"Podría posponer unas vacaciones planificadas si el trabajo lo exigiera."',
    ],
    tips: [
      'Existe un equilibrio deseable entre disponibilidad y vida privada: el propio cuestionario contiene ítems que penalizan el extremo opuesto ("antepongo siempre el trabajo a todo"), asociado más a falta de límites que a compromiso real.',
    ],
  },
  {
    id: 'habilidades-interpersonales',
    name: 'Habilidades interpersonales',
    color: 'violet',
    summary:
      'Capacidad para tratar, comunicarse y actuar con acierto ante todo tipo de personas: escuchar, negociar, ser diplomático y calmar situaciones tensas.',
    definition: [
      'Reúne las competencias sociales prácticas: saber escuchar, ser asertivo sin ser agresivo, mostrar diplomacia cuando conviene, reconocer emociones propias y ajenas, negociar desacuerdos y calmar a una persona alterada con la palabra. Es una de las competencias más evaluadas en el trato policial con ciudadanos, ya que gran parte de las intervenciones se resuelven por la vía verbal antes que por la fuerza.',
      'Se diferencia de "Integración social" (que mide el ajuste del propio candidato al grupo) en que aquí el foco está en la habilidad para manejar la interacción con los demás, sea cual sea su estado de ánimo o actitud.',
    ],
    highIndicators: [
      'Sabe cómo calmar a una persona enfadada u hostil usando la palabra.',
      'Es capaz de ser diplomático cuando debe serlo y firme cuando debe serlo.',
      'Reconoce fácilmente si alguien está alterado, alegre o enfadado.',
      'Sabe negociar cuando hay un desacuerdo.',
    ],
    lowIndicators: [
      'Le cuesta congeniar con personas muy diferentes a él.',
      'No sabe cómo ajustarse a las exigencias o al estilo comunicativo de los demás.',
      'Prefiere evitar el contacto con desconocidos.',
      'Le cuesta iniciar conversaciones.',
    ],
    sampleItems: [
      '"Sé cómo calmar a una persona enfadada u hostil usando la palabra."',
      '"Soy sincero cuando debo serlo y también diplomático cuando debo serlo."',
      '"Habitualmente sé negociar cuando hay un desacuerdo."',
    ],
    tips: [
      'Los ítems de esta escala suelen plantear un "cómo", no solo un "qué": la clave para acertar en los test de escenario es identificar la opción que resuelve el conflicto sin escalarlo y sin renunciar a la autoridad del agente.',
    ],
  },
  {
    id: 'integracion-social',
    name: 'Integración social',
    color: 'emerald',
    summary:
      'Facilidad para sentirse parte de un grupo, participar en la vida social y establecer vínculos de pertenencia estables.',
    definition: [
      'Mide el grado en que la persona se siente cómoda, aceptada e implicada en los grupos a los que pertenece (equipo de trabajo, comunidad, entorno social), frente a la sensación de aislamiento o de no encajar. Un buen nivel de integración social favorece la cohesión de los equipos y la relación de proximidad con el vecindario, propia de la policía municipal.',
      'Se complementa con "Trabajo en equipo": la integración social es más amplia (sentirse parte de un grupo) mientras que el trabajo en equipo es más específico de la tarea compartida.',
    ],
    highIndicators: [
      'Se siente cómodo entre la gente y en las reuniones sociales.',
      'Le gustan las iniciativas que hay en su barrio.',
      'Se integra con naturalidad cuando pasa a formar parte de un grupo nuevo.',
      'Tiene facilidad para "hacerse un hueco" y sentirse aceptado.',
    ],
    lowIndicators: [
      'A menudo siente que no pertenece al grupo.',
      'Le cuesta integrarse en grupos nuevos.',
      'Prefiere ir solo a los sitios y sin dar explicaciones.',
      'Últimamente se siente más encerrado en sí mismo.',
    ],
    sampleItems: [
      '"Estoy muy cómodo entre la gente."',
      '"A menudo siento que no pertenezco al grupo."',
      '"Habitualmente me integro con naturalidad cuando paso a formar parte de un grupo nuevo."',
    ],
    tips: [
      'No hay que confundirla con extroversión pura: se puede ser reservado y, aun así, sentirse parte del grupo y cómodo en él.',
    ],
  },
  {
    id: 'trabajo-equipo',
    name: 'Trabajo en equipo',
    color: 'green',
    summary:
      'Preferencia y eficacia para colaborar con otros, compartir responsabilidad, confiar en los compañeros y anteponer el objetivo común al lucimiento individual.',
    definition: [
      'Explora si la persona disfruta y rinde trabajando junto a otros, confía en las capacidades del equipo, comparte información y apoya a compañeros nuevos, frente al perfil que prefiere trabajar en solitario, desconfía del rendimiento ajeno o se irrita si no se sigue su criterio.',
      'En un cuerpo policial el trabajo en pareja o en dispositivos coordinados es constante, por lo que se valora muy positivamente la disposición a colaborar sin renunciar a la responsabilidad individual.',
    ],
    highIndicators: [
      'Disfruta de los trabajos en grupo.',
      'Confía en la capacidad de sus compañeros.',
      'Comparte su punto de vista cuando trabaja en equipo.',
      'Ayuda a los compañeros nuevos que empiezan a trabajar.',
    ],
    lowIndicators: [
      'Prefiere trabajar solo porque es "más eficaz".',
      'Cree que en los trabajos en grupo se pierde mucho tiempo.',
      'Se enfada considerablemente si no se le hace caso en un trabajo de equipo.',
      'En los asuntos serios prefiere llevar solo la responsabilidad.',
    ],
    sampleItems: [
      '"La calidad de mi trabajo mejora cuando lo hago en equipo."',
      '"Me resulta más fácil hacer mi trabajo cuando no tengo que depender de otras personas."',
      '"Confío en la capacidad de mis compañeros."',
    ],
    tips: [
      'Algunos ítems están invertidos (valoran positivamente la autonomía, no el trabajo en equipo); no asumas que "estar de acuerdo" siempre puntúa igual: lee bien el sentido de la frase.',
    ],
  },
  {
    id: 'autoexigencia-profesional',
    name: 'Autoexigencia profesional',
    color: 'amber',
    summary:
      'Nivel de exigencia personal con la calidad del propio trabajo, la superación de obstáculos y la mejora continua, sin depender de la supervisión externa.',
    definition: [
      'Mide el estándar interno de calidad que la persona se impone, su persistencia ante los obstáculos y su orientación a la mejora, aunque nadie esté evaluando el resultado. Incluye matices como el perfeccionismo (que en exceso puede ser disfuncional) y la capacidad de aceptar el error como parte del aprendizaje.',
      'Se busca un punto intermedio: ni conformismo ("con que cumpla lo mínimo, vale") ni perfeccionismo paralizante que impida cerrar tareas o genere autocrítica excesiva.',
    ],
    highIndicators: [
      'Cree que las cosas siempre se pueden hacer mejor.',
      'Los obstáculos le hacen superarse para vencerlos.',
      'Es exigente con su trabajo aunque no tenga que dar cuentas a nadie.',
      'Difícilmente desiste de una actividad que ha comenzado.',
    ],
    lowIndicators: [
      'Prefiere fijarse metas poco ambiciosas para asegurarse de alcanzarlas.',
      'Considera innecesario mejorar un resultado que ya cumple los mínimos.',
      'Cuando algo entorpece sus proyectos, no insiste y prueba otra cosa.',
      'Los problemas demasiado difíciles le desaniman rápido.',
    ],
    sampleItems: [
      '"Soy exigente con mi trabajo aun cuando no tengo que dar cuenta a otros."',
      '"Cuando una tarea cumple los requisitos mínimos, considero innecesario dedicar más esfuerzo para mejorar el resultado."',
      '"Los obstáculos y dificultades hacen que me supere para vencerlos."',
    ],
    tips: [
      'Cuidado con el perfeccionismo extremo: algunos ítems detectan el lado disfuncional ("necesito ser el mejor en todo", "me critico mucho si algo no sale como quiero"); un perfil equilibrado admite el error sin hundirse.',
    ],
  },
  {
    id: 'responsabilidad',
    name: 'Responsabilidad',
    color: 'lime',
    summary:
      'Grado de cumplimiento de compromisos, normas, plazos y obligaciones, con independencia de que exista o no supervisión.',
    definition: [
      'Evalúa la fiabilidad de la persona: puntualidad, orden, planificación, cumplimiento de promesas y acatamiento de normas y procedimientos. Es una de las escalas con mayor peso en cualquier puesto de seguridad, ya que de ella depende la confianza que se puede depositar en el candidato para cumplir protocolos y no dejar tareas a medias.',
      'Se relaciona con "Autoexigencia profesional", pero aquí el foco está en el cumplimiento formal de lo comprometido (llegar a la hora, entregar a tiempo, seguir el procedimiento) más que en la calidad o ambición del resultado.',
    ],
    highIndicators: [
      'Anota sus obligaciones y compromisos.',
      'Suele cumplir con los planes que se ha propuesto.',
      'Casi siempre termina los trabajos a tiempo.',
      'No necesita que le recuerden lo que debe hacer.',
    ],
    lowIndicators: [
      'Suele dejar sus cosas desordenadas.',
      'Cuando puede, elude sus deberes.',
      'Ha faltado al trabajo o a una cita porque no le apetecía.',
      'Los plazos, para él, "siempre son orientativos".',
    ],
    sampleItems: [
      '"A menudo anoto mis obligaciones y compromisos."',
      '"Cuando puedo eludo mis deberes."',
      '"Los plazos siempre son orientativos."',
    ],
    tips: [
      'Esta escala suele correlacionar con la de "Sinceridad": si en un ítem admites alguna vez haber incumplido un plazo, no es contradictorio con ser responsable, siempre que el patrón general sea de cumplimiento.',
    ],
  },
  {
    id: 'sinceridad',
    name: 'Sinceridad',
    color: 'fuchsia',
    summary:
      'Escala de control que detecta si el candidato está respondiendo con honestidad o intentando dar una imagen "perfecta" e inverosímil de sí mismo.',
    definition: [
      'No mide un rasgo de personalidad en sentido estricto, sino la validez de las respuestas al resto del cuestionario. Contiene afirmaciones absolutas y extremas del tipo "nunca he mentido", "siempre he cumplido todas las normas" o "nunca me he enfadado", que estadísticamente casi nadie puede suscribir con total sinceridad.',
      'Si el candidato marca "muy de acuerdo" en un número elevado de estos ítems extremos, el sistema interpreta que está intentando parecer perfecto en lugar de responder con naturalidad, lo que puede invalidar o penalizar el perfil completo, incluso si el resto de escalas eran, en el fondo, favorables.',
    ],
    highIndicators: [
      'Admite pequeñas faltas normales: llegar tarde alguna vez, haberse enfadado en alguna ocasión, haber roto o perdido algo ajeno de pequeño.',
      'Reconoce que a veces piensa cosas que no contaría a nadie.',
      'Acepta que en alguna ocasión ha culpado a otra persona de algo que había hecho él.',
    ],
    lowIndicators: [
      '"Nunca he dicho una mentira."',
      '"Siempre he estado completamente de acuerdo con los demás."',
      '"Nunca he criticado a otra persona."',
      '"Jamás he desobedecido las órdenes recibidas, ni siquiera siendo niño."',
    ],
    sampleItems: [
      '"Nunca he desobedecido las órdenes recibidas, ni siquiera siendo niño."',
      '"Alguna vez he llegado tarde a alguna cita o al trabajo."',
      '"Todos mis hábitos son buenos y deseables."',
    ],
    tips: [
      'La estrategia ganadora no es "quedar bien", sino responder con naturalidad: todo el mundo ha llegado tarde alguna vez o se ha enfadado en alguna ocasión, y reconocerlo con moderación es precisamente lo que da credibilidad al resto de tus respuestas.',
    ],
  },
  {
    id: 'manipulacion-imagen',
    name: 'Manipulación de la imagen',
    color: 'pink',
    summary:
      'Escala de control que detecta la tendencia a gestionar deliberadamente la impresión que se da a los demás, exagerando virtudes y ocultando defectos.',
    definition: [
      'A diferencia de "Sinceridad" (que detecta la negación de defectos universales), esta escala mide la deseabilidad social activa: el deseo de causar buena impresión, presumir de méritos, aparentar más seguridad o virtud de la que se tiene en realidad, o adaptar el relato de los hechos para quedar mejor parado.',
      'Un cierto grado de cuidado de la propia imagen es normal (todos queremos causar buena impresión en una entrevista); lo que se penaliza es la sistematicidad: responder siempre pensando "¿qué contestación me hace quedar mejor?" en lugar de "¿qué es lo que realmente suelo hacer?".',
    ],
    highIndicators: [
      'Procura dar buena imagen de sí mismo en (casi) cualquier contexto.',
      'Con frecuencia alardea de sus éxitos.',
      'Intenta demostrar que sabe o entiende de todo.',
      'Si comete un error, prefiere que "cuantos menos lo sepan, mejor".',
    ],
    lowIndicators: [
      'Describe lo ocurrido tal cual sucedió, aunque reconocer un error pueda perjudicarle.',
      'No modifica su forma de presentarse según quién le esté evaluando.',
      'Es preciso al describir sus actuaciones, sin buscar causar una impresión especialmente positiva.',
    ],
    sampleItems: [
      '"Procuro dar buena imagen de mí."',
      '"Con frecuencia alardeo de mis éxitos."',
      '"Cuando otras personas me evalúan, procuro mostrar principalmente mis cualidades y minimizar mis aspectos menos favorables."',
    ],
    tips: [
      'Esta escala y la de Sinceridad son las que más candidatos hacen tambalear un perfil por lo demás sólido: responde pensando en tu comportamiento habitual y no en "la respuesta que un policía debería dar".',
    ],
  },
]

export function getScale(id: string): Scale | undefined {
  return scales.find((s) => s.id === id)
}
