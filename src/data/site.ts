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
    detalle: 'Sesión de 40–60 min en consultorio',
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
  { t: 'Escríbenos', d: 'Cuéntanos por WhatsApp qué te gustaría mejorar y agendamos tu cita.' },
  { t: 'Valoración médica', d: 'Revisamos tu historia, tus expectativas y si el tratamiento es adecuado para ti.' },
  { t: 'Tratamiento', d: 'Procedimiento en consultorio, con producto sellado y técnica a tu medida.' },
  { t: 'Control', d: 'Seguimiento posterior para revisar el resultado y hacer ajustes si hace falta.' },
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
    q: '¿Dónde atienden?',
    a: 'Atendemos en Medellín con cita previa. Escríbenos por WhatsApp y te enviamos la ubicación y la disponibilidad.',
  },
];
