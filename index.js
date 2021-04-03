var express = require('express')
var expressHDS = require('express-handlebars')
var app = express()
var path = require('path')


app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/assets')));
app.engine("handlebars",expressHDS({layoutsDir: __dirname + '/views/layouts', defaultLayout: 'main'}))
app.set('view engine','handlebars')
app.get('/',function (request, response){
    response.render('home')
});
app.post('/login',function (request,response){

});
app.listen(process.env.PORT || '5000')