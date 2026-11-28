// Dados centrais do site (ES + EN), conforme o briefing respondido pela cliente em 27/11/2026.
// TODO = confirmar com a cliente antes de publicar.

export type Lang = 'es' | 'en';

export const site = {
  marca: 'Bienestar desde Adentro', // TODO: a cliente citou também "Spa April" — confirmar se é submarca
  profesional: 'Elizabeth Vargas',
  rethus: '1024556189',
  ciudad: 'Medellín',
  whatsapp: '573012051979',
  whatsappVisible: '+57 301 205 1979',
  instagram: 'elizabeth_vargas011',
  url: 'https://el-capri.vercel.app', // TODO: domínio definitivo
};

export const igLink = `https://instagram.com/${site.instagram}`;
export const waLink = (msg: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const zonas = ['El Poblado', 'Provenza', 'Laureles', 'Envigado', 'Sabaneta', 'Belén', 'Estadio', 'Itagüí', 'Bello', 'Llanogrande', 'Rionegro'];

export const suerosColor = ['#E8A93B', '#E0762F', '#8A5BB8', '#6FA85A', '#4E8FCB', '#C9584F', '#3F6E8C'];

// Preços em pesos colombianos, como a cliente informou
type Precio = { es: string; en: string; notaEs?: string; notaEn?: string; precio: string; desde?: boolean };
export const precios: Precio[] = [
  { es: 'Botox full face', en: 'Botox full face', precio: '1.200.000' },
  // TODO: confirmar se o valor é por seringa (1 ml)
  { es: 'Relleno con ácido hialurónico', en: 'Hyaluronic acid filler', precio: '800.000' },
  { es: 'Plasma rico en plaquetas', en: 'PRP facial', notaEs: 'por sesión · mínimo 3 sesiones', notaEn: 'per session · minimum 3 sessions', precio: '130.000' },
  { es: 'Tratamientos con péptidos', en: 'Peptide treatments', precio: '800.000', desde: true },
  { es: 'Aplicación de peptonas', en: 'Peptone application', precio: '80.000' },
  { es: 'Sueroterapia', en: 'IV therapy', precio: '100.000', desde: true },
  { es: 'Masaje relajante terapéutico', en: 'Therapeutic relaxing massage', precio: '130.000' },
  { es: 'Reducción de medidas', en: 'Body contouring package', notaEs: 'sin aparatología', notaEn: 'manual, no machines', precio: '300.000', desde: true },
];

const es = {
  htmlLang: 'es-CO',
  ogLocale: 'es_CO',
  path: '/',
  title: `Botox y estética a domicilio en Medellín | ${site.marca}`,
  description:
    'Botox, ácido hialurónico, plasma, sueroterapia y masajes a domicilio en Medellín. Todos los días de 8 a. m. a 9 p. m., en tu casa, oficina u hotel. Agenda por WhatsApp.',
  nav: { domicilio: 'A domicilio', tratamientos: 'Tratamientos', precios: 'Precios', sobre: 'Sobre mí', faq: 'Preguntas', cta: 'Agendar' },
  waDefault: 'Hola Elizabeth, quiero agendar una cita a domicilio',
  titulo: 'Enfermera profesional · Esteticista',
  registro: `Enfermera profesional · RETHUS ${site.rethus}`,
  hero: {
    eyebrow: 'Estética a domicilio · Medellín',
    h1: 'Botox y estética facial',
    h1em: 'sin salir de tu casa',
    lead: 'Llevo los tratamientos a tu casa, oficina u hotel, todos los días de 8 a. m. a 9 p. m. Te explico cada paso antes de empezar, sin trancón ni salas de espera.',
    cta: 'Agenda en tu casa',
    link: 'Ver tratamientos →',
    trust: ['Todos los días, incluso festivos', 'Casa, oficina u hotel', 'Material estéril de un solo uso'],
  },
  dom: {
    eyebrow: 'A domicilio',
    h2: 'Tu agenda manda.',
    h2em: 'Nosotros nos movemos.',
    zonasLabel: 'Zonas que atendemos',
    zonasNota: 'El valor del desplazamiento depende de la zona.',
    zonasLink: '¿No ves tu zona? Pregúntanos →',
    zonasMsg: 'Hola, ¿atienden en mi zona? Estoy en ',
    ventajas: [
      { t: 'Sin trancón ni salas de espera', d: 'El tratamiento llega a ti. Tu tiempo se queda contigo.' },
      { t: 'Todos los días', d: 'De 8 a. m. a 9 p. m., incluso domingos y festivos. Agenda con mínimo 2 horas de anticipación.' },
      { t: 'Privacidad total', d: 'En tu casa, oficina u hotel, sin cruzarte con nadie.' },
      { t: 'Atención en grupo', d: '¿Son varias personas? Atendemos a todo el grupo en la misma visita.' },
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
        // TODO: a cliente escreveu "efeito imediato"; o efeito do Botox aparece em dias — mantido o prazo realista
        detalle: 'Sesión de 1 hora · el efecto empieza a notarse en pocos días y es completo a las 2 semanas',
        msg: 'Hola, quiero información sobre Botox a domicilio',
      },
      {
        id: 'rellenos', nombre: 'Ácido hialurónico', apodo: 'Rellenos faciales',
        resumen: 'Devuelve volumen y define contornos en labios, pómulos, mentón y mandíbula, buscando un resultado proporcionado y natural.',
        ideal: 'Labios, ojeras, surcos, perfilado de mandíbula',
        detalle: 'Sesión de 1 hora · resultado inmediato',
        msg: 'Hola, quiero información sobre rellenos con ácido hialurónico',
      },
      {
        id: 'plasma', nombre: 'Plasma rico en plaquetas', apodo: 'Plasma facial',
        resumen: 'Usa tu propio plasma para estimular colágeno y mejorar la textura, la luminosidad y las líneas finas. Lo combinamos con una limpieza facial profunda.',
        ideal: 'Piel opaca, textura irregular, primeros signos de edad',
        detalle: 'Sesión de 2 horas con limpieza facial profunda · mínimo 3 sesiones',
        msg: 'Hola, quiero información sobre plasma facial',
      },
      {
        id: 'skinboosters', nombre: 'Mesoterapia', apodo: 'Skinboosters',
        resumen: 'Microinyecciones de activos hidratantes y revitalizantes que mejoran la calidad, la hidratación y el brillo de la piel.',
        ideal: 'Piel deshidratada, cansada o sin brillo',
        detalle: 'El número de sesiones depende de tu piel',
        msg: 'Hola, quiero información sobre skinboosters / mesoterapia',
      },
      {
        id: 'lipoliticos', nombre: 'Enzimas y lipolíticos', apodo: 'Grasa localizada',
        resumen: 'Ayudan a reducir pequeños depósitos de grasa localizada, como papada, abdomen o flancos, como parte de un plan de cuidado.',
        ideal: 'Papada, abdomen, flancos',
        detalle: 'Se requieren varias sesiones',
        msg: 'Hola, quiero información sobre enzimas / lipolíticos',
      },
      {
        id: 'sueroterapia', nombre: 'Sueroterapia', apodo: 'Vitaminas intravenosas',
        resumen: 'Fórmulas intravenosas con vitaminas, minerales y antioxidantes, escogidas según cómo te sientes y lo que buscas.',
        ideal: 'Cansancio, recuperación, apoyo nutricional, piel',
        detalle: 'Sesión de aprox. 1 hora · los mejores resultados se ven con varias sesiones',
        msg: 'Hola, quiero información sobre sueroterapia',
      },
    ],
  },
  sueros: {
    eyebrow: 'Sueroterapia',
    h2: 'Nutrición que entra',
    h2em: 'directo a donde se necesita',
    lead: 'Fórmulas intravenosas aplicadas en tu casa, oficina u hotel, con acompañamiento durante toda la sesión. Puedes seguir trabajando o descansar mientras tanto.',
    cta: 'Preguntar por un suero',
    msg: 'Hola, quiero información sobre sueroterapia',
    items: [
      { nombre: 'Multivitamínico', texto: 'Complejo B, B12, zinc y magnesio para energía y vitalidad.' },
      { nombre: 'Megadosis de vitamina C', texto: 'Antioxidante y apoyo a la producción de colágeno.' },
      { nombre: 'Antienvejecimiento', texto: 'Antioxidantes enfocados en la piel y el estrés oxidativo.' },
      { nombre: 'Detox', texto: 'Hidratación y nutrientes de apoyo a la función hepática.' },
      { nombre: 'Hidratación', texto: 'Líquidos y electrolitos para una hidratación profunda.' },
      { nombre: 'Resaca y recuperación', texto: 'Hidratación, electrolitos y vitaminas para recuperarte después de una noche larga.' },
      { nombre: 'NAD+', texto: 'Coenzima ligada a la energía celular, muy usada en protocolos de bienestar.' },
    ],
  },
  spa: {
    eyebrow: 'Spa a domicilio',
    h2: 'Bienestar también',
    h2em: 'para el cuerpo',
    items: [
      { t: 'Limpieza facial profunda', d: 'Limpieza, extracción e hidratación de la piel.', tiempo: '1 h 20 min' },
      { t: 'Masaje relajante terapéutico', d: 'Para soltar tensión y descansar de verdad, sin salir de casa.', tiempo: '1 h 20 min' },
      { t: 'Masaje post-quirúrgico', d: 'Acompañamiento en la recuperación después de una cirugía estética.', tiempo: '1 h' },
      { t: 'Reducción de medidas', d: 'Paquetes manuales, sin aparatología, adaptados a cada persona.', tiempo: '1 h o más' },
    ],
    msg: 'Hola, quiero información sobre los masajes y tratamientos corporales',
    cta: 'Consultar',
  },
  precios: {
    eyebrow: 'Precios',
    h2: 'Claros',
    h2em: 'desde el principio',
    desde: 'desde',
    nota: 'Precios en pesos colombianos. El valor del desplazamiento depende de la zona. Hay promociones por temporada: pregúntanos por WhatsApp.',
    cta: 'Pedir mi cotización',
    msg: 'Hola, quiero una cotización',
  },
  sobre: {
    eyebrow: 'Sobre mí',
    h2: 'Tu bienestar',
    h2em: 'es mi misión',
    p: [
      `Soy ${site.profesional}, enfermera profesional, esteticista y cosmetóloga, con máster en medicina estética, nutrición y antienvejecimiento y formación en armonización facial con toxina botulínica y ácido hialurónico.`,
      'Mi pasión por la estética nació del deseo de ayudar a las personas a sentirse más seguras, bonitas y felices consigo mismas. Elegí trabajar a domicilio para ofrecer comodidad, tranquilidad y confianza: una experiencia exclusiva, con dedicación y atención individualizada, sin necesidad de salir de casa.',
    ],
    alt: `${site.profesional}, enfermera y esteticista a domicilio en Medellín`,
  },
  proceso: {
    eyebrow: 'Cómo funciona',
    h2: 'Así es',
    h2em: 'la visita',
    pasos: [
      { t: 'Escríbenos', d: 'Dinos qué quieres, tu zona y el horario. Agenda con mínimo 2 horas de anticipación.' },
      { t: 'Valoración', d: 'Revisamos tu historia y te explicamos con calma qué se va a hacer y qué resultado esperar.' },
      { t: 'Vamos hasta ti', d: 'Llegamos con todo el material estéril. Solo necesitas un espacio con buena luz.' },
      { t: 'Control incluido', d: 'Seguimiento por WhatsApp y control posterior incluido en el precio.' },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Lo que más',
    h2em: 'nos preguntan',
    items: [
      { q: '¿Quién realiza los tratamientos?', a: `${site.profesional}, enfermera profesional (RETHUS ${site.rethus}), esteticista y cosmetóloga, con máster en medicina estética y formación en armonización facial.` },
      { q: '¿Es seguro hacerlo en casa?', a: 'Sí: antes de empezar hacemos una valoración, usamos material estéril de un solo uso y el producto sellado se abre frente a ti.' },
      { q: '¿Con cuánta anticipación debo agendar?', a: 'Con mínimo 2 horas. Atendemos todos los días, incluso domingos y festivos, de 8 a. m. a 9 p. m.' },
      { q: '¿Cuánto dura el efecto del Botox?', a: 'En la mayoría de las personas dura entre 3 y 6 meses. Depende del metabolismo, la zona tratada y la frecuencia de las aplicaciones.' },
      { q: '¿Voy a quedar con cara "congelada"?', a: 'No es el objetivo. La dosis se ajusta para suavizar las líneas sin quitar la expresión. Buscamos que te veas descansada, no diferente.' },
      { q: '¿Qué necesito tener listo?', a: 'Un espacio tranquilo, con buena luz y una silla o sofá cómodo. Nosotros llevamos todo lo demás.' },
      { q: '¿Duele?', a: 'Se usan agujas muy finas y, cuando hace falta, anestesia tópica. La mayoría lo describe como una molestia leve y breve.' },
      { q: '¿Quién no debería hacerse estos tratamientos?', a: 'Embarazo, lactancia, algunas enfermedades neuromusculares o infecciones activas en la zona. Por eso siempre hay valoración previa.' },
      { q: '¿Cobran el desplazamiento?', a: 'Sí, y el valor depende de la zona. Escríbenos tu barrio por WhatsApp y te damos el precio total antes de agendar.' },
      { q: '¿El control está incluido?', a: 'Sí. El control posterior está incluido en el precio del tratamiento.' },
    ],
  },
  cta: { h2: 'Agenda hoy,', h2em: 'te atendemos hoy', p: 'Con 2 horas de anticipación vamos a tu casa, oficina u hotel en Medellín.' },
  footer: { legal: 'Los procedimientos requieren valoración previa. Los resultados varían de una persona a otra.', zona: 'Medellín y área metropolitana · Todos los días de 8 a. m. a 9 p. m.' },
  waAria: 'Escríbenos por WhatsApp',
};

const en: typeof es = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  path: '/en/',
  title: `Botox & IV Therapy in Medellín — We Come to You | ${site.marca}`,
  description:
    'Botox, fillers, PRP, IV drips (including hangover recovery) and massages at your hotel, Airbnb or home in Medellín. Every day, 8 am–9 pm. Book on WhatsApp.',
  nav: { domicilio: 'We come to you', tratamientos: 'Treatments', precios: 'Prices', sobre: 'About', faq: 'FAQ', cta: 'Book' },
  waDefault: "Hi Elizabeth, I'd like to book a visit",
  titulo: 'Licensed nurse · Aesthetician',
  registro: `Licensed nurse · RETHUS ${site.rethus}`,
  hero: {
    eyebrow: 'Mobile aesthetics · Medellín',
    h1: 'Botox and facial aesthetics',
    h1em: 'at your hotel or home',
    lead: 'A licensed nurse and aesthetician comes to your hotel, Airbnb or office, every day from 8 am to 9 pm. Every step explained before we start — no clinic, no waiting room.',
    cta: 'Book a visit',
    link: 'See treatments →',
    trust: ['Every day, holidays included', 'Hotel, Airbnb or home', 'Sterile, single-use supplies'],
  },
  dom: {
    eyebrow: 'We come to you',
    h2: 'Your schedule rules.',
    h2em: 'We do the moving.',
    zonasLabel: 'Areas we cover',
    zonasNota: 'Travel fee depends on the area.',
    zonasLink: "Don't see your area? Ask us →",
    zonasMsg: "Hi, do you cover my area? I'm staying in ",
    ventajas: [
      { t: 'No traffic, no waiting room', d: 'Treatment comes to you, so you keep your day for Medellín.' },
      { t: 'Every day', d: '8 am to 9 pm, Sundays and holidays included. Book at least 2 hours ahead.' },
      { t: 'Complete privacy', d: 'In your own room or space, away from anyone else.' },
      { t: 'Groups welcome', d: 'Traveling with friends? We treat the whole group in one visit.' },
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
        detalle: '1-hour session · starts to show within days, full result at 2 weeks',
        msg: "Hi, I'd like information about Botox at my hotel/home",
      },
      {
        id: 'rellenos', nombre: 'Hyaluronic acid', apodo: 'Dermal fillers',
        resumen: 'Restores volume and defines lips, cheekbones, chin and jawline for a balanced, natural-looking result.',
        ideal: 'Lips, under-eyes, smile lines, jawline',
        detalle: '1-hour session · immediate result',
        msg: "Hi, I'd like information about dermal fillers",
      },
      {
        id: 'plasma', nombre: 'Platelet-rich plasma', apodo: 'PRP facial',
        resumen: 'Uses your own plasma to boost collagen and improve texture, glow and fine lines, combined with a deep-cleansing facial.',
        ideal: 'Dull skin, uneven texture, early signs of aging',
        detalle: '2-hour session with deep-cleansing facial · minimum 3 sessions',
        msg: "Hi, I'd like information about a PRP facial",
      },
      {
        id: 'skinboosters', nombre: 'Mesotherapy', apodo: 'Skin boosters',
        resumen: 'Micro-injections of hydrating, revitalizing actives that improve skin quality, hydration and glow.',
        ideal: 'Dehydrated, tired or dull skin',
        detalle: 'Number of sessions depends on your skin',
        msg: "Hi, I'd like information about skin boosters",
      },
      {
        id: 'lipoliticos', nombre: 'Enzymes & lipolytics', apodo: 'Stubborn fat',
        resumen: 'Help reduce small pockets of localized fat — double chin, abdomen or flanks — as part of a care plan.',
        ideal: 'Double chin, abdomen, flanks',
        detalle: 'Several sessions required',
        msg: "Hi, I'd like information about fat-dissolving treatments",
      },
      {
        id: 'sueroterapia', nombre: 'IV therapy', apodo: 'IV vitamin drips',
        resumen: 'Intravenous blends of vitamins, minerals and antioxidants, chosen for how you feel and what you need.',
        ideal: 'Jet lag, hangovers, fatigue, hydration, skin',
        detalle: 'About 1 hour · best results with several sessions',
        msg: "Hi, I'd like information about IV therapy",
      },
    ],
  },
  sueros: {
    eyebrow: 'IV therapy',
    h2: 'Nutrients that go',
    h2em: 'straight where they’re needed',
    lead: 'IV drips at your hotel, Airbnb or home, with a professional with you for the whole session. Rest, work or recover from your flight — or last night — meanwhile.',
    cta: 'Ask about an IV drip',
    msg: "Hi, I'd like information about IV therapy",
    items: [
      { nombre: 'Multivitamin', texto: 'B complex, B12, zinc and magnesium for energy and vitality.' },
      { nombre: 'High-dose vitamin C', texto: 'Antioxidant support and help with collagen production.' },
      { nombre: 'Anti-aging', texto: 'Antioxidants focused on the skin and oxidative stress.' },
      { nombre: 'Detox', texto: 'Hydration and nutrients that support liver function.' },
      { nombre: 'Hydration', texto: 'Fluids and electrolytes for deep rehydration.' },
      { nombre: 'Hangover recovery', texto: 'Fluids, electrolytes and vitamins to bounce back after a long night out.' },
      { nombre: 'NAD+', texto: 'A coenzyme linked to cellular energy, popular in wellness protocols.' },
    ],
  },
  spa: {
    eyebrow: 'Spa at home',
    h2: 'Wellness',
    h2em: 'for the body, too',
    items: [
      { t: 'Deep-cleansing facial', d: 'Cleansing, extraction and hydration for your skin.', tiempo: '1 h 20 min' },
      { t: 'Therapeutic relaxing massage', d: 'Release tension and truly rest, without leaving your room.', tiempo: '1 h 20 min' },
      { t: 'Post-surgery massage', d: 'Support for your recovery after cosmetic surgery.', tiempo: '1 h' },
      { t: 'Body contouring', d: 'Manual packages, no machines, tailored to each person.', tiempo: '1 h+' },
    ],
    msg: "Hi, I'd like information about massages and body treatments",
    cta: 'Ask us',
  },
  precios: {
    eyebrow: 'Prices',
    h2: 'Clear',
    h2em: 'from the start',
    desde: 'from',
    nota: 'Prices in Colombian pesos (COP). Travel fee depends on the area. Seasonal promotions available — ask us on WhatsApp.',
    cta: 'Get my quote',
    msg: "Hi, I'd like a quote",
  },
  sobre: {
    eyebrow: 'About me',
    h2: 'Your well-being',
    h2em: 'is my mission',
    p: [
      `I'm ${site.profesional}, a licensed nurse, aesthetician and cosmetologist, with a master's in aesthetic medicine, nutrition and anti-aging, and training in facial harmonization with botulinum toxin and hyaluronic acid.`,
      'My passion for aesthetics comes from wanting people to feel more confident, beautiful and happy with themselves. I chose to work as a mobile practice to offer comfort, calm and trust: an exclusive, one-on-one experience, without leaving your room.',
    ],
    alt: `${site.profesional}, mobile nurse and aesthetician in Medellín`,
  },
  proceso: {
    eyebrow: 'How it works',
    h2: 'Your visit,',
    h2em: 'step by step',
    pasos: [
      { t: 'Message us', d: "Tell us what you'd like, where you're staying and when. Book at least 2 hours ahead." },
      { t: 'Assessment', d: "We review your history and explain calmly what we'll do and what result to expect." },
      { t: 'We come to you', d: 'We arrive with everything sterile and ready. All you need is a quiet spot with good light.' },
      { t: 'Follow-up included', d: 'Check-in on WhatsApp — even after you fly home. Follow-up is included in the price.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    h2: 'What people',
    h2em: 'ask us most',
    items: [
      { q: 'Who performs the treatments?', a: `${site.profesional}, a licensed nurse in Colombia (RETHUS ${site.rethus}), aesthetician and cosmetologist, with a master's in aesthetic medicine and training in facial harmonization.` },
      { q: 'Do you speak English?', a: "Yes, conversational English during your visit — and WhatsApp messages in English are no problem." },
      { q: 'Is it safe to do this at a hotel or Airbnb?', a: 'Yes: there is always an assessment first, we use sterile single-use supplies, and sealed product is opened in front of you.' },
      { q: 'How far ahead do I need to book?', a: 'At least 2 hours. We work every day, including Sundays and holidays, from 8 am to 9 pm.' },
      { q: 'How long does Botox last?', a: 'For most people, 3 to 6 months. It depends on metabolism, the area treated and how often you get it.' },
      { q: 'Can I fly or go out after treatment?', a: 'Usually yes, the same day. Avoid lying down and intense exercise for a few hours. Fillers and PRP can cause mild swelling, so plan them a few days before important photos.' },
      { q: 'Will I look "frozen"?', a: "That's not the goal. The dose is adjusted to soften lines while keeping your expression. You should look rested, not different." },
      { q: 'Who should not get these treatments?', a: 'Pregnancy, breastfeeding, some neuromuscular conditions or active skin infections in the area. That is why there is always an assessment first.' },
      { q: 'Is there a travel fee?', a: "Yes, it depends on the area. Send us your hotel or neighborhood and we'll give you the full price before booking." },
      { q: 'Can I book for a group?', a: 'Of course. We can treat several people in the same visit.' },
    ],
  },
  cta: { h2: 'Book today,', h2em: 'see us today', p: 'With 2 hours’ notice we come to your hotel, Airbnb or home in Medellín.' },
  footer: { legal: 'All procedures require a prior assessment. Results vary from person to person.', zona: 'Medellín & metro area · Every day, 8 am–9 pm' },
  waAria: 'Message us on WhatsApp',
};

export const content = { es, en };
