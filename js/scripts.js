const portfolioData = window.PORTFOLIO_DATA;
const basePath = document.body.dataset.base || "./";

function toSitePath(path) {
    if (!path || /^https?:\/\//.test(path) || path.startsWith("mailto:") || path.startsWith("#")) {
        return path;
    }

    return `${basePath}${path.replace(/^\/+/, "")}`;
}

const longDateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
});

function formatDate(dateString) {
    return longDateFormatter.format(new Date(`${dateString}T12:00:00Z`));
}

function createProjectCard(project) {
    const repoButton = project.repoUrl
        ? `<a class="button button-tertiary" href="${project.repoUrl}" target="_blank" rel="noreferrer">Repository</a>`
        : "";

    return `
        <article class="project-card reveal" data-tone="${project.tone}">
            <div class="card-topline">
                <span class="chip">${project.category}</span>
                <span class="chip">${project.visibility}</span>
                <span class="chip">${project.language}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.cardSummary}</p>
            <div class="project-card-actions">
                <a class="button button-primary" href="${toSitePath(`projects/${project.slug}/`)}">Open project page</a>
                ${repoButton}
            </div>
            <div class="project-card-footer">
                <span class="project-card-date">Last updated ${formatDate(project.updatedAt)}</span>
                <a class="project-card-link" href="${toSitePath(`projects/${project.slug}/`)}">View details</a>
            </div>
        </article>
    `;
}

function renderHomePage() {
    const projectGrid = document.getElementById("project-grid");

    if (!projectGrid) {
        return;
    }

    projectGrid.innerHTML = portfolioData.projects.map(createProjectCard).join("");

    const projectCount = document.getElementById("project-count");
    const recentYear = document.getElementById("recent-year");

    if (projectCount) {
        projectCount.textContent = String(portfolioData.projects.length);
    }

    if (recentYear) {
        const mostRecent = portfolioData.projects
            .map((project) => project.updatedAt)
            .sort()
            .at(-1)
            .slice(0, 4);
        recentYear.textContent = mostRecent;
    }
}

function renderFacts(project) {
    return project.facts
        .map(
            (fact) => `
                <article class="fact-card">
                    <strong>${fact.label}</strong>
                    <span>${fact.value}</span>
                </article>
            `
        )
        .join("");
}

function renderHighlights(project) {
    return project.highlights
        .map(
            (highlight) => `
                <article class="highlight-card">
                    <strong>Highlight</strong>
                    <span>${highlight}</span>
                </article>
            `
        )
        .join("");
}

function renderLinks(project) {
    return project.links
        .map((link) => {
            const external = link.external ? ` target="_blank" rel="noreferrer"` : "";
            return `<a class="button ${link.primary ? "button-primary" : "button-secondary"}" href="${toSitePath(link.href)}"${external}>${link.label}</a>`;
        })
        .join("");
}

function renderGallery(project) {
    if (!project.gallery || !project.gallery.length) {
        return "";
    }

    return `
        <section class="project-section reveal">
            <p class="section-label">Gallery</p>
            <h2>Visual snapshots</h2>
            <div class="gallery-grid">
                ${project.gallery
                    .map(
                        (item) => `
                            <figure class="gallery-card">
                                <img src="${toSitePath(item.src)}" alt="${item.alt}" />
                                <figcaption>${item.caption}</figcaption>
                            </figure>
                        `
                    )
                    .join("")}
            </div>
        </section>
    `;
}

function renderProjectPage() {
    const projectPage = document.getElementById("project-page");

    if (!projectPage) {
        return;
    }

    const { project: slug } = document.body.dataset;
    const project = portfolioData.projects.find((entry) => entry.slug === slug);

    if (!project) {
        projectPage.innerHTML = `
            <div class="empty-state">
                <h1>Project not found</h1>
                <p>The requested project page could not be rendered.</p>
            </div>
        `;
        return;
    }

    projectPage.innerHTML = `
        <section class="project-banner reveal" data-tone="${project.tone}">
            <p class="eyebrow">${project.category}</p>
            <div class="project-head">
                <div>
                    <h1>${project.title}</h1>
                    <p class="project-summary">${project.heroSummary}</p>
                </div>
                <div class="project-actions">
                    ${renderLinks(project)}
                </div>
            </div>
            <div class="project-meta">
                <span class="chip">${project.visibility}</span>
                <span class="chip">${project.language}</span>
                <span class="chip">Last updated ${formatDate(project.updatedAt)}</span>
            </div>
        </section>

        <section class="project-section project-overview reveal">
            <div class="project-copy">
                <p class="section-label">Overview</p>
                <h2>What this project is about</h2>
                ${project.story.map((paragraph) => `<p>${paragraph}</p>`).join("")}
            </div>
            <div class="facts-grid">
                ${renderFacts(project)}
            </div>
        </section>

        <section class="project-section reveal">
            <p class="section-label">Highlights</p>
            <h2>Notable scope inside the repo</h2>
            <div class="highlight-grid">
                ${renderHighlights(project)}
            </div>
        </section>

        <section class="project-section reveal">
            <p class="section-label">Stack</p>
            <h2>Tools and technologies</h2>
            <div class="stack-list">
                ${project.stack.map((item) => `<span class="chip">${item}</span>`).join("")}
            </div>
        </section>

        ${renderGallery(project)}
    `;
}

function setupRevealAnimations() {
    const revealElements = document.querySelectorAll(".reveal");

    if (!revealElements.length) {
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
        }
    );

    revealElements.forEach((element) => observer.observe(element));
}

function initializeSharedUi() {
    const year = document.getElementById("year");

    if (year) {
        year.textContent = String(new Date().getFullYear());
    }
}

window.addEventListener("DOMContentLoaded", () => {
    renderHomePage();
    renderProjectPage();
    initializeSharedUi();
    setupRevealAnimations();
});
