import type { PortfolioContent } from "./schema";

export const enIntl: PortfolioContent = {
    locale: "en-intl",
    languageTag: "en",
    meta: {
        title: "Matheus Cristian — Backend, systems and applied AI",
        description:
            "Portfolio of Matheus Cristian, a software developer in training focused on backend development, systems, automation and practical AI tooling.",
    },
    redirect: {
        title: "Matheus Cristian — Portfolio",
        message: "Choosing a language based on your browser preference…",
        linkLabel: "Continue in English",
    },
    navigation: [
        { label: "Work", href: "#work" },
        { label: "About", href: "#about" },
        { label: "Trajectory", href: "#trajectory" },
        { label: "Contact", href: "#contact" },
    ],
    labels: {
        skipToContent: "Skip to content",
        primaryNavigation: "Primary navigation",
        availableForOpportunities: "Open to learning opportunities",
        heroCommand: "whoami",
        selectedWork: "Selected work",
        sourceCode: "View source",
        capabilities: "Capabilities",
        trajectory: "Technical trajectory",
        achievements: "Achievements",
        moreExperiments: "More experiments",
        capabilitiesDescription:
            "Tools I have used to build, test and connect real projects.",
        experimentsDescription:
            "Smaller tools, focused experiments and the foundations behind the recent work.",
        contact: "Contact",
        portraitAlt: "Portrait of Matheus Cristian",
        openExternal: "opens in a new tab",
        technologyStack: "Technology stack",
    },
    hero: {
        prompt: "matheus@workstation:~/portfolio",
        monogram: "MC",
        name: "Matheus Cristian",
        role: "Software developer in training · backend / systems / applied AI",
        statement:
            "I build tools that make technical workflows easier to understand and repeat.",
        supportingStatement:
            "Interested in what happens below the framework—from APIs and containers to media pipelines and agent tools.",
        status: "Learning in public. Building with intent.",
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
        signal: "OBI — silver 2022 · bronze 2023",
    },
    atlas: {
        eyebrow: "System atlas / field notes",
        statement: "Build it. Test the edges. Understand the system.",
        supportingStatement:
            "A path from algorithmic thinking to tools that connect software with real technical workflows.",
    },
    projects: {
        title: "Selected work",
        introduction:
            "Projects chosen for the questions they explore—not for a stack checklist.",
        items: [
            {
                name: "spawnbx",
                eyebrow: "Developer tooling · Rust",
                summary:
                    "Project-scoped development containers that start where the code lives.",
                details:
                    "A Rust CLI for isolated Linux environments with persistent state, host UID/GID alignment, configurable packages and optional desktop integrations.",
                stack: ["Rust", "Linux", "Containers", "Nix", "CLI"],
                repositoryUrl: "https://github.com/nthcristian/spawnbx",
                visual: "container",
            },
            {
                name: "openrouter_mcp",
                eyebrow: "Agent tooling · Rust",
                summary: "Giving agents structured access to generated media.",
                details:
                    "A Rust MCP server that validates local assets, polls media-generation jobs, downloads results and exposes them as reusable agent resources.",
                stack: ["Rust", "MCP", "OpenRouter", "Async APIs", "TTS"],
                repositoryUrl: "https://github.com/nthcristian/openrouter_mcp",
                visual: "mcp",
            },
            {
                name: "ReviewDB",
                eyebrow: "Full-stack application",
                summary:
                    "A review catalog where product concerns meet backend fundamentals.",
                details:
                    "A full-stack title catalog with JWT authentication, ownership-based authorization, relational persistence, search and a separate Next.js interface.",
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
                eyebrow: "SENAI capstone project",
                summary:
                    "A study and personal organization tool built from a real need.",
                details:
                    "My Technical Degree capstone: a web application for organizing routines and study activities with an interface designed for planning.",
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
        eyebrow: "Working model",
        title: "Learn the abstraction. Then find its edges.",
        paragraphs: [
            "I am a Software Engineering student at UNA and a Systems Development technician from SENAI. Before frameworks became familiar, programming competitions taught me to decompose problems, look for edge cases and keep going until a solution holds.",
            "I learn by building across layers: a TCP conversation, a database model, a container boundary, an external API, a media pipeline. The constant is not one language—it is the urge to understand the system well enough to make a useful tool.",
        ],
        note: "Recent work: Rust tooling, APIs, developer environments and AI-assisted media workflows.",
    },
    capabilities: [
        {
            title: "Backend & APIs",
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
            title: "Systems & tools",
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
            title: "AI & automation",
            items: [
                "OpenRouter",
                "LLMs",
                "MCP",
                "TTS",
                "Video generation",
                "Prompt pipelines",
            ],
        },
        {
            title: "Web & product",
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
            title: "Fundamentals & curiosity",
            description:
                "OBI problem solving, terminal games and a Kotlin TCP chat built to understand client-server communication.",
        },
        {
            period: "02",
            title: "Applications",
            description:
                "A Ktor URL shortener, the Metodiza capstone and ReviewDB connected interfaces to APIs, databases and authorization.",
        },
        {
            period: "03",
            title: "Concrete tooling",
            description:
                "Thermal-label utilities and spawnbx shifted the focus toward hardware, Linux, containers and reproducible development.",
        },
        {
            period: "04",
            title: "Applied AI & automation",
            description:
                "News digests, marketplace workflows, video pipelines and MCP tooling explored practical, human-reviewed agent systems.",
        },
    ],
    achievements: [
        {
            value: "2022",
            label: "OBI silver",
            detail: "Brazilian Olympiad in Informatics",
        },
        { value: "2023", label: "OBI bronze", detail: "Programming level 1" },
        {
            value: "SENAI",
            label: "Systems Development",
            detail: "Technical degree completed",
        },
        {
            value: "UNA",
            label: "Software Engineering",
            detail: "Bachelor's degree in progress",
        },
    ],
    experiments: [
        {
            name: "zplrdr",
            eyebrow: "Java · thermal printing",
            summary:
                "A modular CLI and GUI for label conversion and direct printing.",
            details: "ZPL to PDF, TCP/IP and USB printing.",
            stack: ["Java", "Gradle", "TCP/IP"],
            repositoryUrl: "https://github.com/nthcristian/zplrdr",
        },
        {
            name: "Marketplace Agent",
            eyebrow: "Rust · AI agents",
            summary:
                "Human-approved product listing generation in deliberate stages.",
            details: "Keywords, titles and descriptions with feedback loops.",
            stack: ["Rust", "OpenAI", "DeepSeek"],
            repositoryUrl: "https://github.com/nthcristian/marketplace_agent",
        },
        {
            name: "AINews",
            eyebrow: "TypeScript · automation",
            summary: "An AI-curated RSS digest distributed through Telegram.",
            details: "Categorization, summarization and scheduled delivery.",
            stack: ["Bun", "LLM", "Telegram"],
            repositoryUrl: "https://github.com/nthcristian/daily_news_ai",
        },
        {
            name: "Upscale Pipeline",
            eyebrow: "Rust · media",
            summary:
                "Programmatic video generation and optional ffmpeg processing.",
            details: "Async API jobs, asset uploads and media handling.",
            stack: ["Rust", "OpenRouter", "ffmpeg"],
            repositoryUrl: "https://github.com/nthcristian/upscale_pipeline",
        },
        {
            name: "UShort",
            eyebrow: "Kotlin · API",
            summary:
                "A URL shortener with Ktor, SQLite and an Astro interface.",
            details: "A compact JVM backend experiment.",
            stack: ["Kotlin", "Ktor", "SQLite"],
            repositoryUrl: "https://github.com/nthcristian/url_shortener",
        },
        {
            name: "ZPL Converter",
            eyebrow: "Go · desktop",
            summary: "Batch label conversion with a native desktop workflow.",
            details: "Presets, drag-and-drop and Labelary integration.",
            stack: ["Go", "Fyne", "Desktop"],
            repositoryUrl: "https://github.com/nthcristian/zpl_converter",
        },
        {
            name: "Mini Engine",
            eyebrow: "Rust · terminal",
            summary: "A small terminal 2D engine with Snake as an example.",
            details: "Input, rendering and update loops.",
            stack: ["Rust", "Crossterm"],
            repositoryUrl: "https://github.com/nthcristian/mini_engine",
        },
        {
            name: "TCP Chat",
            eyebrow: "Kotlin · networking",
            summary: "A small client-server chat built over TCP sockets.",
            details: "A study in lower-level communication.",
            stack: ["Kotlin", "TCP/IP"],
            repositoryUrl: "https://github.com/nthcristian/tcp_chat",
        },
    ],
    footer: {
        eyebrow: "Contact",
        title: "Let’s talk about useful problems.",
        invitation:
            "I’m looking for opportunities to keep learning, take responsibility and work on real software problems.",
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
                label: "Email",
                href: "mailto:matheuscristianrg@gmail.com",
                detail: "matheuscristianrg@gmail.com",
            },
        ],
        closing: "Built with Astro. Kept intentionally static.",
    },
};
