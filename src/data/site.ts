// Dados centrais do site. Tudo que estiver marcado com TODO precisa ser confirmado com a cliente antes de publicar.

export const site = {
  marca: 'Bienestar desde Adentro',
  // TODO: nome completo da médica e número de registro (RETHUS / tarjeta profesional)
  profesional: 'Dra. [Nombre Apellido]',
  registro: 'Registro médico [N.º RETHUS]',
  titulo: 'Médica estética',
  ciudad: 'Medellín',
  // TODO: bairro/endereço do consultório (El Poblado, Laureles...?)
  direccion: 'Medellín, Antioquia',
  whatsapp: '573012051979',
  whatsappVisible: '301 205 1979',
  instagram: '', // TODO
  url: 'https://el-capri.vercel.app', // TODO: domínio definitivo
};

export const waLink = (msg = 'Hola, quiero agendar una valoración') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const tratamientos = [
  {
    id: 'botox',
    nombre: 'Toxina botulínica',
    apodo: 'Botox',
    resumen:
      'Relaja de forma controlada los músculos que forman las líneas de expresión de la frente, el entrecejo y las patas de gallo.',
    ideal: 'Líneas de expresión, prevención, mirada cansada',
    detalle: 'Sesión de 20–30 min · efecto visible en 7–14 días · suele durar de 3 a 6 meses',
    msg: 'Hola, quiero información sobre Botox',
  },
  {
    id: 'rellenos',
    nombre: 'Ácido hialurónico',
    apodo: 'Rellenos faciales',
    resumen:
      'Devuelve volumen y define contornos en labios, pómulos, mentón y mandíbula, buscando un resultado proporcionado y natural.',
    ideal: 'Labios, ojeras, surcos, perfilado de mandíbula',
    detalle: 'Resultado inmediato · duración variable según zona y producto',
    msg: 'Hola, quiero información sobre rellenos con ácido hialurónico',
  },
  {
    id: 'plasma',
    nombre: 'Plasma rico en plaquetas',
    apodo: 'Plasma facial',
    resumen:
      'Usa tu propio plasma para estimular colágeno y mejorar la textura, la luminosidad y las líneas finas de la piel.',
    ideal: 'Piel opaca, textura irregular, primeros signos de edad',
    detalle: '100% autólogo · se recomiendan varias sesiones',
    msg: 'Hola, quiero información sobre plasma facial',
  },
  {
    id: 'sueroterapia',
    nombre: 'Sueroterapia',
    apodo: 'Vitaminas intravenosas',
    resumen:
      'Fórmulas intravenosas con vitaminas, minerales y antioxidantes, indicadas después de una valoración médica.',
    ideal: 'Cansancio, apoyo nutricional, cuidado de la piel',
    detalle: 'Sesión de 40–60 min en tu casa u oficina, mientras descansas o trabajas',
    msg: 'Hola, quiero información sobre sueroterapia',
  },
];

// Textos suavizados em relação aos flyers: evitamos promessas como "elimina metales pesados".
export const sueros = [
  { nombre: 'Multivitamínico', color: '#E8A93B', texto: 'Complejo B, B12, zinc y magnesio para energía y vitalidad.' },
  { nombre: 'Megadosis de vitamina C', color: '#E0762F', texto: 'Antioxidante y apoyo a la producción de colágeno.' },
  { nombre: 'Antienvejecimiento', color: '#8A5BB8', texto: 'Antioxidantes enfocados en la piel y el estrés oxidativo.' },
  { nombre: 'Detox', color: '#6FA85A', texto: 'Hidratación y nutrientes de apoyo a la función hepática.' },
  { nombre: 'Hidratación', color: '#4E8FCB', texto: 'Líquidos y electrolitos para una hidratación profunda.' },
];

export const pasos = [
  { t: 'Escríbenos', d: 'Dinos qué quieres mejorar, tu zona y el horario que te sirve. Respondemos por WhatsApp.' },
  { t: 'Valoración médica', d: 'Revisamos tu historia y tus expectativas antes de aplicar cualquier tratamiento.' },
  { t: 'Vamos hasta ti', d: 'Llegamos a tu casa u oficina con todo el material estéril. Tú solo necesitas un espacio con buena luz.' },
  { t: 'Control', d: 'Seguimiento por WhatsApp y visita de control si hace falta algún ajuste.' },
];

// TODO: confirmar com a cliente quais zonas ela atende (e se cobra deslocamento diferente por zona)
export const zonas = ['El Poblado', 'Envigado', 'Laureles', 'Sabaneta', 'Belén', 'Estadio', 'Llanogrande'];

export const ventajas = [
  { t: 'Sin tráfico ni salas de espera', d: 'El tratamiento llega a ti. Tu tiempo se queda contigo.' },
  // TODO: confirmar faixa de horário (noites e fins de semana?)
  { t: 'En tu horario', d: 'Agenda antes del trabajo, en la hora del almuerzo o al final del día.' },
  { t: 'Privacidad total', d: 'En tu casa u oficina, sin cruzarte con nadie.' },
  { t: 'Mismo estándar médico', d: 'Material estéril de un solo uso, producto sellado y valoración previa.' },
];

export const faqs = [
  {
    q: '¿Cuánto dura el efecto del Botox?',
    a: 'En la mayoría de las personas el efecto dura entre 3 y 6 meses. Depende del metabolismo, la zona tratada y la frecuencia de las aplicaciones.',
  },
  {
    q: '¿Voy a quedar con cara "congelada"?',
    a: 'No es el objetivo. La dosis se ajusta para suavizar las líneas sin quitar la expresión. Buscamos que te veas descansada, no diferente.',
  },
  {
    q: '¿Duele?',
    a: 'Se usan agujas muy finas y, cuando hace falta, anestesia tópica. La mayoría lo describe como una molestia leve y breve.',
  },
  {
    q: '¿Cuándo puedo volver a mi rutina?',
    a: 'Normalmente el mismo día. Te daremos indicaciones simples, como no acostarte ni hacer ejercicio intenso en las horas siguientes.',
  },
  {
    q: '¿Quién no debería hacerse estos tratamientos?',
    a: 'Embarazo, lactancia, algunas enfermedades neuromusculares o infecciones activas en la zona son contraindicaciones. Por eso siempre hay valoración previa.',
  },
  {
    q: '¿Es seguro hacerlo en casa?',
    a: 'Sí, con las mismas condiciones que en un consultorio: valoración previa, material estéril de un solo uso y producto sellado que se abre frente a ti.',
  },
  {
    q: '¿Qué necesito tener listo?',
    a: 'Un espacio tranquilo, con buena luz y una silla o sofá cómodo. Nosotros llevamos todo lo demás.',
  },
  {
    q: '¿A qué zonas van?',
    a: 'Atendemos en Medellín y el área metropolitana. Escríbenos tu barrio por WhatsApp y te confirmamos disponibilidad.',
  },
  {
    q: '¿Puedo agendar para varias personas?',
    a: 'Sí. Puedes reunir amigas, familia o compañeros de trabajo en la misma visita. Escríbenos y armamos el plan.',
  },
];
