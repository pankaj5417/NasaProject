const http=require('http')
const express=require('express')

const app=express();
app.listen()

const PORT=process.env.PORT ||8000;

const server=http.createServer(app)

server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}...`)
})

