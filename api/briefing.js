// Vercel Function: recebe o briefing e envia por e-mail via Resend.
// Variáveis na Vercel: RESEND_API_KEY (obrigatória), BRIEFING_EMAIL (opcional).
// Protegida pela mesma senha do /briefing (ver middleware.js).
const DESTINO_PADRAO = 'charlessena.cm@gmail.com';

const json = (status, data) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json', 'X-Robots-Tag': 'noindex' } });

export async function POST(request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return json(503, { ok: false, error: 'RESEND_API_KEY no configurada' });

  let body;
  try { body = await request.json(); } catch { return json(400, { ok: false, error: 'JSON inválido' }); }

  const texto = typeof body?.texto === 'string' ? body.texto.trim() : '';
  if (body?.empresa) return json(200, { ok: true }); // honeypot anti-spam
  if (texto.length < 20 || texto.length > 30000) return json(400, { ok: false, error: 'Texto vacío o demasiado largo' });

  const nombre = (texto.match(/Nombre como quieres aparecer: (.+)/) || [])[1] || 'clienta';
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'Briefing El Capri <onboarding@resend.dev>',
      to: [process.env.BRIEFING_EMAIL || DESTINO_PADRAO],
      subject: `Briefing do site — ${nombre.slice(0, 80)}`,
      text: texto.replace(/\*/g, ''),
    }),
  });

  if (!r.ok) {
    console.error('Resend', r.status, await r.text());
    return json(502, { ok: false, error: 'No se pudo enviar el correo' });
  }
  return json(200, { ok: true });
}

export function GET() {
  return json(405, { ok: false });
}
