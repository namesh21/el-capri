# el-capri — site beta (Bienestar desde Adentro, Medellín)

Landing page em Astro para médica estética em Medellín: Botox, ácido hialurónico, plasma facial e sueroterapia. Conversão via WhatsApp.

## Rodar
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```
Deploy: importar o repositório na Vercel (preset Astro, sem configuração extra).

## Onde editar
- Textos, tratamentos, soros, FAQ, telefone: `src/data/site.ts`
- Layout: `src/pages/index.astro` · Estilos: `src/styles/global.css`
- Fotos: `src/assets/` (recortadas dos flyers de Natal)

## Antes de publicar
- [ ] Nome completo da profissional e número de registro (RETHUS)
- [ ] Confirmar se ela é médica (Botox e preenchimento só podem ser aplicados por médico na Colômbia)
- [ ] Endereço/bairro do consultório em Medellín (um dos flyers diz Bogotá)
- [ ] Confirmar a marca: "Bienestar desde Adentro" ou "El Capri"?
- [ ] Confirmar "producto sellado y trazable" e os tempos/durações citados
- [ ] Fotos sem gorro de Natal + logo em vetor (SVG)
- [ ] Instagram, domínio definitivo (`site.url` e `astro.config.mjs`)
- [ ] Remover `<meta name="robots" content="noindex">` em `index.astro`
