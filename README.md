# <img src="public/imgs/github_icon.ico" width="30px"> SearchGitHub

*SearchGitHub* is an app created under the direction of [Brad Traversy](https://www.udemy.com/modern-javascript-from-the-beginning/) in his *Modern JavaScript from the Beginning* course. The app uses the following technologies:

  * JavaScript ES6
  * HTML
  * CSS
  * Bootstrap 4 and Bootswatch

<img src="public/imgs/SearchGitHub.JPG" width="50%">


The app needs to be refactored with a simple server in order to take advantage of environment variables using `dotenv`. If you wish to use this app for your own purposes, simply replace `process.env.GIT_CLIENT_ID` and `process.env.GIT_CLIENT_SECRET` in `github.js` with your own GitHub API keys. See [GitHub](https://github.com/settings/applications/new) to register your app if you do not have keys.

### Description and features

This app uses the GitHub api to search in real-time for users as one types in the search bar. Displayed results include the found user's profile picture, links to their GitHub page and personal webpage, company name, location, the date of profile creation, and a selection of GitHub badges (number of public repos, public gists, followers, and following). Five of the user's most recent and/or recently updated repos are also displayed, likewise with a selection of badges (number of stars, watchers, and forks). The number of displayed repos is easily adjusted via the `this.repos_count = 5` variable in `public/scripts/github.js`.

<img src="public/imgs/SearchGitHub_results.JPG" width="50%">

Incomplete fetch values are clearly marked, rather than displaying no data, `null`, or `undefined`.

<img src="public/imgs/SearchGitHub_no_data.JPG" width="50%">

If a search fails to return a user a temporary alert appears.

<img src="public/imgs/SearchGitHub_no_user.JPG" width="50%">