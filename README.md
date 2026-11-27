# el-capri — site beta (Bienestar desde Adentro, Medellín)

Landing page em Astro para médica estética **a domicilio** em Medellín (casa, escritório, hotel/Airbnb): Botox, ácido hialurónico, plasma facial e sueroterapia. Conversão via WhatsApp. Bilíngue: espanhol (`/`) e inglês (`/en/`) para turistas.

## Rodar
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```
Deploy: importar o repositório na Vercel (preset Astro, sem configuração extra).

## Onde editar
- Textos ES e EN, zonas, telefone: `src/data/site.ts` (objetos `es` e `en`)
- Layout (único para os dois idiomas): `src/components/Landing.astro` · Estilos: `src/styles/global.css`
- Fotos: `src/assets/` (recortadas dos flyers de Natal)

## Antes de publicar
- [ ] Nome completo da profissional e número de registro (RETHUS)
- [ ] Confirmar se ela atende em inglês (a FAQ em EN diz que sim)
- [ ] Confirmar zonas atendidas e horários (noite/fim de semana?)
- [ ] Habilitação para atendimento domiciliar (modalidade extramural no REPS)
- [ ] Confirmar se ela é médica (Botox e preenchimento só podem ser aplicados por médico na Colômbia)
- [ ] Endereço/bairro do consultório em Medellín (um dos flyers diz Bogotá)
- [ ] Confirmar a marca: "Bienestar desde Adentro" ou "El Capri"?
- [ ] Confirmar "producto sellado y trazable" e os tempos/durações citados
- [ ] Fotos sem gorro de Natal + logo em vetor (SVG)
- [ ] Instagram, domínio definitivo (`site.url` e `astro.config.mjs`)
- [ ] Remover `<meta name="robots" content="noindex">` em `index.astro`
