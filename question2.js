const input = document.getElementById("search");
const profile = document.getElementById("profile");
const repos = document.getElementById("repos");
const searchBtn = document.getElementById("Search");

async function fetchGitHubUser() {
  const username = input.value.trim();
  if (username === "") return;

  profile.innerHTML = "";
  repos.innerHTML = "";

  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);

    if (userRes.status === 404) {
      profile.innerHTML = "<p>User not found </p>";
      return;
    }

    const user = await userRes.json();

    profile.innerHTML = `
      <img src="${user.avatar_url}" width="100" />
      <h3>${user.login}</h3>
      <p>${user.bio || "No bio available"}</p>
      <p>Followers: ${user.followers}</p>
    `;

    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=created&per_page=5`
    );
    const repoData = await repoRes.json();

    repoData.forEach(repo => {
      const li = document.createElement("li");
      li.textContent = repo.name;
      repos.appendChild(li);
    });

  } catch (error) {
    profile.innerHTML = "<p>Something went wrong </p>";
  }
}


input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    fetchGitHubUser();
  }
});


searchBtn.addEventListener("click", fetchGitHubUser);
