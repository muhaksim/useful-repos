const express = require('express')

const reposRouter = require('./routes/repos.router')

const app = express()

const PORT = 3000;

app.use(express.json())

app.use('/repos', reposRouter)

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})