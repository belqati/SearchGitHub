// Instantiate github class from github.js
const github = new Github;

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
        } else {
          // show profile
        }
    });
  } else {
    // clear profile
  }
});
