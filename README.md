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
Briefing respondido em 27/11/2026 e aplicado. Pendências:
- [ ] **Profissão:** ela é enfermeira (RETHUS 1024556189), não médica. O site não usa "Dra." nem "médica". Avaliar o risco de anunciar Botox e preenchimento feitos por enfermeira
- [ ] Marcas de ácido hialurónico: ela citou La Roche-Posay / The Ordinary, que são cosméticos tópicos, não preenchedores injetáveis. Confirmar com ela
- [ ] Preço do ácido hialurónico ($800.000): é por seringa?
- [ ] Botox "efeito imediato" (resposta dela): o site mantém o prazo realista de dias
- [ ] "Spa April": é submarca? Onde entra?
- [ ] Endereço Cra 46 #30-25 (Buenos Aires): ela diz que não tem consultório. Não foi publicado
- [ ] Fotos sem tema natalino, logo e antes/depois (com autorização escrita) e depoimentos: ela vai mandar pelo WhatsApp
- [ ] Domínio definitivo (ela quer ajuda para escolher)
- [ ] Remover `<meta name="robots" content="noindex">` em `src/components/Landing.astro`
