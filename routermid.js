const express = require("express")
const app = express()
const port = 8000;
const route = express.Router()

//route level middleware 
app.get("/get1",function(req,res,next){
    // res.send("hello")
    console.log("hellooo")
    next()
},(req,res) => {
    res.send("hello ,hello")
    console.log("bye bye")
})

app.get("/get2",function(req,res){
    res.send("hii")
})

app.listen(port,() => {
    console.log(`server is running on ${port}`)
})









