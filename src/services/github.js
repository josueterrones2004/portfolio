const GITHUB_USERNAME = "josueterrones2004";
const PORTFOLIO_TOPIC = "portfolio";

const CACHE_KEY = "portfolio_github_projects";
const CACHE_DURATION = 15 * 60 * 1000;

function getCachedProjects() {
  try {
    const cached = sessionStorage.getItem(
      CACHE_KEY,
    );

    if (!cached) {
      return null;
    }

    const parsed = JSON.parse(cached);

    if (
      !parsed.timestamp ||
      !Array.isArray(parsed.projects)
    ) {
      return null;
    }

    const expired =
      Date.now() - parsed.timestamp >
      CACHE_DURATION;

    if (expired) {
      sessionStorage.removeItem(
        CACHE_KEY,
      );

      return null;
    }

    return parsed.projects;
  } catch {
    return null;
  }
}

function saveProjectsToCache(projects) {
  try {
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        timestamp: Date.now(),
        projects,
      }),
    );
  } catch {
    // Cache is optional.
  }
}

function formatProjectName(name) {
  return name
    .split(/[-_]/)
    .filter(Boolean)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1),
    )
    .join(" ");
}

function getTechnologies(repo) {
  const technologies = [];

  if (repo.language) {
    technologies.push(repo.language);
  }

  for (const topic of repo.topics ?? []) {
    if (
      topic.toLowerCase() ===
      PORTFOLIO_TOPIC
    ) {
      continue;
    }

    technologies.push(
      formatProjectName(topic),
    );
  }

  return [...new Set(technologies)];
}

export async function getGithubProjects() {
  const cachedProjects =
    getCachedProjects();

  if (cachedProjects) {
    return cachedProjects;
  }

  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?type=owner&sort=updated&direction=desc&per_page=100`,
  );

  if (!response.ok) {
    throw new Error(
      "Could not load projects from GitHub.",
    );
  }

  const repositories =
    await response.json();

  const projects = repositories
    .filter(
      (repo) =>
        !repo.fork &&
        !repo.archived &&
        Array.isArray(repo.topics) &&
        repo.topics.includes(
          PORTFOLIO_TOPIC,
        ),
    )
    .map((repo) => ({
      id: repo.id,
      repoName: repo.name,

      title:
        repo.name.toLowerCase() ===
        "devboard"
          ? "DevBoard"
          : formatProjectName(
              repo.name,
            ),

      description:
        repo.description ||
        "A project available on my GitHub profile.",

      technologies:
        getTechnologies(repo),

      demoUrl:
        repo.homepage?.trim() || "#",

      githubUrl: repo.html_url,

      updatedAt: repo.updated_at,
    }));

  saveProjectsToCache(projects);

  return projects;
}