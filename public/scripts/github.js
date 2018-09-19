class Github {
  constructor(){
    this.client_id = process.env.GIT_CLIENT_ID;
    this.client_secret = process.env.GIT_CLIENT_SECRET;
  }

  // get user and user repos
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      // in ES6 profile: profile unecessary
      profile
    }
  }
}
