// Instantiate github class from github.js
const github = new Github;
// instantiate UI
const ui = new UI;

// Search input
const searchUser = document.querySelector('#searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text from event object
  const userText = e.target.value;

  if(userText !== ''){
    // make http call
    github.getUser(userText)
      .then(data => {
        // profile from github.js
        if(data.profile.message === 'Not Found'){
          // show alert
          ui.showAlert('User not found!', 'alert alert-warning')
        } else {
          // show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
    });
  } else {
    // clear profile on empty search bar
    ui.clearProfile();
  }
});
