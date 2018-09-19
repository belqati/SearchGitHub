class Github {
  constructor(){
    this.client_id = process.env.GIT_CLIENT_ID;
    this.client_secret = process.env.GIT_CLIENT_SECRET;

    // specify number of repos to show and sort
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  // get user and user repos
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      // in ES6 profile: profile unecessary
      profile,
      repos
    }
  }
}
