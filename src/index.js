const express = require('express')  // expressjs
const morgan = require('morgan')  // morgan
const handlebars = require('express-handlebars')  // express-handlebars
const path = require('path')  // path
const app = express()
const port = 3000 // port : 127.0.0.1 & localhost:3000

app.use(morgan('combined')) // use 'combined' of morgan  (HTTP Logger)

// static file img
app.use(express.static(path.join(__dirname, 'public')))

// Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
}
))
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "resources\\views"));

// Định tuyến route
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
    res.render('news')
})



app.get('/route', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})