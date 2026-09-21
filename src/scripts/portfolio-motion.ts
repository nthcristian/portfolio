import { getProjectSpotlightPosition } from "./project-spotlight";

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
);

if (!prefersReducedMotion.matches && "IntersectionObserver" in window) {
    document.documentElement.classList.add("motion-ready");

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -6%" },
    );

    document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((element) => revealObserver.observe(element));

    const navigationItems = Array.from(
        document.querySelectorAll<HTMLAnchorElement>("[data-section-nav]"),
    );
    const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-section]"),
    );
    const activeSections = new Set<HTMLElement>();
    const updateActiveNavigation = () => {
        const activeSection = sections.find((section) =>
            activeSections.has(section),
        );
        if (!activeSection) return;

        navigationItems.forEach((item) => {
            const isCurrent = item.hash === `#${activeSection.id}`;
            item.classList.toggle("is-active", isCurrent);
            item.toggleAttribute("aria-current", isCurrent);
        });
    };
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const section = entry.target as HTMLElement;
                if (entry.isIntersecting) {
                    activeSections.add(section);
                } else {
                    activeSections.delete(section);
                }
            });

            updateActiveNavigation();
        },
        { rootMargin: "-12% 0px -70%", threshold: 0 },
    );

    sections.forEach((section) => sectionObserver.observe(section));

    const chapters = Array.from(
        document.querySelectorAll<HTMLElement>("[data-project-chapter]"),
    );
    const chapterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) =>
                entry.target.classList.toggle(
                    "is-active",
                    entry.isIntersecting,
                ),
            );
        },
        { threshold: 0.3 },
    );

    chapters.forEach((chapter) => chapterObserver.observe(chapter));

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        chapters.forEach((chapter) => {
            const visual = chapter.querySelector<HTMLElement>(
                ".atlas-chapter-visual-wrap",
            );
            if (!visual) return;

            visual.addEventListener("pointermove", (event) => {
                const { x, y } = getProjectSpotlightPosition(
                    visual.getBoundingClientRect(),
                    event,
                );

                chapter.style.setProperty("--spotlight-x", `${x}%`);
                chapter.style.setProperty("--spotlight-y", `${y}%`);
                chapter.classList.add("is-pointing");
            });

            visual.addEventListener("pointerleave", () => {
                chapter.classList.remove("is-pointing");
            });
        });
    }

    const stationObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle(
                    "is-active",
                    entry.isIntersecting,
                );
            });
        },
        { rootMargin: "-18% 0px -55%", threshold: 0 },
    );

    document
        .querySelectorAll<HTMLElement>("[data-evolution-station]")
        .forEach((station) => stationObserver.observe(station));
}
