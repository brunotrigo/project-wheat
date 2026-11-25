const areasDeAprendizagem = [
  {
    titulo: "Frontend",
    icone: "▤",
    habilidades: [
      {
        nome: "HTML",
        resumo:
          "Linguagem de marcação que organiza o conteúdo de uma página: títulos, textos, links, imagens e formulários.",
        projeto:
          "Project Wheat — estrutura das seções e navegação do portfólio.",
        endereco: "#inicio",
      },
      {
        nome: "CSS",
        resumo:
          "Define a aparência das páginas, incluindo cores, tipografia, espaçamento e adaptação a diferentes telas.",
        projeto:
          "Project Wheat — identidade visual dourada e layouts para telas menores.",
        endereco: "#inicio",
      },
      {
        nome: "JavaScript",
        resumo:
          "Linguagem que adiciona lógica e interatividade às páginas, respondendo às ações de quem navega.",
        projeto:
          "Project Wheat — seleção de áreas de estudo e menu para celular.",
        endereco: "#aprendendo",
      },
      {
        nome: "React",
        resumo:
          "Biblioteca para construir interfaces com componentes reutilizáveis e atualizar a tela quando os dados mudam.",
        projeto:
          "Project Wheat — versão online com seleção de habilidades em componentes.",
        endereco: "#aprendendo",
      },
    ],
  },
  {
    titulo: "Backend",
    icone: "◫",
    habilidades: [
      {
        nome: "Node.js",
        resumo:
          "Ambiente que executa JavaScript fora do navegador, usado para construir serviços e aplicações no servidor.",
      },
      {
        nome: "APIs",
        resumo:
          "Interfaces que permitem a comunicação entre sistemas, com solicitações e respostas de dados.",
      },
      {
        nome: "Banco de Dados",
        resumo:
          "Sistemas que organizam, armazenam e permitem consultar informações de uma aplicação.",
      },
    ],
  },
  {
    titulo: "Cloud",
    icone: "☁",
    habilidades: [
      {
        nome: "Azure",
        resumo:
          "Plataforma de nuvem da Microsoft com serviços para hospedar aplicações, armazenar dados e gerenciar infraestrutura.",
      },
    ],
  },
  {
    titulo: "Inteligência artificial",
    icone: "✦",
    habilidades: [
      {
        nome: "OpenAI",
        resumo:
          "Ferramentas e modelos de inteligência artificial que podem ser integrados a aplicações para trabalhar com texto e outros conteúdos.",
      },
    ],
  },
  {
    titulo: "Automação",
    icone: "⌘",
    habilidades: [
      {
        nome: "Scripts",
        resumo:
          "Pequenos programas que executam sequências de tarefas para reduzir trabalho manual e repetitivo.",
      },
      {
        nome: "Fluxos",
        resumo:
          "Sequências de etapas, condições e ações que organizam a execução automática de um processo.",
      },
      {
        nome: "Integrações",
        resumo:
          "Conexões entre ferramentas e serviços para trocar informações e executar tarefas em conjunto.",
      },
    ],
  },
];
const heroVideo = document.querySelector(".hero__video");
if (heroVideo) heroVideo.playbackRate = 0.65;

const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu");

function definirMenu(aberto) {
  if (!menu || !botaoMenu) return;
  menu.classList.toggle("is-open", aberto);
  botaoMenu.setAttribute("aria-expanded", String(aberto));
  botaoMenu.textContent = aberto ? "Fechar" : "Menu";
}

botaoMenu?.addEventListener("click", () =>
  definirMenu(botaoMenu.getAttribute("aria-expanded") !== "true"),
);

menu?.querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", () => definirMenu(false)));
const seletor = document.querySelector("#learning-area");
const resumo = document.querySelector(".learn__summary");
const lista = document.querySelector(".learn__list");
function criarElemento(tipoTag, nomeClasse, texto) {
  const elemento = document.createElement(tipoTag);
  if (nomeClasse) elemento.className = nomeClasse;
  if (texto) elemento.textContent = texto;
  return elemento;
}


function mostrarAprendizagem() {
  const area = areasDeAprendizagem.find((item) => item.titulo === seletor?.value);
  if (!area || !resumo || !lista) return;
  const habilidades = criarElemento("ul", "learn__skills");
  habilidades.setAttribute("aria-label", `Habilidades de ${area.titulo}`);
  area.habilidades.forEach((habilidade) =>
    habilidades.append(criarElemento("li", "", habilidade.nome)),
  );
  resumo.replaceChildren(criarElemento("h3", "", area.titulo), habilidades);
  lista.setAttribute("aria-label", `Detalhes de ${area.titulo}`);
  lista.replaceChildren(
    ...area.habilidades.map((habilidade) => {
      const card = criarElemento("article", "learn__card");
      card.setAttribute("aria-label", habilidade.nome);
      const cabecalho = criarElemento("div", "learn__card-head");
      const nome = criarElemento("div", "learn__card-name");
      const icone = criarElemento("span", "learn__icon", area.icone);
      icone.setAttribute("aria-hidden", "true");
      nome.append(icone, criarElemento("h3", "learn__title", habilidade.nome));
      cabecalho.append(nome, criarElemento("span", "learn__status", "Em estudo"));
      const detalhes = criarElemento("dl", "learn__detail");
      const nivel = criarElemento("div", "");
      nivel.append(
        criarElemento("dt", "", "Meu nível"),
        criarElemento("dd", "", "A definir"),
      );
      const pratica = criarElemento("div", "");
      const exemplo = criarElemento("dd", "");
      if (habilidade.projeto && habilidade.endereco) {
        const link = criarElemento("a", "learn__project", habilidade.projeto + " ↗");
        link.href = habilidade.endereco;
        exemplo.append(link);
      } else {
        exemplo.textContent = "Projeto ainda não informado.";
      }
      pratica.append(criarElemento("dt", "", "Na prática"), exemplo);
      detalhes.append(nivel, pratica);
      card.append(cabecalho, criarElemento("p", "card__text", habilidade.resumo), detalhes);
      return card;
    }),
  );
}
seletor?.addEventListener("change", mostrarAprendizagem);
mostrarAprendizagem();
