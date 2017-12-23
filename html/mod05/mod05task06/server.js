var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./views');
app.use('/store', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});

app.get('/first-template', function(req, res){
    res.render('first-template');
});

app.get('/dynamic-view', function(req, res){
    res.render('dynamic', {
        name: "Moja dynamiczna strona z wykorzystaniem PUG-a",
        url: "http://www.google.com",
        user: {
            name: "Jacek",
            age: "20"
        }
    });
});

app.get('/dynamic-view2', function(req, res){
    res.render('dynamic2', {
        name: "Moja dynamiczna strona z wykorzystaniem PUG-a",
        url: "http://www.google.com"
    });
});

app.get('/login',function (req,res){
    res.render('login',{
        description: "To jest strona logowania aplikacji"
    });
});

app.get('/page',function (req,res){
    res.render('page',{
        description: "To jest strona aplikacji po zalogowaniu"
    });
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});