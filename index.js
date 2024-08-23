const express = require('express')  // expressjs
const morgan = require('morgan')  // morgan
const app = express()
const port = 3000 // port : 127.0.0.1 & localhost:3000

app.use(morgan('combined')) // use 'combined' of morgan

// Định tuyến route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/route', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})