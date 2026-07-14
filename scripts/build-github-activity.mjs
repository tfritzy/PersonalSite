import { writeFile } from "node:fs/promises";

const username = process.env.GITHUB_USERNAME || "tfritzy";
const token = process.env.GITHUB_TOKEN || "";
const apiBase = "https://api.github.com";
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "PersonalSite activity cache",
};

if (token) {
  headers.Authorization = `Bearer ${token}`;
}

async function fetchJson(url) {
  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${url}`);
  }

  return response.json();
}

async function fetchPages(url) {
  const items = [];
  let page = 1;

  while (true) {
    const separator = url.includes("?") ? "&" : "?";
    const batch = await fetchJson(`${url}${separator}per_page=100&page=${page}`);

    items.push(...batch);

    if (batch.length < 100) {
      return items;
    }

    page += 1;
  }
}

function compactCommit(repo, commit) {
  return {
    repo: repo.name,
    message: commit.commit.message.split("\n")[0],
    date: commit.commit.author?.date || commit.commit.committer?.date,
    url: commit.html_url,
    sha: commit.sha,
  };
}

async function fetchRepoCommits(repo) {
  try {
    const commits = await fetchPages(
      `${apiBase}/repos/${username}/${repo.name}/commits?author=${username}&sha=${repo.default_branch}`
    );

    return commits.map((commit) => compactCommit(repo, commit));
  } catch (error) {
    console.warn(`Skipping ${repo.name}: ${error.message}`);
    return [];
  }
}

async function main() {
  const repos = await fetchPages(`${apiBase}/users/${username}/repos?sort=pushed&type=owner`);
  const commits = [];

  for (const repo of repos) {
    if (repo.fork || repo.disabled) {
      continue;
    }

    commits.push(...(await fetchRepoCommits(repo)));
  }

  commits.sort((a, b) => new Date(b.date) - new Date(a.date));

  const payload = {
    username,
    generatedAt: new Date().toISOString(),
    repoCount: repos.length,
    commitCount: commits.length,
    commits,
  };

  await writeFile("github-activity.json", `${JSON.stringify(payload, null, 2)}\n`);
  console.log(`Wrote ${payload.commitCount} commits from ${payload.repoCount} repos`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
