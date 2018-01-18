var express = require('express');
var app = express();
var path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/index', function(req, res){
    res.render('index');
});

app.listen(3000, function(){ 
    console.log('Server running');
});
