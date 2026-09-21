import type { PortfolioContent } from "./schema";

export const ptBr: PortfolioContent = {
    locale: "pt-br",
    languageTag: "pt-BR",
    meta: {
        title: "Matheus Cristian — Backend, sistemas e IA aplicada",
        description:
            "Portfólio de Matheus Cristian, desenvolvedor de software em formação com foco em backend, sistemas, automação e ferramentas de IA aplicada.",
    },
    redirect: {
        title: "Matheus Cristian — Portfólio",
        message: "Escolhendo um idioma pela preferência do seu navegador…",
        linkLabel: "Continuar em português",
    },
    navigation: [
        { label: "Projetos", href: "#projetos" },
        { label: "Sobre", href: "#sobre" },
        { label: "Trajetória", href: "#trajetoria" },
        { label: "Contato", href: "#contato" },
    ],
    labels: {
        skipToContent: "Pular para o conteúdo",
        primaryNavigation: "Navegação principal",
        availableForOpportunities: "Aberto a oportunidades de aprendizado",
        heroCommand: "quem-sou",
        selectedWork: "Projetos selecionados",
        sourceCode: "Ver código-fonte",
        capabilities: "Competências",
        trajectory: "Trajetória técnica",
        achievements: "Conquistas",
        moreExperiments: "Mais experimentos",
        capabilitiesDescription:
            "Ferramentas que já usei para construir, testar e conectar projetos reais.",
        experimentsDescription:
            "Ferramentas menores, experimentos focados e fundamentos por trás do trabalho recente.",
        contact: "Contato",
        portraitAlt: "Retrato de Matheus Cristian",
        openExternal: "abre em uma nova aba",
        technologyStack: "Tecnologias utilizadas",
    },
    hero: {
        prompt: "matheus@workstation:~/portfolio",
        monogram: "MC",
        name: "Matheus Cristian",
        role: "Desenvolvedor de software em formação · backend / sistemas / IA aplicada",
        statement:
            "Construo ferramentas que tornam fluxos técnicos mais fáceis de entender e repetir.",
        supportingStatement:
            "Tenho interesse no que acontece por baixo do framework — de APIs e containers a pipelines de mídia e ferramentas para agentes.",
        status: "Aprendendo em público. Construindo com intenção.",
        actions: [
            {
                label: "GitHub",
                href: "https://github.com/nthcristian",
                detail: "github.com/nthcristian",
            },
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/matheus-cristian/",
                detail: "linkedin.com/in/matheus-cristian",
            },
        ],
        signal: "OBI — prata 2022 · bronze 2023",
    },
    atlas: {
        eyebrow: "Atlas de sistemas / notas de campo",
        statement: "Construa. Teste as bordas. Entenda o sistema.",
        supportingStatement:
            "Um caminho do raciocínio algorítmico até ferramentas que conectam software a fluxos técnicos reais.",
    },
    projects: {
        title: "Projetos selecionados",
        introduction:
            "Projetos escolhidos pelas perguntas que exploram — não por uma lista de tecnologias.",
        items: [
            {
                name: "spawnbx",
                eyebrow: "Ferramentas de desenvolvimento · Rust",
                summary:
                    "Ambientes de desenvolvimento por projeto que começam onde o código vive.",
                details:
                    "Uma CLI em Rust para ambientes Linux isolados, com estado persistente, alinhamento de UID/GID do host, pacotes configuráveis e integrações opcionais com o desktop.",
                stack: ["Rust", "Linux", "Containers", "Nix", "CLI"],
                repositoryUrl: "https://github.com/nthcristian/spawnbx",
                visual: "container",
            },
            {
                name: "openrouter_mcp",
                eyebrow: "Ferramentas para agentes · Rust",
                summary: "Dando a agentes acesso estruturado a mídia gerada.",
                details:
                    "Um servidor MCP em Rust que valida assets locais, acompanha tarefas de geração, baixa resultados e os expõe como recursos reutilizáveis por agentes.",
                stack: ["Rust", "MCP", "OpenRouter", "APIs assíncronas", "TTS"],
                repositoryUrl: "https://github.com/nthcristian/openrouter_mcp",
                visual: "mcp",
            },
            {
                name: "ReviewDB",
                eyebrow: "Aplicação full-stack",
                summary:
                    "Um catálogo de avaliações que conecta produto a fundamentos de backend.",
                details:
                    "Um catálogo de títulos full-stack com autenticação JWT, autorização baseada em propriedade, persistência relacional, busca e uma interface Next.js separada.",
                stack: [
                    "TypeScript",
                    "Bun",
                    "Elysia",
                    "Prisma",
                    "PostgreSQL",
                    "Next.js",
                ],
                repositoryUrl: "https://github.com/nthcristian/review_db",
                visual: "review",
            },
            {
                name: "Metodiza",
                eyebrow: "TCC do SENAI",
                summary:
                    "Uma ferramenta de estudos e organização pessoal criada a partir de uma necessidade real.",
                details:
                    "Meu TCC do curso técnico: uma aplicação web para organizar rotinas e atividades de estudo, com uma interface feita para planejamento.",
                stack: [
                    "Next.js",
                    "TypeScript",
                    "Tailwind",
                    "MongoDB",
                    "Firebase",
                ],
                repositoryUrl: "https://github.com/matheuscristian/metodiza",
                visual: "planner",
            },
        ],
    },
    about: {
        eyebrow: "Forma de trabalhar",
        title: "Entenda a abstração. Depois encontre suas bordas.",
        paragraphs: [
            "Sou estudante de Engenharia de Software na UNA e técnico em Desenvolvimento de Sistemas pelo SENAI. Antes de frameworks serem familiares, competições de programação me ensinaram a decompor problemas, procurar casos-limite e insistir até a solução se sustentar.",
            "Aprendo construindo entre camadas: uma conversa TCP, um modelo de banco, uma fronteira de container, uma API externa, um pipeline de mídia. A constante não é uma linguagem; é a vontade de entender bem o sistema para criar uma ferramenta útil.",
        ],
        note: "Trabalho recente: ferramentas em Rust, APIs, ambientes de desenvolvimento e fluxos de mídia com IA.",
    },
    capabilities: [
        {
            title: "Backend e APIs",
            items: [
                "Rust",
                "TypeScript",
                "Kotlin / Ktor",
                "Java",
                "REST",
                "JWT",
                "PostgreSQL",
            ],
        },
        {
            title: "Sistemas e ferramentas",
            items: [
                "Linux",
                "Docker / Podman",
                "Nix",
                "CLI",
                "TCP/IP",
                "GitHub Actions",
            ],
        },
        {
            title: "IA e automação",
            items: [
                "OpenRouter",
                "LLMs",
                "MCP",
                "TTS",
                "Geração de vídeo",
                "Pipelines de prompt",
            ],
        },
        {
            title: "Web e produto",
            items: [
                "React",
                "Next.js",
                "Astro",
                "Tailwind",
                "SQLite",
                "Prisma",
            ],
        },
    ],
    timeline: [
        {
            period: "01",
            title: "Fundamentos e curiosidade",
            description:
                "Problemas da OBI, jogos de terminal e um chat TCP em Kotlin para entender comunicação cliente-servidor.",
        },
        {
            period: "02",
            title: "Aplicações",
            description:
                "Um encurtador com Ktor, o TCC Metodiza e o ReviewDB conectaram interfaces a APIs, bancos de dados e autorização.",
        },
        {
            period: "03",
            title: "Ferramentas concretas",
            description:
                "Utilitários de etiquetas térmicas e o spawnbx levaram o foco a hardware, Linux, containers e desenvolvimento reproduzível.",
        },
        {
            period: "04",
            title: "IA aplicada e automação",
            description:
                "Digests de notícias, fluxos para marketplaces, pipelines de vídeo e ferramentas MCP exploraram sistemas de agentes com revisão humana.",
        },
    ],
    achievements: [
        {
            value: "2022",
            label: "Prata na OBI",
            detail: "Olimpíada Brasileira de Informática",
        },
        {
            value: "2023",
            label: "Bronze na OBI",
            detail: "Nível de programação 1",
        },
        {
            value: "SENAI",
            label: "Desenvolvimento de Sistemas",
            detail: "Formação técnica concluída",
        },
        {
            value: "UNA",
            label: "Engenharia de Software",
            detail: "Bacharelado em andamento",
        },
    ],
    experiments: [
        {
            name: "zplrdr",
            eyebrow: "Java · impressão térmica",
            summary:
                "Uma CLI e GUI modular para conversão e impressão de etiquetas.",
            details: "ZPL para PDF, impressão TCP/IP e USB.",
            stack: ["Java", "Gradle", "TCP/IP"],
            repositoryUrl: "https://github.com/nthcristian/zplrdr",
        },
        {
            name: "Marketplace Agent",
            eyebrow: "Rust · agentes de IA",
            summary:
                "Geração de anúncios com aprovação humana em etapas deliberadas.",
            details:
                "Palavras-chave, títulos e descrições com ciclos de feedback.",
            stack: ["Rust", "OpenAI", "DeepSeek"],
            repositoryUrl: "https://github.com/nthcristian/marketplace_agent",
        },
        {
            name: "AINews",
            eyebrow: "TypeScript · automação",
            summary:
                "Um digest de RSS selecionado por IA e distribuído pelo Telegram.",
            details: "Categorização, sumarização e entrega agendada.",
            stack: ["Bun", "LLM", "Telegram"],
            repositoryUrl: "https://github.com/nthcristian/daily_news_ai",
        },
        {
            name: "Upscale Pipeline",
            eyebrow: "Rust · mídia",
            summary:
                "Geração programática de vídeo e processamento opcional com ffmpeg.",
            details:
                "Tarefas assíncronas, upload de assets e processamento de mídia.",
            stack: ["Rust", "OpenRouter", "ffmpeg"],
            repositoryUrl: "https://github.com/nthcristian/upscale_pipeline",
        },
        {
            name: "UShort",
            eyebrow: "Kotlin · API",
            summary:
                "Um encurtador de URLs com Ktor, SQLite e interface em Astro.",
            details: "Um experimento compacto de backend JVM.",
            stack: ["Kotlin", "Ktor", "SQLite"],
            repositoryUrl: "https://github.com/nthcristian/url_shortener",
        },
        {
            name: "ZPL Converter",
            eyebrow: "Go · desktop",
            summary:
                "Conversão em lote de etiquetas em um fluxo desktop nativo.",
            details: "Presets, arrastar-e-soltar e integração com Labelary.",
            stack: ["Go", "Fyne", "Desktop"],
            repositoryUrl: "https://github.com/nthcristian/zpl_converter",
        },
        {
            name: "Mini Engine",
            eyebrow: "Rust · terminal",
            summary: "Um pequeno motor 2D de terminal com Snake como exemplo.",
            details: "Entrada, renderização e loops de atualização.",
            stack: ["Rust", "Crossterm"],
            repositoryUrl: "https://github.com/nthcristian/mini_engine",
        },
        {
            name: "TCP Chat",
            eyebrow: "Kotlin · redes",
            summary:
                "Um pequeno chat cliente-servidor criado sobre sockets TCP.",
            details: "Um estudo de comunicação em baixo nível.",
            stack: ["Kotlin", "TCP/IP"],
            repositoryUrl: "https://github.com/nthcristian/tcp_chat",
        },
    ],
    footer: {
        eyebrow: "Contato",
        title: "Vamos conversar sobre problemas úteis.",
        invitation:
            "Procuro oportunidades para continuar aprendendo, assumir responsabilidade e trabalhar em problemas reais de software.",
        links: [
            {
                label: "GitHub",
                href: "https://github.com/nthcristian",
                detail: "@nthcristian",
            },
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/matheus-cristian/",
                detail: "matheus-cristian",
            },
            {
                label: "E-mail",
                href: "mailto:matheuscristianrg@gmail.com",
                detail: "matheuscristianrg@gmail.com",
            },
        ],
        closing: "Feito com Astro. Intencionalmente estático.",
    },
};
