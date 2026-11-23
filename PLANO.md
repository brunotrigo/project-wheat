# Plano de desenvolvimento — Project Wheat

Este documento registra o estado atual confirmado do Project Wheat e organiza as etapas futuras para avaliar e, somente quando aprovado, integrar uma experiência 3D abstrata.

## 1. Visão geral

### Objetivo do Project Wheat

O Project Wheat é um portfólio pessoal de Bruno Trigo voltado a tecnologia, aprendizado e projetos. O projeto apresenta uma identidade visual inspirada no trigo como metáfora de crescimento, evolução e formação contínua.

### Conceito visual

A identidade atual utiliza uma paleta escura com dourado como cor principal e ciano como elemento de destaque técnico. A interface combina tipografia personalizada, SVGs incorporados, gradientes, cartões, linhas, grades responsivas e efeitos sutis de interação.

### Objetivo da experiência 3D

A futura experiência 3D deverá representar de forma abstrata a transformação do trigo em tecnologia. Three.js poderá ser avaliado como biblioteca especializada de renderização, sem substituir o HTML, o CSS ou o JavaScript da interface atual.

### Resultado esperado

Ao final da implementação, a experiência deverá evoluir gradualmente durante a rolagem da página, mantendo o conteúdo principal legível e sem comprometer navegação, desempenho ou acessibilidade. A cena 3D deverá funcionar como uma camada complementar ao portfólio, não como uma substituição da interface existente.

## 2. Estado atual do projeto

O projeto está em HTML5, CSS3 e JavaScript puro. Foi confirmado que a branch atual é `main` e que não existem alterações pendentes antes da criação deste documento.

Não foi confirmado nenhum planejamento anterior na raiz do repositório; não existem outros arquivos Markdown ou de texto anteriores a este plano.

### `index.html`

Responsável pela estrutura, conteúdo, metadados e SVGs incorporados. O documento possui:

- Cabeçalho fixo com logo, menu de navegação e botão "Fale comigo".
- Seções e IDs reais:
  - `#inicio`: apresentação principal e ações de navegação.
  - `#origem`: explicação do nome e simbolismo do trigo.
  - `#sobre`: apresentação pessoal provisória.
  - `#aprendendo`: seletor de áreas e cartões de conhecimentos.
  - `#projetos`: três cartões provisórios de projeto.
  - `#evolucao`: linha do tempo com os anos 2024, 2025, 2026 e "Próximo".
  - `#laboratorio`: dois cartões de experimentos provisórios.
  - `#contato`: links provisórios de contato.
- Uma seção sem ID, `.statement`, entre `#inicio` e `#origem`.
- Um `<footer>` com marca, ano e lema.
- Marcas SVG do trigo no cabeçalho, origem e rodapé.
- Um SVG de broto na área de conhecimentos.
- O seletor `#learning-area` e os containers `.learn__summary` e `.learn__list`.

A estrutura visual atual não contém uma camada dedicada à experiência 3D.

### `style.css`

Responsável pela identidade visual, tipografia, espaçamento, layout, responsividade e estados de interação.

O CSS confirma:

- Fontes locais: oito arquivos TTF em `assets/`.
- Variáveis globais em `:root` para fundo, superfícies, dourado, ciano, texto, bordas e tipografias.
- Tipografias locais Inter, JetBrains Mono e Sora.
- Cabeçalho, menu responsivo, botões, hero, seções, cartões, áreas de conhecimento, linha do tempo, contato e rodapé.
- Layout em grades para duas e três colunas.
- Responsividade para larguras máximas de 960 px, 1080 px, 600 px e 420 px.
- Respeito parcial a movimento reduzido por meio de `prefers-reduced-motion`.
- Destaque visual para estados de foco e interação.

### `script.js`

Responsável pelas interações JavaScript existentes:

- Controle do menu móvel, incluindo abertura, fechamento, texto do botão e atributo `aria-expanded`.
- Fechamento do menu quando um link é selecionado.
- Dados das áreas de estudo: Frontend, Backend, Cloud, Inteligência artificial e Automação.
- Atualização dinâmica de `.learn__summary` e `.learn__list` ao mudar `#learning-area`.
- Criação dinâmica dos cartões de conhecimento, níveis, projetos vinculados e textos provisórios.

### `assets/`

Os recursos confirmados são:

- `hero-wheat.png`: imagem da seção inicial.
- `font-0.ttf` a `font-4.ttf`: fontes Inter e JetBrains Mono.
- `font-5.ttf` a `font-7.ttf`: pesos da fonte Sora.

Não há arquivos adicionais de modelo 3D, textura ou vídeo na pasta `assets/`.

### Experiência 3D

A experiência 3D não foi iniciada. Não há Three.js, canvas, WebGL, configuração de cena ou integração com a rolagem no estado atual.

## 3. Arquitetura e tecnologias

### HTML

Mantém a estrutura semântica, o conteúdo, os links, os metadados e a hierarquia das seções existentes.

### CSS

Mantém a identidade visual atual, o posicionamento dos elementos, as camadas, as grades e a responsividade. Qualquer estilo da cena deverá ser integrado sem substituir as classes existentes ou alterar o layout do conteúdo.

### JavaScript

Mantém o controle do menu, o seletor de áreas e as outras interações existentes. Uma futura experiência 3D deverá utilizar módulos ou funções adicionais sem reescrever ou remover o comportamento atual.

### Three.js

Three.js poderá ser usado para criar e renderizar a cena 3D caso sua avaliação na Etapa 1 confirme que a solução é adequada ao projeto. O uso da biblioteca não caracteriza frameworks de interface e não deve introduzir React, Vue ou arquitetura de componentes.

Não é necessário criar uma nova estrutura de diretórios neste momento. Qualquer nova pasta ou arquivo deverá ser justificado pela implementação aprovada.

## 4. Conceito da experiência 3D

A cena deverá ser abstrata e representar uma transformação gradual do trigo em tecnologia.

### Elementos previstos

- Núcleo ou semente dourada como ponto inicial.
- Estruturas orgânicas que evoquem espigas, hastes e crescimento.
- Partículas douradas distribuídas no espaço.
- Linhas e conexões abstratas.
- Circuitos ou nós tecnológicos em ciano.
- Superfícies ou formas digitais que substituam gradualmente os elementos orgânicos.

### Comportamento visual

- Deve parecer integrada à página, não flutuar sobre o conteúdo sem relação.
- Precisa evoluir conforme a navegação.
- Não deve obscurecer textos, impedir seleções ou interferir em links.
- Deve usar uma paleta consistente com `--bt-bg`, `--bt-gold-light` e `--bt-cyan`.
- A composição deve permanecer subordinada ao conteúdo do portfólio.

## 5. Narrativa visual durante a rolagem

1. **Início — origem e semente:** a experiência pode começar em `#inicio`, com o núcleo dourado e estruturas simples inspiradas no trigo.
2. **Frase de impacto e origem:** a cena pode apresentar crescimento leve e primeiras ramificações após a seção `.statement` e em `#origem`.
3. **Sobre:** o foco visual pode preservar o crescimento orgânico e a formação pessoal da seção `#sobre`.
4. **Conhecimentos:** em `#aprendendo`, estruturas e conexões podem ganhar expansão, ramificação e organização.
5. **Projetos:** em `#projetos`, a composição pode introduzir elementos tecnológicos dourados e cianos associados à transformação prática.
6. **Evolução e laboratório:** em `#evolucao` e `#laboratorio`, partículas, linhas e circuitos podem indicar uma composição mais digital.
7. **Contato:** em `#contato`, a cena deve atingir um encerramento visual equilibrado, sem competir com os links finais.

A associação final deverá ser ajustada pela implementação com base no desempenho real da página.

## 6. Etapas de implementação

### Etapa 1 — Preparação

- [x] Inspecionar a arquitetura atual.
- [ ] Definir o ponto de integração da cena.
- [ ] Avaliar a biblioteca 3D.
- [ ] Definir estratégia de carregamento.

**Critérios de conclusão:**

- Ponto de integração aprovado sem mudanças desnecessárias na estrutura HTML.
- Decisão registrada sobre uso ou não de Three.js.
- Estratégia de carregamento compatível com uma página estática.
- Impacto no carregamento inicial identificado.

### Etapa 2 — Cena 3D básica

- [ ] Preparar cena, câmera e renderizador.
- [ ] Exibir uma primeira forma 3D.
- [ ] Confirmar funcionamento no navegador.

**Critérios de conclusão:**

- Cena inicia sem erros no console.
- Renderização funciona em pelo menos uma resolução desktop e uma móvel.
- A página continua navegável e clicável.

### Etapa 3 — Construção visual

- [ ] Criar elementos orgânicos.
- [ ] Criar partículas douradas.
- [ ] Criar linhas e circuitos ciano.
- [ ] Ajustar iluminação e composição.

**Critérios de conclusão:**

- Elementos respeitam as cores e a identidade visual existentes.
- Objetos não sobrepõem nem ocultam o conteúdo.
- Iluminação não reduz legibilidade ou contraste.

### Etapa 4 — Transformação

- [ ] Criar a transição entre elementos orgânicos e tecnológicos.
- [ ] Controlar escala, posição, rotação e distribuição.
- [ ] Garantir transições suaves.

**Critérios de conclusão:**

- Todas as transições são contínuas e não apresentam cortes visuais bruscos.
- A transformação segue a narrativa planejada.
- Não há mudanças visuais excessivas que prejudiquem a leitura.

### Etapa 5 — Integração com scroll

- [ ] Relacionar a evolução da cena às seções existentes.
- [ ] Evitar cálculos desnecessários durante a rolagem.
- [ ] Preservar menu e interações atuais.

**Critérios de conclusão:**

- A cena responde à posição das seções reais.
- A rolagem permanece suave em resoluções testadas.
- Menu, seletor de área e links continuam funcionando.

### Etapa 6 — Responsividade

- [ ] Adaptar a cena para desktop, tablet e celular.
- [ ] Reduzir partículas e efeitos em dispositivos limitados.
- [ ] Garantir que o conteúdo continue legível.

**Critérios de conclusão:**

- A cena foi testada em tamanhos desktop, tablet e celular.
- Quantidade de elementos e consumo visual são adequados a telas menores.
- Nenhum conteúdo fica obstruído ou inutilizável.

### Etapa 7 — Acessibilidade e desempenho

- [ ] Respeitar `prefers-reduced-motion`.
- [ ] Tratar indisponibilidade de WebGL.
- [ ] Evitar bloquear cliques e navegação.
- [ ] Avaliar consumo de memória e processamento.
- [ ] Prever alternativa visual sem 3D.

**Critérios de conclusão:**

- Movimento reduzido desativa ou simplifica a animação.
- Navegadores sem WebGL exibem uma alternativa visual ou continuam com o portfólio comum.
- Cliques e navegação não são bloqueados por overlays ou canvas.
- Consumo de memória e processamento foi observado e documentado.

### Etapa 8 — Testes e finalização

- [ ] Testar todas as seções.
- [ ] Testar a sincronização com a rolagem.
- [ ] Testar diferentes resoluções.
- [ ] Verificar console do navegador.
- [ ] Verificar regressões nas funcionalidades existentes.

**Critérios de conclusão:**

- Todas as seções são renderizadas corretamente.
- Scroll, menu e seletor foram testados após a integração.
- Desktop e dispositivos móveis foram validados.
- Não há erros no console.
- Nenhuma funcionalidade existente apresentou regressão.

## 7. Critérios de conclusão

Uma etapa só poderá ser marcada como concluída após implementação correspondente e validação registrada.

Os critérios gerais são:

- [ ] Implementação aplicada sem remover ou substituir elementos existentes.
- [ ] Layout atual preservado.
- [ ] Conteúdo atual preservado.
- [ ] Menu responsivo validado.
- [ ] Seletor de áreas validado.
- [ ] Links e destinos existentes validados.
- [ ] Teste desktop concluído.
- [ ] Teste tablet concluído.
- [ ] Teste celular concluído.
- [ ] Console sem erros.
- [ ] WebGL indisponível tratado.
- [ ] Movimento reduzido respeitado.
- [ ] Custos de desempenho avaliados.

## 8. Regras de preservação

- Preservar a estrutura HTML atual e a hierarquia das seções.
- Preservar nomes de classes e IDs utilizados pelo CSS e pelo JavaScript.
- Não migrar o projeto para frameworks de interface.
- Não remover menu, seletor de áreas, links ou outras funcionalidades existentes.
- Não substituir arquivos inteiros quando uma alteração localizada for suficiente.
- Não alterar textos, identidade visual ou destinos sem justificativa explícita.
- Não criar novas seções apenas para acomodar a experiência 3D.
- Não implementar funcionalidades fora do planejamento aprovado.
- Não antecipar etapas futuras sem concluir e validar a etapa anterior.
- Não modificar `assets/` sem necessidade comprovada pela implementação.
- Não instalar dependências durante o planejamento; Three.js deverá ser avaliado antes de qualquer integração.

## 9. Acompanhamento

### Checklist das etapas

- [ ] Etapa 1 — Preparação
- [ ] Etapa 2 — Cena 3D básica
- [ ] Etapa 3 — Construção visual
- [ ] Etapa 4 — Transformação
- [ ] Etapa 5 — Integração com scroll
- [ ] Etapa 6 — Responsividade
- [ ] Etapa 7 — Acessibilidade e desempenho
- [ ] Etapa 8 — Testes e finalização

### Pendências

- Confirmar o ponto exato da cena na página.
- Decidir se Three.js será usado.
- Definir a estratégia de carregamento.
- Definir o tamanho e a quantidade de elementos da cena.
- Escolher como tratar navegadores sem WebGL.
- Registrar resultados de testes de desempenho.

### Decisões técnicas

- Tecnologia base: HTML5, CSS3 e JavaScript puro.
- Biblioteca 3D: a utilização de Three.js permanece pendente de avaliação.
- Estrutura de diretórios: nenhuma reorganização foi aprovada nesta tarefa.
- Experiência 3D: não iniciada.
- Identidade visual: permanecer com dourado, ciano, azul escuro e tipografia atual até haver justificativa para mudanças.

### Registro de validações

- Inspeção da arquitetura atual concluída.
- Arquivos principais confirmados: `index.html`, `style.css` e `script.js`.
- Arquivos de recursos confirmados em `assets/`.
- Nenhum documento de planejamento existente confirmado antes deste plano.
- Nenhuma implementação 3D existente confirmada.
- Branch atual confirmada como `main`.
- Estado local confirmado sem alterações pendentes antes da criação deste plano.

### Critérios para avançar de etapa

Uma etapa só pode avançar quando:

1. Todas as tarefas da etapa tiverem sido implementadas.
2. Os critérios objetivos da etapa tiverem sido validados.
3. Os testes relevantes tiverem sido registrados.
4. Nenhuma funcionalidade existente tiver sido perdida.
5. O resultado tiver sido revisado antes de iniciar a etapa seguinte.
