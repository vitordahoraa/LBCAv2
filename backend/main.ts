const express = require('express')
const app = express()
const PORT = 4300

app.post('/auth',(req,res) => {
    console.log(req)
})
app.get('/',(req,res) => {
    res.send('HELLO')
})

app.listen(PORT, () => {
    console.log('SERVER INITIALIZED')
})
