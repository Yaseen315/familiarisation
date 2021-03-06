var express = require('express');
var mongoose = require('mongoose')
var app = express();
var path = require('path');

const mongoURI = "mongodb://localhost:27017/test";

mongoose.connect(mongoURI, function(err){
    if(err) return console.log(err);
    console.log("DB connection is open");
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('list');
});

app.get('/details', function(req, res){
    res.render('details', {
        BlackMirror: {
            title: 'Black Mirror',

        }
    });

});

app.get('/most-viewed', function(req, res){
    res.render('most-viewed', {
        Actor: {
            name: 'Hugh Jackman'
        }
    });
});


app.listen(3000, function(){ 
    console.log('Server running');
});
