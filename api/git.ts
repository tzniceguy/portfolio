export async function fetchGithubRepos(username: string) {
  const url = `https://api.github.com/users/${username}/repos?type=owner&sort=updated&direction=desc`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const repos = await response.json();
    return repos;
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    return [];
  }
}
