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

- Sementes e núcleos.
- Estruturas orgânicas.
- Ramificações e crescimento.
- Partículas e fragmentação.
- Linhas e conexões.
- Circuitos e estruturas digitais.
- Transformação gradual entre natureza e tecnologia.

A identidade visual atual deverá ser preservada, utilizando principalmente:

- Azul-marinho como base.
- Dourado como representação da origem e do crescimento.
- Ciano como representação da tecnologia.
- Tipografia e elementos visuais já existentes.

### 1.3. Resultado esperado

Ao navegar pelo portfólio, o visitante deverá perceber uma experiência visual contínua.

A composição 3D começa representando uma origem orgânica e evolui gradualmente até assumir uma aparência tecnológica.

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

A intenção é transmitir uma transformação:

**Origem → Crescimento → Conhecimento → Construção → Tecnologia → Evolução.**

A cena deverá ser construída de maneira que seus elementos mudem de forma, posição, distribuição e aparência conforme o progresso da página.

### 3.2. Elementos visuais

Os elementos poderão incluir:

**Origem**
- Núcleo dourado.
- Pequenas partículas.
- Formas geométricas simples.
- Estruturas orgânicas iniciais.

**Crescimento**
- Ramificações.
- Linhas curvas.
- Expansão de partículas.
- Estruturas que se desenvolvem a partir do núcleo.

**Conhecimento**
- Novas conexões.
- Ramificações mais complexas.
- Organização espacial.
- Formação de estruturas interligadas.

**Transformação**
- Fragmentação de partes orgânicas.
- Reorganização de partículas.
- Substituição gradual de formas naturais.
- Surgimento de conexões geométricas.

**Tecnologia**
- Linhas estruturadas.
- Nós luminosos.
- Circuitos.
- Elementos geométricos.
- Destaques em ciano.

**Evolução**
- Composição digital mais complexa.
- Integração entre linhas, partículas e estruturas.
- Estado final que represente o amadurecimento da ideia inicial.

Esses elementos são referências conceituais. O desenho final deverá ser definido durante a implementação visual.

---

## 4. Narrativa da experiência durante a rolagem

A experiência deverá acompanhar as seções existentes, utilizando cada parte do portfólio como referência narrativa.

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

A proposta inicial é utilizar uma única cena 3D que evolui ao longo da página, em vez de criar uma cena independente para cada seção.

### 5.1. Comportamento esperado

- A posição da rolagem determina o progresso da transformação.
- A cena evolui gradualmente.
- Cada seção funciona como referência narrativa.
- A transição entre seções não deve provocar mudanças bruscas.
- A navegação por links e âncoras também deverá posicionar corretamente a experiência.
- O usuário poderá rolar para cima e observar a transformação inversa.

### 5.2. Estratégia técnica

A implementação poderá utilizar:

- `requestAnimationFrame` para controlar a renderização.
- `IntersectionObserver` para identificar seções e referências narrativas.
- Cálculo controlado do progresso da página.
- Interpolação para suavizar mudanças de posição, escala, rotação e aparência.

A escolha final deverá evitar cálculos pesados e atualizações desnecessárias durante a rolagem.

### 5.3. Posicionamento da cena

A cena deverá ser posicionada de maneira que pareça integrada ao portfólio.

Uma possibilidade é utilizar uma camada visual persistente, enquanto o conteúdo HTML continua ocupando seu espaço normal.

O posicionamento definitivo deverá considerar:

- Hierarquia visual.
- Legibilidade.
- Sobreposição de elementos.
- Navegação.
- Responsividade.
- Desempenho.

A cena não poderá bloquear links, botões, seleção de texto ou interações.

---

## 6. Tecnologias e arquitetura

### 6.1. Tecnologias principais

- HTML5.
- CSS3.
- JavaScript puro.

A estrutura atual deverá continuar sendo a base do projeto.

### 6.2. Biblioteca 3D

Three.js poderá ser utilizada para a renderização da experiência.

A escolha deverá considerar:

- Facilidade de criação das geometrias.
- Controle das animações.
- Integração com JavaScript.
- Compatibilidade com WebGL.
- Desempenho.
- Tamanho da dependência.
- Facilidade de manutenção.

A biblioteca ainda não está aprovada como dependência obrigatória.

A Etapa 1 deverá confirmar se Three.js é a melhor alternativa ou se existe uma solução mais simples que atenda à proposta.

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
- [ ] Identificar o melhor ponto de integração da cena.
- [ ] Avaliar Three.js.
- [ ] Comparar alternativas de renderização.
- [ ] Definir a estratégia de carregamento.
- [ ] Definir a estratégia de integração com scroll.
- [ ] Definir a estratégia de posicionamento.
- [ ] Planejar o fallback sem WebGL.

Critérios de conclusão:

- Solução técnica escolhida e justificada.
- Arquitetura atual compreendida.
- Estratégia de integração definida.
- Impactos iniciais identificados.

Nenhuma dependência deverá ser instalada antes da decisão técnica.

### Etapa 2 — Criação da cena 3D básica

Objetivo: colocar a primeira cena funcionando.

Tarefas:

- [ ] Preparar a estrutura necessária.
- [ ] Criar a cena.
- [ ] Configurar a câmera.
- [ ] Configurar o renderizador.
- [ ] Criar uma geometria simples.
- [ ] Exibir a primeira composição.
- [ ] Ajustar o dimensionamento da cena.

Critérios de conclusão:

- A cena aparece corretamente no navegador.
- Não existem erros de inicialização.
- A página continua navegável.
- A cena não bloqueia interações.

### Etapa 3 — Construção dos elementos visuais

Objetivo: criar os componentes que formarão a narrativa.

Tarefas:

- [ ] Criar o núcleo dourado.
- [ ] Criar estruturas orgânicas.
- [ ] Criar ramificações.
- [ ] Adicionar partículas.
- [ ] Criar linhas e conexões.
- [ ] Introduzir elementos tecnológicos.
- [ ] Ajustar iluminação e profundidade.

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
- [ ] Controlar a posição dos elementos.
- [ ] Controlar escala e rotação.
- [ ] Controlar a fragmentação e reorganização.
- [ ] Criar transições suaves entre os estados.

Critérios de conclusão:

- A transformação pode ser observada de forma contínua.
- Os elementos não desaparecem ou surgem de maneira desordenada.
- A narrativa visual fica clara.
- O resultado funciona tanto na progressão quanto no retorno da rolagem.

### Etapa 5 — Integração com a rolagem

Objetivo: conectar a transformação à navegação.

Tarefas:

- [ ] Relacionar o progresso do scroll com a cena.
- [ ] Utilizar as seções como referências narrativas.
- [ ] Ajustar a evolução visual por trecho da página.
- [ ] Suavizar as transições.
- [ ] Tratar navegação por âncoras.
- [ ] Evitar cálculos desnecessários.
- [ ] Preservar as interações existentes.

Critérios de conclusão:

- A cena acompanha a rolagem.
- A transformação é progressiva.
- A navegação para cima e para baixo funciona.
- Menu e seletor continuam funcionando.
- A rolagem não apresenta travamentos perceptíveis nos dispositivos testados.

### Etapa 6 — Responsividade

Objetivo: adaptar a experiência a diferentes dispositivos.

Tarefas:

- [ ] Testar desktop.
- [ ] Testar tablet.
- [ ] Testar celular.
- [ ] Ajustar posição da cena.
- [ ] Reduzir partículas quando necessário.
- [ ] Ajustar resolução do renderizador.
- [ ] Reduzir efeitos visuais em dispositivos limitados.
- [ ] Preservar legibilidade e navegação.

Critérios de conclusão:

- O portfólio continua funcional em diferentes resoluções.
- A cena não prejudica o conteúdo.
- A experiência não exige o mesmo nível de processamento em todos os dispositivos.

### Etapa 7 — Acessibilidade e desempenho

Objetivo: garantir que a experiência seja utilizável e eficiente.

Tarefas:

- [ ] Respeitar `prefers-reduced-motion`.
- [ ] Criar alternativa visual para ausência de WebGL.
- [ ] Garantir que o canvas não bloqueie interações.
- [ ] Controlar consumo de memória.
- [ ] Liberar recursos gráficos quando necessário.
- [ ] Avaliar FPS.
- [ ] Observar consumo de CPU e GPU.
- [ ] Avaliar impacto no carregamento inicial.
- [ ] Ajustar a complexidade da cena.

Critérios de conclusão:

- Movimento reduzido é respeitado.
- O portfólio continua funcional sem WebGL.
- Não existem bloqueios de navegação.
- O consumo de recursos foi avaliado.
- Os resultados dos testes foram registrados.

### Etapa 8 — Testes e finalização

Objetivo: validar a experiência integrada.

Tarefas:

- [ ] Testar todas as seções.
- [ ] Testar a rolagem completa.
- [ ] Testar a navegação por âncoras.
- [ ] Testar o retorno da rolagem.
- [ ] Testar o menu.
- [ ] Testar o seletor de conhecimentos.
- [ ] Testar diferentes resoluções.
- [ ] Testar movimento reduzido.
- [ ] Testar fallback.
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
- O movimento reduzido deverá simplificar ou desativar animações.
- A ausência de WebGL não poderá impedir a navegação.

### 8.2. Desempenho

- Evitar geometrias desnecessariamente complexas.
- Evitar quantidade excessiva de partículas.
- Evitar criar novos objetos continuamente durante a animação.
- Controlar a frequência de atualização.
- Ajustar a resolução do renderizador conforme o dispositivo.
- Liberar geometrias, materiais e texturas quando deixarem de ser utilizados.
- Avaliar o impacto da cena no carregamento inicial.

---

## 9. Regras de preservação

Durante todo o desenvolvimento:

1. Preservar HTML, CSS e JavaScript como tecnologias principais.
2. Não migrar o projeto para frameworks de interface.
3. Preservar a estrutura atual das seções.
4. Preservar IDs e classes utilizados pela interface.
5. Não remover funcionalidades existentes.
6. Não alterar conteúdos sem necessidade ou decisão aprovada.
7. Não criar novas seções apenas para acomodar a experiência 3D.
8. Não substituir arquivos inteiros quando uma alteração localizada resolver.
9. Não implementar etapas futuras antes da validação da etapa atual.
10. Não instalar dependências sem justificativa técnica.
11. Não deixar a experiência 3D impedir o funcionamento do portfólio.
12. Não marcar etapas como concluídas sem implementação e testes.

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
| Biblioteca de renderização | Pendente |
| Estratégia de composição da cena | Pendente |
| Posicionamento da cena | Pendente |
| Integração com scroll | Pendente |
| Estratégia de carregamento | Pendente |
| Fallback sem WebGL | Pendente |
| Otimização para dispositivos móveis | Pendente |

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