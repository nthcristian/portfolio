export type Locale = "en-intl" | "pt-br";

export type ProjectVisual = "container" | "mcp" | "review" | "planner";

export interface Project {
    readonly name: string;
    readonly eyebrow: string;
    readonly summary: string;
    readonly details: string;
    readonly stack: readonly string[];
    readonly repositoryUrl: string;
    readonly visual?: ProjectVisual;
}

export interface CapabilityGroup {
    readonly title: string;
    readonly items: readonly string[];
}

export interface TimelineItem {
    readonly period: string;
    readonly title: string;
    readonly description: string;
}

export interface Achievement {
    readonly value: string;
    readonly label: string;
    readonly detail: string;
}

export interface ContactLink {
    readonly label: string;
    readonly href: string;
    readonly detail: string;
}

export interface PortfolioContent {
    readonly locale: Locale;
    readonly languageTag: string;
    readonly meta: {
        readonly title: string;
        readonly description: string;
    };
    readonly redirect: {
        readonly title: string;
        readonly message: string;
        readonly linkLabel: string;
    };
    readonly navigation: readonly {
        readonly label: string;
        readonly href: string;
    }[];
    readonly labels: {
        readonly skipToContent: string;
        readonly primaryNavigation: string;
        readonly availableForOpportunities: string;
        readonly heroCommand: string;
        readonly selectedWork: string;
        readonly sourceCode: string;
        readonly capabilities: string;
        readonly trajectory: string;
        readonly achievements: string;
        readonly moreExperiments: string;
        readonly capabilitiesDescription: string;
        readonly experimentsDescription: string;
        readonly contact: string;
        readonly portraitAlt: string;
        readonly openExternal: string;
        readonly technologyStack: string;
    };
    readonly hero: {
        readonly prompt: string;
        readonly monogram: string;
        readonly name: string;
        readonly role: string;
        readonly statement: string;
        readonly supportingStatement: string;
        readonly status: string;
        readonly actions: readonly ContactLink[];
        readonly signal: string;
    };
    readonly atlas: {
        readonly eyebrow: string;
        readonly statement: string;
        readonly supportingStatement: string;
    };
    readonly projects: {
        readonly title: string;
        readonly introduction: string;
        readonly items: readonly Project[];
    };
    readonly about: {
        readonly eyebrow: string;
        readonly title: string;
        readonly paragraphs: readonly string[];
        readonly note: string;
    };
    readonly capabilities: readonly CapabilityGroup[];
    readonly timeline: readonly TimelineItem[];
    readonly achievements: readonly Achievement[];
    readonly experiments: readonly Project[];
    readonly footer: {
        readonly eyebrow: string;
        readonly title: string;
        readonly invitation: string;
        readonly links: readonly ContactLink[];
        readonly closing: string;
    };
}
