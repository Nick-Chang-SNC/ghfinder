class Github {
  constructor() {
    this.client_id = "39351f765766e9d6ce84";
    this.client_secret = `fc1f2adc878843a8ca414acacc9703721d0bbb01`;
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profileData = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile: profileData,
      repos: repos
    };
  }
}
