const express = require('express')
const app = express()
const port = 3000

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