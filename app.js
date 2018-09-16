require('dotenv').config();
let express = require('express');
let app = express();

let port = process.env.PORT || process.env.IP;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
  res.render('index');
  console.log('yoyo');
});


app.listen(port, function(){
  console.log('SearchGitHub is listening!')
});