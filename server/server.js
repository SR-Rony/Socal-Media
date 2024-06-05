const express = require('express')
const app = express()
const Port = 8000

app.get("/",(req,res)=>{
    res.send("welcome to my socal media server")
})

app.listen(Port,function(){
    console.log(`server is runing at http://localhost:${Port}`);
})