const express = require("express")
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/now', (request, response)=>{
    const date = new Date()
    response.send(date)
})
app.get('/hello', (request, response)=>{
    response.send("Hello")
})

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})
