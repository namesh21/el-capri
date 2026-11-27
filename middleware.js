// Vercel Routing Middleware: protege /briefing com senha (HTTP Basic Auth).
// A senha fica na variável de ambiente BRIEFING_PASSWORD (Vercel → Settings → Environment Variables).
// O repositório é público: nunca coloque a senha no código.
import { next } from '@vercel/functions';

export const config = { matcher: ['/briefing', '/briefing/:path*'] };

export default function middleware(request) {
  const senha = process.env.BRIEFING_PASSWORD;
  if (!senha) {
    return new Response('Briefing no disponible: falta configurar BRIEFING_PASSWORD.', {
      status: 503,
      headers: { 'X-Robots-Tag': 'noindex, nofollow' },
    });
  }

  const auth = request.headers.get('authorization') || '';
  if (auth.startsWith('Basic ')) {
    try {
      const [, pass] = atob(auth.slice(6)).split(':');
      if (pass === senha) return next({ headers: { 'X-Robots-Tag': 'noindex, nofollow' } });
    } catch {}
  }

  return new Response('Acceso restringido', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Briefing", charset="UTF-8"',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}
