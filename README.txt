LANDING PAGE - ASPERSOR AGRÍCOLA
================================

ARQUIVOS:
- index.html
- styles.css
- script.js
- assets/  (todas as imagens)

COMO USAR:
1. Faça upload de todos os arquivos (mantendo a pasta assets/) para sua hospedagem.
2. Abra index.html no navegador para testar localmente.

COMO PERSONALIZAR:

[ WHATSAPP ]
Edite o arquivo script.js, no topo (objeto SITE_CONFIG):
  whatsappNumber: "5511999999999"   <- coloque o número no formato internacional (55 + DDD + número, sem espaços ou símbolos)
  whatsappMessage: "..."             <- mensagem que abre pré-preenchida

Todos os botões com a classe "whatsapp-link" vão abrir o WhatsApp automaticamente.

[ NOME DA EMPRESA ]
Edite o index.html. Procure por "AgroJato" e "Soluções de Irrigação" e troque pelo nome desejado.
Aparece em: Header (logo) e Footer.

[ CIDADE / TEXTO DE RODAPÉ ]
No index.html, procure pela palavra "Brasil" dentro do <footer> e troque pela sua cidade/estado.

[ TROCAR IMAGENS ]
Substitua os arquivos dentro da pasta assets/ mantendo os mesmos nomes:
  hero-sprinkler.jpg          - imagem do Hero
  product-sprinkler.jpg       - foto do produto na seção Solução
  problem-dry.jpg             - card "Água mal distribuída"
  problem-manual.jpg          - card "Muito trabalho manual"
  problem-pressure.jpg        - card "Baixo alcance"
  problem-waste.jpg           - card "Desperdício de água"
  app-hortalicas.jpg          - aplicação Hortaliças
  app-viveiros.jpg            - aplicação Viveiros e mudas
  app-flores.jpg              - aplicação Flores e ornamentais
  app-fruticultura.jpg        - aplicação Fruticultura
  app-pastagens.jpg           - aplicação Pastagens
  app-areas.jpg               - aplicação Áreas produtivas
  video-poster.jpg            - thumbnail do vídeo

[ TEXTOS ]
Todos os textos estão diretamente no index.html — basta editar.

REQUISITOS: nenhum. Roda em qualquer hospedagem que sirva arquivos estáticos
(Hostinger, Locaweb, Netlify, Vercel, GitHub Pages, etc.).
