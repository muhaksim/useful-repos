const express = require('express')
const app = express()

const PORT = 3000;

const repositories = [
    {
        link:"https://github.com/openai/whisper",
        stars:"38k"
    },
    {
        link:"https://github.com/imartinez/privateGPT",
        stars:"26.4k"
    },
    {
        link:"https://github.com/iamshabell/edahab",
        stars:"1"
    },
]

app.use(express.json())

app.get('/repos', (req, res)=> {
    res.status(200).json(repositories)
})

app.post('/new', (req, res)=>{
    const newRepo = req.body
    repositories.push(newRepo)
    res.status(201).json(newRepo)
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})