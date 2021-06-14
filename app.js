const express = require('express');
const path = require('path');
const hbs=require('hbs');
const app = express();
const port = process.env.PORT || 3000
//public static path
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));



//routing
app.get('/',function(req, res, next) {
res.render('index')
})
app.get('/about',function(req, res, next) {
    res.render('about')
    })
    app.get('/weather',function(req, res, next) {
        res.render('weather')
        })
        app.get('*',function(req, res, next) {
            res.render('404error',{
                errorMsg:'OOPS! Page Not Found'
            })
            })
app.listen(port, () => {
    console.log(`listening to the port at ${port}`)
})