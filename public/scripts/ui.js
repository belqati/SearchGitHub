class UI {
  constructor(){
    this.profile = document.querySelector('#profile');
  }

  // display profile in UI
  showProfile(user){
    // replace null etc. in user object
    if(user.company === null || user.company === undefined){
      user.company = `<em class="unknown">Unknown</em>`
    };

    if(user.blog === null || user.blog === '' || user.blog === undefined){
      user.blog = `<a href="#"><em class="unknown">Unknown</em></a>`;
    } else {
      user.blog = `<a href="${user.blog}" target="_blank">${user.blog}</a>`;
    }

    if(user.location === null || user.location === undefined){
      user.location = `<em class="unknown">Unknown</em>`
    }

    if(user.created_at === null || user.created_at === undefined){
      user.created_at = `<em class="unknown">Unknown</em>`
    } else {
      user.created_at = user.created_at.substr(0, 10);
    }

    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-warning">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: <span class="profileColor">${user.company}</span></li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: <span class="profileColor">${user.location}</span></li>
              <li class="list-group-item">Member Since: <span class="profileColor">${user.created_at}</span></li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
    `;
  }

  // show repos
  showRepos(repos){
    let output = '';

    if(repos.length === 0){
      output = `<em class="unknown">This user has no public repos</em>`;
    } else {
      repos.forEach(function(repo){
        output += `
          <div class="card card-body mb-2">
            <div class="row">
              <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
              </div>
              <div class="col-md-6">
                <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                <span class="badge badge-warning">Watchers: ${repo.watchers_count}</span>
                <span class="badge badge-success">Forks: ${repo.forks_count}</span>
              </div>
            </div>
          </div>
        `;
      });
    }

    // output repos
    document.querySelector('#repos').innerHTML = output;
  }

  // show alert message
  showAlert(message, className){
    // clear remaining alerts
    this.clearAlert();
    // create div
    const div = document.createElement('div');
    // add classes
    div.className = className;
    // add message
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.searchContainer');
    // get search box
    const search = document.querySelector('.search');
    // insert alert
    container.insertBefore(div, search);

    // timeout alert
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  // clear alert
  clearAlert(){
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove();
    }
  }

  // clear profile when search bar is empty
  clearProfile(){
    this.profile.innerHTML = '';
  }
}