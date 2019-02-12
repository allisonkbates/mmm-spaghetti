// require all dependencies
var express = require('express');
var app = express();

// set up the template engine
app.set('views', './views');
app.set('view engine', 'pug');

// GET response for '/'
app.get('/', function (req, res){
    res.render('index', {title: 'Hey', message: 'Hello World!'});
});
    // render the 'index template and passin a few variables
app.listen(3000, function(){
    console.log('listening on http://localhost:3000');
})

// start up the server