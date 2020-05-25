const express = require('express')
const app = express()
const port = 3100

var list = [];

app.get('/', (req, res) => {
    res.send({entries:list})
})

app.post('/entry', (req, res) => {
    list.push(Date.now())
    console.log(list)
    res.send("alles ok")
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
