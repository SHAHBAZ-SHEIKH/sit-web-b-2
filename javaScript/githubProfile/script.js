function getGitHubProfile() {
  const username = document.getElementById("usernameInput").value;
  const profileDiv = document.getElementById("profile");

  if (!username) {
    alert("Please enter a username!");
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then(res => {
      if (!res.ok) throw new Error("User not found");
      return res.json();
    })
    .then(data => {
      profileDiv.innerHTML = `
        <img src="${data.avatar_url}" alt="${data.login}" />
        <h2>${data.name || data.login}</h2>
        <p>${data.bio || "No bio available"}</p>
        <p>Followers: ${data.followers} | Following: ${data.following}</p>
        <p>Public Repos: ${data.public_repos}</p>
        <a href="${data.html_url}" target="_blank">View Profile</a>
      `;
    })
    .catch(error => {
      profileDiv.innerHTML = `<p style="color:red;">User not found!</p>`;
    });
}
