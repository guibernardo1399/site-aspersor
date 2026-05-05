# SCRIPT DE ALTERAÇÃO — LANDING PAGE ASPERSOR CANHÃO STRATUS

## Objetivo

Melhorar a estrutura, copy e conversão da landing page sem inventar autoridade falsa, sem promessas exageradas e mantendo o foco em gerar leads qualificados pelo WhatsApp.

Contexto validado:
- A foto do produto é real.
- A trust bar atual é falsa e deve ser removida.
- O produto é técnico, de ticket alto e exige venda consultiva.
- A página não deve parecer loja comum nem catálogo genérico.
- A função do site é aquecer o lead e levar para conversa no WhatsApp.

---

# 1. Remover completamente a Trust Bar falsa

## Remover este bloco inteiro do HTML

Procure o comentário:

```html
<!-- ============== TRUST BAR ============== -->
```

Remova todo o bloco abaixo dele, incluindo:

```html
<div style="background: var(--brand-dark-2); color: var(--white); padding: 40px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
  ...
</div>
```

## Motivo

Não use:
- “+500 produtores atendidos”
- “10+ anos”
- “100% consultoria”

Se isso não é comprovável, derruba confiança. Produtor técnico percebe exagero.

---

# 2. Substituir o Hero por uma versão mais forte

## Trocar a headline atual

Atual:

```html
<h1>Sua irrigação pode estar te fazendo perder produção <span class="accent-text">e você nem percebe.</span></h1>
```

Substituir por:

```html
<h1>Você pode estar perdendo produção todos os dias por causa da irrigação <span class="accent-text">sem perceber.</span></h1>
```

## Trocar o parágrafo do hero

Atual:

```html
<p class="lead">Substitua seu sistema ineficiente pelo Aspersor Canhão Stratus. Maior raio de alcance, distribuição uniforme de água e drástica redução no tempo e custo com mão de obra no campo.</p>
```

Substituir por:

```html
<p class="lead">Falhas de cobertura, baixo alcance e excesso de reposicionamento manual podem estar reduzindo a eficiência da sua área. O Canhão Stratus ajuda produtores que precisam irrigar com mais alcance, uniformidade e menos esforço operacional.</p>
```

## Motivo

A versão anterior era boa, mas prometia “substituição” cedo demais e usava “drástica redução”, que pode soar exagerado. A nova versão é mais consultiva e mais segura.

---

# 3. Melhorar o CTA principal

## Manter este CTA

```html
Quero saber se esse aspersor funciona na minha área
```

Esse é bom e deve continuar.

## Alterar microcopy

Atual:

```html
<span class="microcopy">Atendimento pelo WhatsApp para tirar dúvidas e avaliar o seu cenário.</span>
```

Substituir por:

```html
<span class="microcopy">Responda algumas perguntas rápidas no WhatsApp e veja se o equipamento faz sentido para sua área, pressão e tipo de cultura.</span>
```

## Motivo

A microcopy atual é genérica. A nova prepara o lead para um diagnóstico, não apenas “tirar dúvidas”.

---

# 4. Melhorar a seção de problemas

## Trocar o título da seção

Atual:

```html
<h2>Se você enfrenta algum desses pontos:</h2>
```

Substituir por:

```html
<h2>Problemas de irrigação que parecem pequenos, mas custam caro no campo</h2>
```

## Trocar os textos dos cards

### Card 1

Atual:

```html
<h3>Água insuficiente</h3>
<p>Áreas da lavoura recebendo menos água que o necessário para o desenvolvimento ideal.</p>
```

Substituir por:

```html
<h3>Pontos secos na área</h3>
<p>Quando a água não chega de forma uniforme, parte da produção pode sofrer mais em dias de calor e baixa umidade.</p>
```

### Card 2

Atual:

```html
<h3>Alto custo com mão de obra</h3>
<p>Necessidade de alocar funcionários o tempo todo para reposicionar mangueiras e aspersores menores.</p>
```

Substituir por:

```html
<h3>Reposicionamento manual demais</h3>
<p>Trocar mangueiras e aspersores com frequência toma tempo, exige mão de obra e atrasa outras tarefas da operação.</p>
```

### Card 3

Atual:

```html
<h3>Baixo alcance</h3>
<p>O sistema atual não chega onde precisa, deixando falhas na cobertura da área.</p>
```

Substituir por:

```html
<h3>Baixo alcance do sistema atual</h3>
<p>Equipamentos com pouco alcance exigem mais pontos de irrigação e podem deixar áreas descobertas.</p>
```

### Card 4

Atual:

```html
<h3>Desperdício financeiro</h3>
<p>Irrigação irregular que não só joga água e energia fora, como impacta diretamente o peso no momento da colheita.</p>
```

Substituir por:

```html
<h3>Água e energia mal aproveitadas</h3>
<p>Irrigação mal distribuída pode aumentar o gasto operacional sem entregar a cobertura que a área realmente precisa.</p>
```

## Trocar frase final

Atual:

```html
<strong>Então seu sistema atual pode estar limitando diretamente sua produtividade.</strong>
```

Substituir por:

```html
<strong>Se algum desses pontos acontece na sua área, vale avaliar se o problema está no alcance e na distribuição da água.</strong>
```

## Motivo

Evita prometer perda direta sem diagnóstico e deixa a copy mais confiável.

---

# 5. Reescrever a seção de solução

## Trocar o texto de transição

Atual:

```html
<p style="font-size: 1.125rem; color: var(--text-muted); margin-bottom: 12px;">É exatamente nesse cenário que entra um aspersor de médio/alto alcance.</p>
```

Substituir por:

```html
<p style="font-size: 1.125rem; color: var(--text-muted); margin-bottom: 12px;">Em muitos casos, o problema não está na cultura. Está na forma como a água está sendo distribuída.</p>
```

## Trocar o título

Atual:

```html
<h2 style="margin-bottom: 24px;">O aspersor canhão Stratus foi desenvolvido para quem precisa:</h2>
```

Substituir por:

```html
<h2 style="margin-bottom: 24px;">O Canhão Stratus é indicado para produtores que precisam de mais alcance, cobertura e regularidade na irrigação.</h2>
```

## Trocar bullets

Atual:

```html
<li>Cobrir áreas maiores com menos pontos de irrigação</li>
<li>Melhorar a uniformidade da distribuição da água</li>
<li>Reduzir trabalho manual no campo</li>
<li>Ter um equipamento resistente para uso contínuo</li>
```

Substituir por:

```html
<li>Cobrir áreas produtivas com maior raio de alcance</li>
<li>Reduzir falhas de cobertura em pontos mais distantes</li>
<li>Diminuir a dependência de troca manual constante</li>
<li>Usar um equipamento robusto, feito para operação no campo</li>
```

## Trocar CTA da seção

Atual:

```html
Falar com um especialista
```

Substituir por:

```html
Quero avaliar minha área
```

## Motivo

“Especialista” pode soar genérico ou exagerado. “Avaliar minha área” combina melhor com venda consultiva.

---

# 6. Ajustar seção de aplicações

## Trocar título

Atual:

```html
<h2>Esse tipo de equipamento faz mais sentido para:</h2>
```

Substituir por:

```html
<h2>Onde esse tipo de aspersor costuma fazer mais sentido</h2>
```

## Manter os cards, mas ajustar labels

### Card 1

Trocar:

```html
Hortaliças em campo aberto
```

Manter.

### Card 2

Trocar:

```html
Viveiros e produção de mudas
```

Manter, mas o ideal é validar tecnicamente caso use microaspersão ou gotejamento.

### Card 3

Trocar:

```html
Pastagens
```

Manter.

### Card 4

Trocar:

```html
Áreas com necessidade de maior alcance
```

Substituir por:

```html
Áreas abertas que exigem maior alcance
```

## Trocar observação final

Atual:

```html
⚠️ <strong>Importante:</strong> não é indicado para qualquer cenário. A escolha depende da sua área e estrutura atual.
```

Substituir por:

```html
⚠️ <strong>Importante:</strong> o Stratus não é indicado para qualquer cenário. Antes da compra, é necessário avaliar área, pressão disponível, tipo de cultura e sistema atual.
```

## Motivo

Melhora confiança e reduz leads ruins.

---

# 7. Melhorar seção de vídeo/prova

## Trocar título

Atual:

```html
<h2 class="white">Veja o aspersor em funcionamento no campo.</h2>
```

Substituir por:

```html
<h2 class="white">Veja como o alcance e a cobertura aparecem na prática.</h2>
```

## Trocar subtítulo

Atual:

```html
<p class="white-soft">Veja a cobertura, o alcance e o funcionamento real do Canhão Stratus.</p>
```

Substituir por:

```html
<p class="white-soft">O vídeo ajuda a visualizar o jato, a distância de cobertura e o comportamento do equipamento em operação.</p>
```

## Trocar CTA

Atual:

```html
Quero receber o vídeo no WhatsApp
```

Substituir por:

```html
Quero ver o funcionamento pelo WhatsApp
```

## Motivo

Fica mais natural e menos “isca”.

---

# 8. Melhorar diferenciais

## Trocar título

Atual:

```html
<h2>O que torna o Stratus a escolha certa:</h2>
```

Substituir por:

```html
<h2>Por que o Stratus pode ser uma opção melhor que aspersores comuns</h2>
```

## Ajustar os cards

### Construção robusta

Atual:

```html
Equipamento feito para durar e aguentar o tranco no campo.
```

Substituir por:

```html
Fabricado com materiais resistentes para suportar uso contínuo em áreas produtivas.
```

### Alta durabilidade

Atual:

```html
Materiais de qualidade que garantem longa vida útil.
```

Substituir por:

```html
Sistema de reversão lenta que ajuda a reduzir desgaste, travamentos e manutenções frequentes.
```

### Ajustes precisos

Atual:

```html
Fácil de configurar para a necessidade exata da sua área.
```

Substituir por:

```html
Permite ajustar o setor irrigado e adaptar o funcionamento conforme a necessidade da área.
```

### Melhor cobertura

Atual:

```html
Distribuição uniforme da água em toda a área de alcance.
```

Substituir por:

```html
Projetado para oferecer maior raio de alcance e distribuição mais regular da água.
```

### Menos desperdício

Atual:

```html
Irrigação eficiente que economiza água e energia.
```

Substituir por:

```html
Quando bem aplicado, ajuda a direcionar melhor a água e reduzir perdas por cobertura mal distribuída.
```

### Manutenção simples

Atual:

```html
Peças fáceis de encontrar e substituição rápida no campo.
```

Substituir por:

```html
Projeto pensado para reduzir regulagens frequentes e facilitar a operação no dia a dia.
```

## Motivo

A versão anterior prometia demais em algumas frases. A nova é mais segura, técnica e confiável.

---

# 9. Melhorar seção de especificações

A seção está boa. Manter estrutura, mas ajustar alguns textos para não prometer demais.

## Trocar subtítulo

Atual:

```html
<p>Dados técnicos que comprovam a robustez e versatilidade do equipamento em operação.</p>
```

Substituir por:

```html
<p>Dados técnicos do equipamento para ajudar a entender se ele é compatível com a sua operação.</p>
```

## Ajustar card “11 a 69 m³/h”

Atual:

```html
Permite irrigar áreas maiores com mais eficiência, reduzindo pontos de irrigação.
```

Substituir por:

```html
Faixa de vazão ampla, indicada para operações que exigem maior volume de água e cobertura.
```

## Ajustar card “12,5 a 26 mm”

Atual:

```html
Ajuste conforme sua necessidade, garantindo melhor cobertura e menos falhas.
```

Substituir por:

```html
Diferentes opções de bocais permitem adaptar o equipamento conforme pressão e necessidade da área.
```

## Ajustar card “18°, 24° e 45°”

Atual:

```html
Possibilidade de adaptar o jato para diferentes culturas e condições de vento.
```

Substituir por:

```html
Opções de trajetória do jato para diferentes condições de aplicação.
```

## Ajustar card “Giro 360°”

Atual:

```html
Irrigue apenas onde precisa ou cubra toda a área com um único equipamento.
```

Substituir por:

```html
Permite trabalho setorial ajustável ou giro completo, conforme a necessidade do sistema.
```

## Motivo

Evita afirmar benefício absoluto. Produto técnico precisa de linguagem precisa.

---

# 10. Melhorar FAQ

## Adicionar nova pergunta antes da primeira

```html
<details class="faq-item" open>
  <summary>Como saber se esse aspersor serve para minha área?</summary>
  <div class="faq-answer"><p>O ideal é avaliar quatro pontos: tamanho da área, pressão disponível, tipo de cultura e sistema de irrigação atual. Pelo WhatsApp, fazemos essas perguntas antes de indicar o equipamento.</p></div>
</details>
```

## Alterar pergunta “Qual o alcance?”

Atual:

```html
<p>Varia conforme a pressão da sua bomba e o cenário da instalação. Avaliamos caso a caso pelo WhatsApp.</p>
```

Substituir por:

```html
<p>O raio de alcance varia conforme pressão, bocal utilizado, ângulo do jato e condições do local. Por isso, a avaliação antes da compra é importante.</p>
```

## Adicionar pergunta sobre reparo

```html
<details class="faq-item">
  <summary>Vocês trabalham com reparo/manutenção?</summary>
  <div class="faq-answer"><p>Sim. Além da venda do equipamento, também trabalhamos com reparo e manutenção, quando aplicável.</p></div>
</details>
```

## Adicionar pergunta sobre preço

```html
<details class="faq-item">
  <summary>Qual é o valor do equipamento?</summary>
  <div class="faq-answer"><p>O ticket médio fica em torno de R$ 3.800, mas o mais importante é confirmar antes se o equipamento atende tecnicamente à sua área. Se não fizer sentido, não recomendamos a compra.</p></div>
</details>
```

## Motivo

Isso qualifica e reduz pergunta repetida no WhatsApp.

---

# 11. Melhorar CTA final

## Trocar título

Atual:

```html
<h2 class="white">Ainda não tem certeza?</h2>
```

Substituir por:

```html
<h2 class="white">Quer saber se o Stratus faz sentido para sua área?</h2>
```

## Trocar texto

Atual:

```html
<p class="white-soft">Fale com a gente e entenda se esse aspersor realmente faz sentido para a sua área.</p>
```

Substituir por:

```html
<p class="white-soft">Envie uma mensagem no WhatsApp. Vamos avaliar área, pressão, cultura e sistema atual antes de indicar o equipamento.</p>
```

## Trocar botão

Atual:

```html
Quero avaliar minha irrigação
```

Substituir por:

```html
Quero avaliar minha área pelo WhatsApp
```

## Motivo

Deixa a ação mais específica e aumenta a qualidade do lead.

---

# 12. Mensagem pré-preenchida do WhatsApp

No `script.js`, garanta que todos os botões do WhatsApp usem uma mensagem assim:

```javascript
const phoneNumber = "5521977115614";
const message = "Olá, vi o site sobre o Aspersor Canhão Stratus e queria saber se ele funciona para minha área. Posso te passar informações sobre cultura, área e pressão disponível.";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = whatsappUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
```

## Motivo

Lead chega mais quente e já entende que a conversa será consultiva.

---

# 13. Troca de imagens

Use imagens reais do produto sempre que possível.

## Recomendações

### Hero
Usar imagem do produto em campo ou imagem com aplicação real.

Arquivo sugerido:

```html
assets/hero-stratus-campo.jpg
```

### Produto
Usar imagem real/isolada do produto.

Arquivo sugerido:

```html
assets/stratus-produto-real.png
```

### Vídeo
Usar poster real do produto funcionando.

Arquivo sugerido:

```html
assets/video-stratus-poster.jpg
```

## Não usar

- imagem genérica de aspersor comum;
- imagem de outro modelo;
- imagem que pareça diferente do Stratus;
- imagem IA deformada.

## Motivo

Produto técnico depende de confiança visual.

---

# 14. Ajuste de SEO

## Trocar title

Atual:

```html
<title>Aspersor Canhão Stratus | Irrigação de Médio e Alto Alcance</title>
```

Manter, está bom.

## Trocar meta description

Atual:

```html
<meta name="description" content="O aspersor canhão Stratus oferece cobertura ampla e uniforme para áreas produtivas. Ideal para hortaliças, pastagens e viveiros." />
```

Substituir por:

```html
<meta name="description" content="Aspersor Canhão Stratus Fabrimar para irrigação agrícola de médio e alto alcance. Avalie se o equipamento atende sua área, pressão e tipo de cultura pelo WhatsApp." />
```

## Motivo

Fica mais específico para busca orgânica e mais honesto no posicionamento.

---

# 15. Ordem ideal da página

A ordem atual está boa. Apenas recomendo a seguinte estrutura:

1. Header  
2. Hero  
3. Problemas  
4. Solução  
5. Aplicações  
6. Vídeo/prova  
7. Diferenciais  
8. Especificações  
9. FAQ  
10. CTA final  
11. Footer  

A trust bar deve ser removida.

---

# 16. Veredito final

Sua página tem boa estrutura, mas precisava parar de parecer “boa demais” em pontos sem prova. O ajuste principal é aumentar confiança, reduzir promessa exagerada e reforçar diagnóstico.

A landing deve vender assim:

- não promete milagre;
- não tenta vender para todo mundo;
- mostra o produto real;
- explica a aplicação;
- chama para avaliação via WhatsApp.

Isso gera menos lead curioso e mais lead com intenção real.
