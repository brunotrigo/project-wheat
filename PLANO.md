# PLANO.md — Project Wheat

## 1. Visão do projeto

O Project Wheat é um portfólio pessoal desenvolvido para apresentar a trajetória, os conhecimentos, os projetos e a evolução de Bruno Trigo na área de tecnologia.

O projeto utiliza o trigo como metáfora de crescimento: assim como uma semente se desenvolve até se transformar em algo maior, o conhecimento é construído gradualmente por meio de estudo, prática e desenvolvimento de projetos.

A proposta é transformar essa identidade em uma experiência visual interativa, combinando um portfólio moderno com uma experiência 3D abstrata integrada à navegação.

### 1.1. Objetivo principal

Desenvolver um portfólio visualmente marcante, interativo e responsivo, utilizando:

- HTML5 para a estrutura.
- CSS3 para a identidade visual e apresentação.
- JavaScript puro para interações e lógica.
- Uma solução de renderização 3D, a ser definida durante o planejamento técnico.

A experiência deverá apresentar a evolução do trigo para a tecnologia por meio de uma composição 3D que se transforma conforme o visitante percorre a página.

### 1.2. Conceito visual escolhido

**Direção: abstrata.**

A experiência não deverá representar literalmente uma espiga de trigo ou utilizar um personagem como elemento principal.

A ideia é construir uma composição abstrata inspirada em elementos naturais e tecnológicos.

A narrativa visual deverá explorar:

- Um núcleo ou semente dourada como origem.
- Estruturas orgânicas abstratas que remetam ao crescimento do trigo, sem representar literalmente uma espiga.
- Ramificações e partículas que se expandem a partir do núcleo.
- Fragmentação e reorganização progressiva das estruturas orgânicas.
- Linhas, conexões, nós e circuitos tecnológicos em ciano.
- Uma composição final predominantemente digital.

A transformação dos elementos orgânicos em estruturas tecnológicas é o elemento principal da experiência, e não apenas a presença de objetos 3D decorativos.

A identidade visual atual deverá ser preservada, utilizando principalmente:

- Azul-marinho como base.
- Dourado como representação da origem e do crescimento.
- Ciano como representação da tecnologia.
- Tipografia e elementos visuais já existentes.

### 1.3. Resultado esperado

Ao navegar pelo portfólio, o visitante deverá perceber uma experiência visual contínua.

A composição 3D começa com uma semente dourada e estruturas orgânicas abstratas, que se expandem, fragmentam e se reorganizam gradualmente até formar uma composição predominantemente digital.

Essa transformação deverá acompanhar o conteúdo e reforçar a narrativa do portfólio, sem substituir as seções, os textos ou as funcionalidades existentes.

---

## 2. Estado atual do projeto

O projeto possui uma estrutura baseada em HTML, CSS e JavaScript.

Arquivos principais identificados:

- `index.html`: estrutura e conteúdo da página.
- `style.css`: identidade visual, layout e responsividade.
- `script.js`: interações e comportamentos da interface.
- `assets/`: imagens e fontes utilizadas pelo projeto.

### 2.1. Estrutura atual da página

As seções identificadas são:

| Seção | Identificador | Finalidade |
|---|---|---|
| Início | `#inicio` | Apresentação principal |
| Origem | `#origem` | Simbolismo do nome Project Wheat |
| Sobre | `#sobre` | Apresentação pessoal |
| Aprendendo | `#aprendendo` | Conhecimentos e áreas de estudo |
| Projetos | `#projetos` | Projetos desenvolvidos |
| Evolução | `#evolucao` | Linha do tempo |
| Laboratório | `#laboratorio` | Experimentos e estudos |
| Contato | `#contato` | Formas de contato |

Também existe uma seção `.statement`, localizada entre o início e a origem, além do rodapé.

Essa estrutura deverá ser preservada.

### 2.2. Funcionalidades existentes

O projeto já possui:

- Menu de navegação responsivo.
- Controle de abertura e fechamento do menu móvel.
- Seletor de áreas de conhecimento.
- Renderização dinâmica de informações sobre conhecimentos.
- Cartões de projetos e experimentos.
- Elementos SVG incorporados ao HTML.
- Identidade visual própria.
- Layout responsivo.

Essas funcionalidades deverão continuar funcionando após a integração da experiência 3D.

### 2.3. Situação da experiência 3D

A experiência 3D ainda não foi implementada.

Não considerar como existentes:

- Cena 3D.
- Renderizador WebGL.
- Canvas dedicado à experiência.
- Animações relacionadas ao scroll.
- Geometrias ou partículas 3D.
- Integração com bibliotecas de renderização.

A implementação deverá começar somente após a definição da solução técnica.

---

## 3. Direção da experiência 3D

### 3.1. Ideia central

Criar uma composição 3D abstrata que evolui durante a navegação.

O visitante não deverá visualizar simplesmente um objeto girando ou uma animação isolada.

A intenção é representar visualmente a transformação do trigo em tecnologia:

**Origem → Crescimento → Conhecimento → Construção → Tecnologia → Evolução.**

A cena deverá acompanhar a evolução da página de maneira contínua. Seus elementos mudam progressivamente de forma, posição, distribuição e aparência com o avanço da rolagem; a experiência não deverá se limitar a mudanças bruscas ao entrar em cada seção.

As seções existentes são referências narrativas para orientar a transformação, não limites que exijam reiniciar a cena ou trocar abruptamente sua aparência.

### 3.2. Elementos visuais

Os elementos poderão incluir:

**Origem**
- Núcleo ou semente dourada.
- Pequenas partículas.
- Formas geométricas simples.
- Estruturas orgânicas abstratas que remetam ao crescimento do trigo, sem reproduzir uma espiga realista.

**Crescimento**
- Ramificações.
- Linhas curvas.
- Partículas que se expandem a partir do núcleo.
- Estruturas que se desenvolvem a partir do núcleo.

**Conhecimento**
- Novas conexões.
- Ramificações mais complexas.
- Organização espacial.
- Formação de estruturas interligadas.

**Transformação**
- Fragmentação progressiva de estruturas orgânicas.
- Mudança gradual de posição e escala.
- Reorganização de partículas e estruturas.
- Formação progressiva de linhas, conexões, nós e circuitos em ciano.

**Tecnologia**
- Linhas estruturadas.
- Nós luminosos.
- Circuitos.
- Elementos geométricos.
- Destaques em ciano.
- Composição final predominantemente digital.

**Evolução**
- Composição digital mais complexa.
- Integração entre linhas, partículas e estruturas.
- Estado final que represente o amadurecimento da ideia inicial.

Esses elementos são referências conceituais. O desenho final deverá ser definido durante a implementação visual.

---

## 4. Narrativa da experiência durante a rolagem

A experiência deverá acompanhar as seções existentes, utilizando cada parte do portfólio como referência narrativa.

Os momentos descritos abaixo indicam ênfases narrativas progressivas, não mudanças pontuais ou reinicializações da cena.

### 4.1. Início — `#inicio`

Representa a origem.

A cena começa com uma composição simples:

- Núcleo dourado.
- Poucas partículas.
- Estruturas orgânicas discretas.
- Movimento suave.

O visitante deverá perceber que algo está começando a se desenvolver.

### 4.2. Frase de impacto e origem — `.statement` e `#origem`

Representa o nascimento da ideia e o significado do trigo.

A composição começa a ganhar movimento e complexidade.

- Expansão do núcleo.
- Surgimento de ramificações.
- Partículas se afastando da origem.
- Primeiras conexões entre elementos.

### 4.3. Sobre — `#sobre`

Representa a formação pessoal.

A estrutura continua crescendo e adquirindo novas formas.

A cena deverá transmitir desenvolvimento e continuidade, sem competir com o texto da apresentação.

### 4.4. Aprendendo — `#aprendendo`

Representa a aquisição de conhecimento.

A composição começa a apresentar:

- Mais ramificações.
- Conexões entre elementos.
- Estruturas organizadas.
- Novos pontos de destaque.

A ideia é representar conhecimentos que se conectam e formam algo maior.

### 4.5. Projetos — `#projetos`

Representa a transformação do conhecimento em prática.

Os elementos orgânicos começam a dar lugar a estruturas mais geométricas.

- Fragmentação controlada.
- Reorganização espacial.
- Surgimento de linhas.
- Primeiros elementos tecnológicos em ciano.

### 4.6. Evolução e laboratório — `#evolucao` e `#laboratorio`

Representam a experimentação e a evolução contínua.

A composição passa a ter uma aparência predominantemente tecnológica.

- Circuitos.
- Nós conectados.
- Partículas digitais.
- Linhas organizadas.
- Formas geométricas interligadas.

### 4.7. Contato — `#contato`

Representa o encerramento da narrativa.

A composição chega ao estado final, mantendo equilíbrio visual e deixando o conteúdo de contato em destaque.

O resultado não deverá ser uma tela excessivamente carregada.

---

## 5. Estratégia de integração com o scroll

A cena deverá funcionar como uma experiência visual contínua, acompanhando a navegação.

A direção a avaliar é utilizar uma cena contínua compartilhada entre as seções, em vez de criar uma cena independente para cada seção. A transformação deverá responder progressivamente à posição da rolagem; as referências de cada seção orientarão a narrativa sem provocar mudanças bruscas de aparência.

### 5.1. Comportamento esperado

- A posição da rolagem determina o progresso da transformação.
- A cena evolui gradualmente em uma sequência contínua.
- Cada seção funciona como referência narrativa, não como um estado isolado que substitui a cena.
- A transição entre seções não deve provocar mudanças bruscas.
- A navegação por links e âncoras também deverá posicionar corretamente a experiência.
- O usuário poderá rolar para cima e observar a transformação inversa.

### 5.2. Estratégia técnica

A implementação deverá relacionar a posição da rolagem a um progresso contínuo de transformação. A solução técnica para obter esse progresso ainda deverá ser definida. Poderão ser avaliados:

- `requestAnimationFrame` para controlar a renderização.
- `IntersectionObserver` para identificar seções e referências narrativas.
- Cálculo controlado do progresso da página e de suas referências narrativas.
- Interpolação para mudanças contínuas de posição, escala, rotação e aparência.

A escolha final deverá evitar cálculos pesados e atualizações desnecessárias durante a rolagem, e será registrada na Etapa 1 antes da implementação.

### 5.3. Posicionamento da cena

A cena deverá ser posicionada de maneira que pareça integrada ao portfólio.

Uma possibilidade a avaliar é utilizar uma camada visual controlada e persistente, enquanto o conteúdo HTML continua ocupando seu espaço normal. Posicionamento fixo ou outra estratégia de composição deverão ser comparados conforme a arquitetura e os testes; esta decisão não está antecipada.

O posicionamento definitivo deverá considerar:

- Hierarquia visual.
- Legibilidade.
- Sobreposição de elementos.
- Navegação.
- Responsividade.
- Desempenho.
- Compatibilidade com as interações e a estrutura HTML existentes.

A camada visual não poderá cobrir indevidamente o conteúdo nem bloquear links, botões, seleção de texto ou outras interações.

---

## 6. Tecnologias e arquitetura

### 6.1. Tecnologias principais

- HTML5.
- CSS3.
- JavaScript puro.

A estrutura estática atual, baseada em `index.html`, `style.css` e `script.js`, deverá continuar sendo a base do projeto. A cena 3D será complementar ao conteúdo e não substituirá a estrutura do portfólio.

### 6.2. Biblioteca 3D

Three.js é uma possibilidade para a renderização da experiência, não uma dependência aprovada. A Etapa 1 deverá comparar as alternativas antes de escolher uma solução:

| Alternativa a avaliar | Questões da comparação |
|---|---|
| Three.js | Adequação à cena, impacto no carregamento inicial, compatibilidade com a estrutura estática, manutenção e desempenho em dispositivos móveis. |
| WebGL sem biblioteca 3D | Se o controle direto necessário é viável para a complexidade visual prevista e qual seria o custo de manutenção. |
| Solução sem biblioteca 3D | Se CSS, SVG ou Canvas 2D podem representar a transformação com complexidade e custo menores, sem comprometer a proposta visual. |

A comparação deverá considerar, para as alternativas aplicáveis:

- Adequação à transformação visual pretendida.
- Impacto da biblioteca ou solução no carregamento inicial.
- Compatibilidade com a estrutura estática atual.
- Complexidade de desenvolvimento e manutenção.
- Desempenho em dispositivos móveis e com recursos limitados.
- Estratégia de carregamento e fallback.

A decisão entre Three.js, outra abordagem de renderização ou uma solução sem biblioteca deverá ser registrada na Etapa 1. Não introduzir React, Vue, Angular, Next.js ou outro framework de interface.

### 6.3. Organização dos arquivos

A estrutura atual deverá ser preservada inicialmente.

Uma possível organização futura, caso a implementação justifique, seria:

- `index.html`
- `style.css`
- `script.js`
- `assets/`
- `js/` para módulos JavaScript adicionais.
- `css/` somente se houver necessidade real de separar arquivos de estilo.

Não reorganizar o projeto apenas por preferência estética.

### 6.4. Separação de responsabilidades

A implementação deverá manter responsabilidades claras:

- HTML: estrutura e conteúdo.
- CSS: apresentação, camadas e responsividade.
- JavaScript da interface: menu, seletor e interações existentes.
- JavaScript da experiência: criação e controle da cena 3D.
- Renderizador 3D: desenho e atualização dos elementos visuais.

A experiência 3D não deverá tornar o restante do portfólio dependente de sua inicialização.

---

## 7. Etapas de desenvolvimento

O desenvolvimento deverá acontecer de maneira incremental, com validação antes de avançar.

### Etapa 1 — Preparação e definição técnica

Objetivo: definir como a experiência será construída.

Tarefas:

- [ ] Revisar a estrutura atual do projeto.
- [ ] Comparar Three.js, WebGL sem biblioteca 3D e a possibilidade de uma solução sem biblioteca 3D.
- [ ] Avaliar impacto no carregamento inicial, compatibilidade com a estrutura estática, manutenção e desempenho em dispositivos móveis.
- [ ] Decidir se Three.js será utilizado ou se outra alternativa atende melhor à experiência.
- [ ] Definir a estratégia de composição e posicionamento da cena, considerando uma camada visual controlada que não cubra o conteúdo nem bloqueie interações.
- [ ] Definir como a cena será carregada sem prejudicar a apresentação inicial do conteúdo.
- [ ] Definir como a posição da rolagem será convertida em progresso contínuo da transformação, usando as seções existentes como referências narrativas.
- [ ] Definir a estratégia de fallback, incluindo o comportamento quando WebGL não estiver disponível.

Critérios de conclusão:

- Alternativas comparadas e decisão técnica documentada, incluindo justificativa.
- Estratégias de composição, posicionamento, carregamento, integração com rolagem e fallback documentadas.
- Compatibilidade com a arquitetura atual e impactos esperados identificados.

Nenhuma dependência ou implementação da experiência deverá ser adicionada antes da decisão técnica.

### Etapa 2 — Criação da cena 3D básica

Objetivo: colocar a primeira cena funcionando.

Tarefas:

- [ ] Preparar a estrutura necessária.
- [ ] Criar a cena.
- [ ] Configurar a câmera.
- [ ] Configurar o renderizador.
- [ ] Criar uma geometria simples.
- [ ] Exibir a primeira composição.
- [ ] Dimensionar a cena conforme o espaço disponível e tratar redimensionamentos.
- [ ] Validar a inicialização e o encerramento do renderizador e o descarte dos recursos correspondentes.
- [ ] Validar a compatibilidade com a estrutura HTML existente.
- [ ] Separar a camada visual dos elementos interativos da página.

Critérios de conclusão:

- A cena aparece corretamente no navegador.
- A inicialização, o redimensionamento e o encerramento funcionam sem erros observados.
- A página continua navegável.
- A camada visual não cobre indevidamente o conteúdo nem bloqueia interações.
- A cena funciona junto à estrutura HTML existente.

### Etapa 3 — Construção dos elementos visuais

Objetivo: criar os componentes que formarão a narrativa.

Tarefas:

- [ ] Criar e validar visualmente o núcleo ou semente dourada.
- [ ] Criar e validar estruturas orgânicas abstratas que remetam ao crescimento do trigo.
- [ ] Acrescentar e validar ramificações e partículas que se expandem.
- [ ] Acrescentar e validar linhas e conexões.
- [ ] Introduzir progressivamente nós, circuitos e outros elementos tecnológicos em ciano.
- [ ] Ajustar iluminação e profundidade conforme a composição for construída.

Construir os elementos nesta sequência, validando visualmente cada incremento antes de avançar; não é necessário criar todos de uma vez.

1. Núcleo ou semente dourada.
2. Estruturas orgânicas abstratas.
3. Ramificações e partículas.
4. Linhas e conexões.
5. Elementos tecnológicos em ciano.

Critérios de conclusão:

- Os elementos possuem identidade visual coerente.
- A composição respeita a paleta existente.
- O resultado não prejudica a leitura da página.
- A cena apresenta uma composição visual reconhecível.

### Etapa 4 — Transformação orgânica para tecnológica

Objetivo: implementar a transformação visual principal.

Tarefas:

- [ ] Definir o estado inicial orgânico.
- [ ] Definir o estado intermediário de transformação.
- [ ] Definir o estado tecnológico.
- [ ] Fragmentar progressivamente as estruturas orgânicas.
- [ ] Alterar gradualmente a posição e a escala dos elementos.
- [ ] Reorganizar as partículas ao longo da transformação.
- [ ] Formar progressivamente conexões, nós e circuitos tecnológicos.
- [ ] Controlar a transição por um progresso de animação contínuo e coerente entre os estados.

Critérios de conclusão:

- A transformação pode ser observada de forma contínua.
- Os elementos não desaparecem ou surgem de maneira desordenada.
- A fragmentação, o reposicionamento, a reorganização e a formação tecnológica pertencem à mesma transformação progressiva.
- A narrativa visual fica clara.
- O resultado funciona tanto na progressão quanto no retorno da rolagem.

Evitar depender de várias animações independentes e desconectadas.

### Etapa 5 — Integração com a rolagem

Objetivo: conectar a transformação à navegação.

Tarefas:

- [ ] Relacionar progressivamente a posição da rolagem ao progresso da transformação.
- [ ] Utilizar as seções existentes como referências narrativas, mantendo uma cena contínua compartilhada.
- [ ] Suavizar as transições sem trocar abruptamente a aparência ao entrar em uma seção.
- [ ] Tratar navegação direta por âncoras e menu sem saltos visuais na cena.
- [ ] Evitar atualizações desnecessárias e cálculos pesados a cada evento de rolagem.
- [ ] Preservar o funcionamento do menu e do seletor de conhecimentos.

Critérios de conclusão:

- A cena acompanha a rolagem.
- A transformação é progressiva.
- A composição permanece contínua entre as seções e responde corretamente à posição da rolagem.
- A navegação para cima e para baixo funciona.
- Navegar diretamente para uma seção por âncora ou menu não causa saltos visuais inesperados.
- Menu e seletor de conhecimentos continuam funcionando.
- A rolagem não apresenta travamentos perceptíveis nos dispositivos testados.

### Etapa 6 — Responsividade

Objetivo: adaptar a experiência a diferentes dispositivos.

Tarefas:

- [ ] Testar desktop.
- [ ] Testar tablet.
- [ ] Testar celular.
- [ ] Ajustar o enquadramento e a composição da cena em diferentes telas.
- [ ] Adaptar a quantidade de partículas e a complexidade geométrica conforme o dispositivo.
- [ ] Adaptar a resolução do renderizador.
- [ ] Adaptar efeitos visuais e iluminação conforme os recursos disponíveis.
- [ ] Simplificar ou desativar partes da cena em dispositivos com recursos limitados, quando necessário.
- [ ] Preservar legibilidade e navegação.

Critérios de conclusão:

- O portfólio continua funcional em diferentes resoluções.
- A cena não prejudica o conteúdo.
- O custo visual e de processamento pode ser diferente entre desktop, telas menores e dispositivos limitados.
- Os ajustes realizados e os dispositivos testados são registrados.

### Etapa 7 — Acessibilidade e desempenho

Objetivo: garantir que a experiência seja utilizável e eficiente.

Tarefas:

- [ ] Respeitar `prefers-reduced-motion`.
- [ ] Definir e validar uma alternativa visual quando WebGL não estiver disponível.
- [ ] Verificar que a camada visual não bloqueia cliques nem seleção de texto.
- [ ] Tratar redimensionamento e descarte dos recursos gráficos.
- [ ] Medir e registrar FPS, uso de CPU/GPU, memória e impacto no carregamento inicial nos dispositivos testados.
- [ ] Avaliar a possibilidade de simplificar ou desativar a cena em dispositivos limitados.
- [ ] Ajustar a complexidade da cena com base nos resultados medidos.

Critérios de conclusão:

- `prefers-reduced-motion` foi respeitado e testado.
- A alternativa visual foi verificada quando WebGL não está disponível.
- Cliques, seleção de texto e navegação não são bloqueados pela camada visual.
- Redimensionamento e descarte de recursos gráficos foram verificados.
- FPS, CPU/GPU, memória e carregamento inicial foram avaliados e registrados, sem impor metas numéricas antes das medições.
- A possibilidade de simplificação ou desativação em dispositivos limitados foi avaliada.

### Etapa 8 — Testes e finalização

Objetivo: validar a experiência integrada.

Tarefas:

- [ ] Testar todas as seções.
- [ ] Testar a rolagem normal, incluindo progressão e retorno.
- [ ] Testar navegação direta por âncoras e pelo menu.
- [ ] Redimensionar a janela durante e após a navegação.
- [ ] Recarregar a página posicionada em diferentes seções e verificar a sincronização da cena.
- [ ] Testar o menu.
- [ ] Testar o seletor de conhecimentos.
- [ ] Testar diferentes resoluções.
- [ ] Testar movimento reduzido.
- [ ] Testar a alternativa quando WebGL estiver indisponível.
- [ ] Verificar o console.
- [ ] Corrigir regressões.

Critérios de conclusão:

- Todas as seções continuam funcionando.
- A cena acompanha corretamente a navegação.
- A identidade visual está preservada.
- A experiência funciona nos dispositivos testados.
- Não existem erros conhecidos que impeçam o uso.
- Os resultados da validação foram registrados.

---

## 8. Acessibilidade e desempenho como requisitos permanentes

Esses requisitos deverão ser considerados desde a primeira implementação, e não somente na etapa final.

### 8.1. Acessibilidade

- O conteúdo principal deverá continuar disponível em HTML.
- A experiência 3D será decorativa e complementar.
- O canvas não deverá receber foco desnecessariamente.
- Os controles existentes deverão continuar acessíveis.
- O movimento reduzido, identificado por `prefers-reduced-motion`, deverá simplificar ou desativar animações.
- A ausência de WebGL não poderá impedir a navegação.
- A camada visual não poderá bloquear cliques nem seleção de texto.

### 8.2. Desempenho

- Evitar geometrias desnecessariamente complexas.
- Evitar quantidade excessiva de partículas.
- Evitar criar novos objetos continuamente durante a animação.
- Controlar a frequência de atualização.
- Ajustar a resolução do renderizador conforme o dispositivo.
- Liberar geometrias, materiais e texturas quando deixarem de ser utilizados.
- Avaliar o impacto da cena no carregamento inicial.
- Medir e registrar FPS, uso de CPU/GPU, memória e carregamento nos dispositivos testados; não definir metas numéricas antes das medições.
- Considerar a simplificação ou desativação da cena em dispositivos limitados.

---

## 9. Regras de preservação

Durante todo o desenvolvimento:

1. Preservar HTML, CSS e JavaScript como tecnologias principais.
2. Manter a cena 3D complementar ao conteúdo, sem substituir a estrutura atual do portfólio.
3. Não migrar o projeto para React, Vue, Angular, Next.js ou outro framework de interface.
4. Preservar todas as seções, textos, links, IDs, classes e funcionalidades existentes.
5. Não criar novas seções nem antecipar funcionalidades fora do escopo deste planejamento.
6. Não alterar conteúdo sem necessidade ou decisão aprovada.
7. Não substituir arquivos inteiros quando uma alteração localizada resolver.
8. Não implementar etapas futuras antes da validação da etapa atual.
9. Não instalar dependências sem justificativa técnica e decisão registrada; nesta tarefa de planejamento, não instalar dependências.
10. Não deixar a experiência 3D impedir o funcionamento do portfólio.
11. Não marcar etapas como concluídas sem implementação e testes.

---

## 10. Critérios gerais de qualidade

A experiência será considerada satisfatória quando:

- [ ] A identidade visual do Project Wheat estiver preservada.
- [ ] A narrativa de origem, crescimento e tecnologia estiver clara.
- [ ] A transformação for integrada à rolagem.
- [ ] A cena não competir com o conteúdo.
- [ ] A navegação continuar funcionando.
- [ ] O menu responsivo continuar funcionando.
- [ ] O seletor de conhecimentos continuar funcionando.
- [ ] O layout continuar responsivo.
- [ ] O movimento reduzido for respeitado.
- [ ] A ausência de WebGL for tratada.
- [ ] O desempenho tiver sido avaliado.
- [ ] Os testes finais tiverem sido registrados.

---

## 11. Acompanhamento do projeto

### 11.1. Checklist geral

- [ ] Etapa 1 — Preparação e definição técnica.
- [ ] Etapa 2 — Cena 3D básica.
- [ ] Etapa 3 — Construção dos elementos visuais.
- [ ] Etapa 4 — Transformação orgânica para tecnológica.
- [ ] Etapa 5 — Integração com scroll.
- [ ] Etapa 6 — Responsividade.
- [ ] Etapa 7 — Acessibilidade e desempenho.
- [ ] Etapa 8 — Testes e finalização.

### 11.2. Registro de decisões técnicas

As decisões abaixo deverão ser preenchidas durante o desenvolvimento:

| Decisão | Situação |
|---|---|
| Alternativa de renderização escolhida (incluindo decisão sobre Three.js) | Pendente |
| Estratégia de composição da cena | Pendente |
| Estratégia de posicionamento da cena | Pendente |
| Estratégia de integração progressiva com scroll | Pendente |
| Estratégia de carregamento | Pendente |
| Estratégia de fallback | Pendente |
| Ajustes de desempenho realizados e resultados medidos | Pendente |

Manter todos os campos pendentes até que as decisões sejam documentadas e, quando aplicável, as implementações e medições correspondentes tenham sido realizadas.

### 11.3. Registro de validações

Cada etapa deverá registrar:

- O que foi implementado.
- Quais arquivos foram alterados.
- Quais testes foram realizados.
- Quais resultados foram observados.
- Quais problemas foram encontrados.
- Quais correções foram aplicadas.

Nenhum resultado deverá ser registrado sem evidência.

### 11.4. Critérios para avançar

Uma etapa somente poderá ser considerada concluída quando:

1. As tarefas previstas tiverem sido implementadas.
2. Os critérios de conclusão tiverem sido verificados.
3. Os testes correspondentes tiverem sido realizados.
4. As funcionalidades anteriores continuarem funcionando.
5. O resultado tiver sido revisado.

---

## 12. Direção final

O Project Wheat deverá transmitir uma ideia simples por meio de uma experiência visual marcante:

**Tudo começa com uma semente. O conhecimento faz crescer. A prática transforma. A tecnologia permite evoluir.**

A experiência 3D abstrata será o elemento visual que conecta essa narrativa ao portfólio, acompanhando o visitante durante a navegação sem retirar o protagonismo do conteúdo.

O desenvolvimento deverá priorizar qualidade visual, simplicidade arquitetural, aprendizado durante a implementação e preservação das funcionalidades existentes.