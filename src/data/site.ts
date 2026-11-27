// Dados centrais do site (ES + EN). Tudo marcado com TODO precisa ser confirmado com a cliente antes de publicar.

export type Lang = 'es' | 'en';

export const site = {
  marca: 'Bienestar desde Adentro',
  // TODO: nome completo da médica e número de registro (RETHUS)
  profesional: 'Dra. [Nombre Apellido]',
  registro: { es: 'Registro médico [N.º RETHUS]', en: 'Medical license [RETHUS No.]' },
  ciudad: 'Medellín',
  whatsapp: '573012051979',
  whatsappVisible: '+57 301 205 1979',
  instagram: '', // TODO
  url: 'https://el-capri.vercel.app', // TODO: domínio definitivo
};

export const waLink = (msg: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

// TODO: confirmar com a cliente quais zonas ela atende
export const zonas = ['El Poblado', 'Provenza', 'Envigado', 'Laureles', 'Sabaneta', 'Belén', 'Estadio', 'Llanogrande'];

// cores dos soros (iguais nos dois idiomas)
export const suerosColor = ['#E8A93B', '#E0762F', '#8A5BB8', '#6FA85A', '#4E8FCB'];

const es = {
  htmlLang: 'es-CO',
  ogLocale: 'es_CO',
  path: '/',
  title: `Botox a domicilio en Medellín | ${site.marca}`,
  description:
    'Botox, rellenos con ácido hialurónico, plasma facial y sueroterapia a domicilio en Medellín. Vamos a tu casa, oficina u hotel, en tu horario. Agenda por WhatsApp.',
  nav: { domicilio: 'A domicilio', tratamientos: 'Tratamientos', sobre: 'Sobre mí', proceso: 'Cómo funciona', faq: 'Preguntas', cta: 'Agendar' },
  waDefault: 'Hola, quiero agendar una cita a domicilio',
  titulo: 'Médica estética',
  hero: {
    eyebrow: 'Medicina estética a domicilio · Medellín',
    h1: 'Botox y estética facial',
    h1em: 'sin salir de tu casa',
    lead: 'Llevo el consultorio a tu casa, oficina u hotel, en el horario que te sirve. Valoración médica, tratamiento y control, sin trancón ni salas de espera.',
    cta: 'Agenda en tu casa',
    link: 'Ver tratamientos →',
    trust: ['Casa, oficina u hotel', 'Horarios a tu medida', 'Material estéril de un solo uso'],
  },
  dom: {
    eyebrow: 'A domicilio',
    h2: 'Tu agenda manda.',
    h2em: 'Nosotros nos movemos.',
    zonasLabel: 'Zonas que atendemos',
    zonasLink: '¿No ves tu zona? Pregúntanos →',
    zonasMsg: 'Hola, ¿atienden en mi zona? Estoy en ',
    ventajas: [
      { t: 'Sin trancón ni salas de espera', d: 'El tratamiento llega a ti. Tu tiempo se queda contigo.' },
      // TODO: confirmar faixa de horário (noites e fins de semana?)
      { t: 'En tu horario', d: 'Antes del trabajo, a la hora del almuerzo o al final del día.' },
      { t: 'Privacidad total', d: 'En tu casa, oficina u hotel, sin cruzarte con nadie.' },
      { t: 'Mismo estándar médico', d: 'Material estéril de un solo uso, producto sellado y valoración previa.' },
    ],
  },
  tx: {
    eyebrow: 'Tratamientos',
    h2: 'Lo que hacemos,',
    h2em: 'y para quién es',
    idealLabel: 'Ideal para',
    esperarLabel: 'Qué esperar',
    cta: 'Consultar',
    items: [
      {
        id: 'botox', nombre: 'Toxina botulínica', apodo: 'Botox',
        resumen: 'Relaja de forma controlada los músculos que forman las líneas de expresión de la frente, el entrecejo y las patas de gallo.',
        ideal: 'Líneas de expresión, prevención, mirada cansada',
        detalle: 'Sesión de 20–30 min · efecto visible en 7–14 días · suele durar de 3 a 6 meses',
        msg: 'Hola, quiero información sobre Botox a domicilio',
      },
      {
        id: 'rellenos', nombre: 'Ácido hialurónico', apodo: 'Rellenos faciales',
        resumen: 'Devuelve volumen y define contornos en labios, pómulos, mentón y mandíbula, buscando un resultado proporcionado y natural.',
        ideal: 'Labios, ojeras, surcos, perfilado de mandíbula',
        detalle: 'Resultado inmediato · duración variable según zona y producto',
        msg: 'Hola, quiero información sobre rellenos con ácido hialurónico',
      },
      {
        id: 'plasma', nombre: 'Plasma rico en plaquetas', apodo: 'Plasma facial',
        resumen: 'Usa tu propio plasma para estimular colágeno y mejorar la textura, la luminosidad y las líneas finas de la piel.',
        ideal: 'Piel opaca, textura irregular, primeros signos de edad',
        detalle: '100% autólogo · se recomiendan varias sesiones',
        msg: 'Hola, quiero información sobre plasma facial',
      },
      {
        id: 'sueroterapia', nombre: 'Sueroterapia', apodo: 'Vitaminas intravenosas',
        resumen: 'Fórmulas intravenosas con vitaminas, minerales y antioxidantes, indicadas después de una valoración médica.',
        ideal: 'Cansancio, apoyo nutricional, cuidado de la piel',
        detalle: 'Sesión de 40–60 min en tu casa, oficina u hotel',
        msg: 'Hola, quiero información sobre sueroterapia',
      },
    ],
  },
  sueros: {
    eyebrow: 'Sueroterapia',
    h2: 'Nutrición que entra',
    h2em: 'directo a donde se necesita',
    lead: 'Fórmulas intravenosas preparadas según tu valoración, aplicadas en tu casa, oficina u hotel con acompañamiento médico durante toda la sesión. Puedes seguir trabajando o descansar mientras tanto.',
    cta: 'Preguntar por un suero',
    msg: 'Hola, quiero información sobre sueroterapia',
    // Textos suavizados em relação aos flyers (sem "elimina metales pesados")
    items: [
      { nombre: 'Multivitamínico', texto: 'Complejo B, B12, zinc y magnesio para energía y vitalidad.' },
      { nombre: 'Megadosis de vitamina C', texto: 'Antioxidante y apoyo a la producción de colágeno.' },
      { nombre: 'Antienvejecimiento', texto: 'Antioxidantes enfocados en la piel y el estrés oxidativo.' },
      { nombre: 'Detox', texto: 'Hidratación y nutrientes de apoyo a la función hepática.' },
      { nombre: 'Hidratación', texto: 'Líquidos y electrolitos para una hidratación profunda.' },
    ],
  },
  sobre: {
    eyebrow: 'Sobre mí',
    h2: 'Tu bienestar',
    h2em: 'es mi misión',
    p: [
      `Soy ${site.profesional}, médica estética en Medellín. Atiendo a domicilio porque sé que tu tiempo vale: llevo el mismo cuidado de un consultorio a donde tú estés.`,
      'Creo en una estética que respeta tus rasgos: pequeños cambios, bien indicados, que te hacen ver descansada y segura de ti misma. Antes de cualquier procedimiento te explico con honestidad qué se puede esperar — y qué no.',
    ],
    alt: `${site.profesional}, médica estética a domicilio en Medellín`,
  },
  proceso: {
    eyebrow: 'Cómo funciona',
    h2: 'Así es',
    h2em: 'la visita',
    pasos: [
      { t: 'Escríbenos', d: 'Dinos qué quieres mejorar, tu zona y el horario que te sirve. Respondemos por WhatsApp.' },
      { t: 'Valoración médica', d: 'Revisamos tu historia y tus expectativas antes de aplicar cualquier tratamiento.' },
      { t: 'Vamos hasta ti', d: 'Llegamos a tu casa, oficina u hotel con todo el material estéril. Solo necesitas un espacio con buena luz.' },
      { t: 'Control', d: 'Seguimiento por WhatsApp y visita de control si hace falta algún ajuste.' },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Lo que más',
    h2em: 'nos preguntan',
    items: [
      { q: '¿Cuánto dura el efecto del Botox?', a: 'En la mayoría de las personas dura entre 3 y 6 meses. Depende del metabolismo, la zona tratada y la frecuencia de las aplicaciones.' },
      { q: '¿Voy a quedar con cara "congelada"?', a: 'No es el objetivo. La dosis se ajusta para suavizar las líneas sin quitar la expresión. Buscamos que te veas descansada, no diferente.' },
      { q: '¿Es seguro hacerlo en casa?', a: 'Sí, con las mismas condiciones que en un consultorio: valoración previa, material estéril de un solo uso y producto sellado que se abre frente a ti.' },
      { q: '¿Qué necesito tener listo?', a: 'Un espacio tranquilo, con buena luz y una silla o sofá cómodo. Nosotros llevamos todo lo demás.' },
      { q: '¿Duele?', a: 'Se usan agujas muy finas y, cuando hace falta, anestesia tópica. La mayoría lo describe como una molestia leve y breve.' },
      { q: '¿Cuándo puedo volver a mi rutina?', a: 'Normalmente el mismo día. Te damos indicaciones simples, como no acostarte ni hacer ejercicio intenso en las horas siguientes.' },
      { q: '¿Quién no debería hacerse estos tratamientos?', a: 'Embarazo, lactancia, algunas enfermedades neuromusculares o infecciones activas en la zona. Por eso siempre hay valoración previa.' },
      { q: '¿A qué zonas van?', a: 'Medellín y el área metropolitana. Escríbenos tu barrio por WhatsApp y te confirmamos disponibilidad.' },
      { q: '¿Puedo agendar para varias personas?', a: 'Claro. Puedes reunir amigas, familia o compañeros de trabajo en la misma visita. Escríbenos y armamos el plan.' },
    ],
  },
  cta: { h2: '¿Lista para verte', h2em: 'como te sientes?', p: 'Escríbenos tu zona y el horario que te sirve. Vamos hasta ti en Medellín.' },
  footer: { legal: 'Los procedimientos requieren valoración médica previa. Los resultados varían de una persona a otra.', zona: 'Medellín y área metropolitana · Atención a domicilio' },
  waAria: 'Escríbenos por WhatsApp',
};

const en: typeof es = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  path: '/en/',
  title: `Botox in Medellín — We Come to You | ${site.marca}`,
  description:
    'Botox, dermal fillers, PRP facials and IV vitamin therapy in Medellín, delivered to your hotel, Airbnb or home by an aesthetic doctor. Book on WhatsApp.',
  nav: { domicilio: 'We come to you', tratamientos: 'Treatments', sobre: 'About', proceso: 'How it works', faq: 'FAQ', cta: 'Book' },
  waDefault: "Hi, I'd like to book a home visit",
  titulo: 'Aesthetic doctor',
  hero: {
    eyebrow: 'Mobile aesthetic medicine · Medellín',
    h1: 'Botox and facial aesthetics',
    h1em: 'at your hotel or home',
    lead: 'An aesthetic doctor comes to your hotel, Airbnb or office, on your schedule. Medical assessment, treatment and follow-up — no clinic, no waiting room.',
    cta: 'Book a visit',
    link: 'See treatments →',
    trust: ['Hotel, Airbnb or home', 'Fits your itinerary', 'Sterile, single-use supplies'],
  },
  dom: {
    eyebrow: 'We come to you',
    h2: 'Your schedule rules.',
    h2em: 'We do the moving.',
    zonasLabel: 'Areas we cover',
    zonasLink: "Don't see your area? Ask us →",
    zonasMsg: "Hi, do you cover my area? I'm staying in ",
    ventajas: [
      { t: 'No traffic, no waiting room', d: 'Treatment comes to you, so you keep your day for Medellín.' },
      { t: 'Around your plans', d: 'Before a tour, after a meeting or at the end of the day.' },
      { t: 'Complete privacy', d: 'In your own room or space, away from anyone else.' },
      { t: 'Same medical standard', d: 'Sterile single-use supplies, sealed product and a prior assessment.' },
    ],
  },
  tx: {
    eyebrow: 'Treatments',
    h2: 'What we do,',
    h2em: "and who it's for",
    idealLabel: 'Best for',
    esperarLabel: 'What to expect',
    cta: 'Ask us',
    items: [
      {
        id: 'botox', nombre: 'Botulinum toxin', apodo: 'Botox',
        resumen: 'Gently relaxes the muscles behind expression lines on the forehead, between the brows and around the eyes.',
        ideal: 'Expression lines, prevention, tired-looking eyes',
        detalle: '20–30 min session · visible in 7–14 days · usually lasts 3–6 months',
        msg: "Hi, I'd like information about Botox at my hotel/home",
      },
      {
        id: 'rellenos', nombre: 'Hyaluronic acid', apodo: 'Dermal fillers',
        resumen: 'Restores volume and defines lips, cheekbones, chin and jawline for a balanced, natural-looking result.',
        ideal: 'Lips, under-eyes, smile lines, jawline',
        detalle: 'Immediate result · duration depends on area and product',
        msg: "Hi, I'd like information about dermal fillers",
      },
      {
        id: 'plasma', nombre: 'Platelet-rich plasma (PRP)', apodo: 'PRP facial',
        resumen: 'Uses your own plasma to boost collagen and improve skin texture, glow and fine lines.',
        ideal: 'Dull skin, uneven texture, early signs of aging',
        detalle: '100% from your own blood · several sessions recommended',
        msg: "Hi, I'd like information about a PRP facial",
      },
      {
        id: 'sueroterapia', nombre: 'IV therapy', apodo: 'IV vitamin drips',
        resumen: 'Intravenous blends of vitamins, minerals and antioxidants, prescribed after a medical assessment.',
        ideal: 'Fatigue, jet lag, hydration, skin care',
        detalle: '40–60 min session at your hotel, Airbnb or home',
        msg: "Hi, I'd like information about IV therapy",
      },
    ],
  },
  sueros: {
    eyebrow: 'IV therapy',
    h2: 'Nutrients that go',
    h2em: 'straight where they’re needed',
    lead: 'IV blends prepared after your assessment and given at your hotel, Airbnb or home, with a doctor present for the whole session. Rest, work or recover from your flight meanwhile.',
    cta: 'Ask about an IV drip',
    msg: "Hi, I'd like information about IV therapy",
    items: [
      { nombre: 'Multivitamin', texto: 'B complex, B12, zinc and magnesium for energy and vitality.' },
      { nombre: 'High-dose vitamin C', texto: 'Antioxidant support and help with collagen production.' },
      { nombre: 'Anti-aging', texto: 'Antioxidants focused on the skin and oxidative stress.' },
      { nombre: 'Detox', texto: 'Hydration and nutrients that support liver function.' },
      { nombre: 'Hydration', texto: 'Fluids and electrolytes for deep rehydration.' },
    ],
  },
  sobre: {
    eyebrow: 'About me',
    h2: 'Your well-being',
    h2em: 'is my mission',
    p: [
      `I'm ${site.profesional}, an aesthetic doctor based in Medellín. I run a mobile practice because your time matters: I bring the same care you'd get in a clinic to wherever you are.`,
      "I believe in aesthetics that respect your features: small, well-chosen changes that make you look rested and confident. Before any procedure, I'll tell you honestly what to expect — and what not to.",
    ],
    alt: `${site.profesional}, mobile aesthetic doctor in Medellín`,
  },
  proceso: {
    eyebrow: 'How it works',
    h2: 'Your visit,',
    h2em: 'step by step',
    pasos: [
      { t: 'Message us', d: "Tell us what you'd like, where you're staying and when works for you. We reply on WhatsApp." },
      { t: 'Medical assessment', d: 'We review your history and goals before any treatment.' },
      { t: 'We come to you', d: 'We arrive with everything sterile and ready. All you need is a quiet spot with good light.' },
      { t: 'Follow-up', d: 'Check-in on WhatsApp — even after you fly home — and a touch-up visit if needed.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    h2: 'What people',
    h2em: 'ask us most',
    items: [
      { q: 'Is it safe to do this at a hotel or Airbnb?', a: 'Yes, under the same conditions as a clinic: prior assessment, sterile single-use supplies and sealed product opened in front of you.' },
      // TODO: confirmar se a médica atende em inglês
      { q: 'Do you speak English?', a: 'Yes. You can book, ask questions and receive your aftercare instructions in English.' },
      { q: 'How long does Botox last?', a: 'For most people, 3 to 6 months. It depends on metabolism, the area treated and how often you get it.' },
      { q: 'Can I fly or go out after treatment?', a: 'Usually yes, the same day. Avoid lying down and intense exercise for a few hours. Fillers and PRP can cause mild swelling, so plan them a few days before important photos.' },
      { q: 'Will I look "frozen"?', a: "That's not the goal. The dose is adjusted to soften lines while keeping your expression. You should look rested, not different." },
      { q: 'Who should not get these treatments?', a: 'Pregnancy, breastfeeding, some neuromuscular conditions or active skin infections in the area. That is why there is always an assessment first.' },
      { q: 'Which areas do you cover?', a: "Medellín and the metro area, including El Poblado, Provenza, Laureles and Envigado. Send us your hotel or neighborhood and we'll confirm." },
      { q: 'Can I book for a group?', a: 'Of course. Traveling with friends? We can treat several people in the same visit.' },
    ],
  },
  cta: { h2: 'Ready to look', h2em: 'as good as you feel?', p: "Tell us where you're staying and when works for you. We'll come to you in Medellín." },
  footer: { legal: 'All procedures require a prior medical assessment. Results vary from person to person.', zona: 'Medellín & metro area · Mobile service' },
  waAria: 'Message us on WhatsApp',
};

export const content = { es, en };
