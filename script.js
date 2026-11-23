const learningAreas = [
  {
    title: "Frontend",
    icon: "▤",
    skills: [
      {
        name: "HTML",
        summary:
          "Linguagem de marcação que organiza o conteúdo de uma página: títulos, textos, links, imagens e formulários.",
        project:
          "Project Wheat — estrutura das seções e navegação do portfólio.",
        href: "#inicio",
      },
      {
        name: "CSS",
        summary:
          "Define a aparência das páginas, incluindo cores, tipografia, espaçamento e adaptação a diferentes telas.",
        project:
          "Project Wheat — identidade visual dourada e layouts para telas menores.",
        href: "#inicio",
      },
      {
        name: "JavaScript",
        summary:
          "Linguagem que adiciona lógica e interatividade às páginas, respondendo às ações de quem navega.",
        project:
          "Project Wheat — seleção de áreas de estudo e menu para celular.",
        href: "#aprendendo",
      },
      {
        name: "React",
        summary:
          "Biblioteca para construir interfaces com componentes reutilizáveis e atualizar a tela quando os dados mudam.",
        project:
          "Project Wheat — versão online com seleção de habilidades em componentes.",
        href: "#aprendendo",
      },
    ],
  },
  {
    title: "Backend",
    icon: "◫",
    skills: [
      {
        name: "Node.js",
        summary:
          "Ambiente que executa JavaScript fora do navegador, usado para construir serviços e aplicações no servidor.",
      },
      {
        name: "APIs",
        summary:
          "Interfaces que permitem a comunicação entre sistemas, com solicitações e respostas de dados.",
      },
      {
        name: "Banco de Dados",
        summary:
          "Sistemas que organizam, armazenam e permitem consultar informações de uma aplicação.",
      },
    ],
  },
  {
    title: "Cloud",
    icon: "☁",
    skills: [
      {
        name: "Azure",
        summary:
          "Plataforma de nuvem da Microsoft com serviços para hospedar aplicações, armazenar dados e gerenciar infraestrutura.",
      },
    ],
  },
  {
    title: "Inteligência artificial",
    icon: "✦",
    skills: [
      {
        name: "OpenAI",
        summary:
          "Ferramentas e modelos de inteligência artificial que podem ser integrados a aplicações para trabalhar com texto e outros conteúdos.",
      },
    ],
  },
  {
    title: "Automação",
    icon: "⌘",
    skills: [
      {
        name: "Scripts",
        summary:
          "Pequenos programas que executam sequências de tarefas para reduzir trabalho manual e repetitivo.",
      },
      {
        name: "Fluxos",
        summary:
          "Sequências de etapas, condições e ações que organizam a execução automática de um processo.",
      },
      {
        name: "Integrações",
        summary:
          "Conexões entre ferramentas e serviços para trocar informações e executar tarefas em conjunto.",
      },
    ],
  },
];
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu");
function setMenu(open) {
  if (!menu || !menuToggle) return;
  menu.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "Fechar" : "Menu";
}
menuToggle?.addEventListener("click", () =>
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true"),
);
menu
  ?.querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", () => setMenu(false)));
const select = document.querySelector("#learning-area");
const summary = document.querySelector(".learn__summary");
const list = document.querySelector(".learn__list");
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}
function renderLearning() {
  const area = learningAreas.find((item) => item.title === select?.value);
  if (!area || !summary || !list) return;
  const skills = element("ul", "learn__skills");
  skills.setAttribute("aria-label", `Habilidades de ${area.title}`);
  area.skills.forEach((skill) => skills.append(element("li", "", skill.name)));
  summary.replaceChildren(element("h3", "", area.title), skills);
  list.setAttribute("aria-label", `Detalhes de ${area.title}`);
  list.replaceChildren(
    ...area.skills.map((skill) => {
      const card = element("article", "learn__card");
      card.setAttribute("aria-label", skill.name);
      const head = element("div", "learn__card-head");
      const name = element("div", "learn__card-name");
      const icon = element("span", "learn__icon", area.icon);
      icon.setAttribute("aria-hidden", "true");
      name.append(icon, element("h3", "learn__title", skill.name));
      head.append(name, element("span", "learn__status", "Em estudo"));
      const detail = element("dl", "learn__detail");
      const level = element("div", "");
      level.append(
        element("dt", "", "Meu nível"),
        element("dd", "", "A definir"),
      );
      const practice = element("div", "");
      const example = element("dd", "");
      if (skill.project && skill.href) {
        const link = element("a", "learn__project", skill.project + " ↗");
        link.href = skill.href;
        example.append(link);
      } else {
        example.textContent = "Projeto ainda não informado.";
      }
      practice.append(element("dt", "", "Na prática"), example);
      detail.append(level, practice);
      card.append(head, element("p", "card__text", skill.summary), detail);
      return card;
    }),
  );
}
select?.addEventListener("change", renderLearning);
renderLearning();
