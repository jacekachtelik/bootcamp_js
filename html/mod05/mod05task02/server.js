var express = require('express');
var app = express();
app.get('/',function (req,res) {
    res.send('Witaj świecie');
});
var server = app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});